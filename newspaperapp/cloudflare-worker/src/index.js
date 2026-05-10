const ALLOWED_HOSTNAME = "epaper.dotsolution.net";
const ALLOWED_PATH_PREFIX = "/assets/file_media/";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400"
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...CORS_HEADERS
    }
  });
}

function validateImageUrl(rawUrl) {
  if (!rawUrl) {
    return { error: "Missing url parameter." };
  }

  let targetUrl;
  try {
    targetUrl = new URL(rawUrl);
  } catch (error) {
    return { error: "Invalid image URL." };
  }

  if (targetUrl.protocol !== "https:") {
    return { error: "Only HTTPS image URLs are allowed." };
  }

  if (targetUrl.hostname !== ALLOWED_HOSTNAME) {
    return { error: "Image host is not allowed." };
  }

  if (!targetUrl.pathname.startsWith(ALLOWED_PATH_PREFIX) || !targetUrl.pathname.endsWith(".jpg")) {
    return { error: "Image path is not allowed." };
  }

  return { targetUrl };
}

async function proxyImage(request) {
  if (!["GET", "HEAD"].includes(request.method)) {
    return json({ error: "Method not allowed." }, 405);
  }

  const requestUrl = new URL(request.url);
  const { targetUrl, error } = validateImageUrl(requestUrl.searchParams.get("url"));
  if (error) {
    return json({ error }, 400);
  }

  const upstream = await fetch(targetUrl.toString(), {
    cf: {
      cacheEverything: true,
      cacheTtl: 86400
    }
  });

  if (!upstream.ok) {
    return json({ error: `Image request failed with status ${upstream.status}.` }, upstream.status);
  }

  const headers = new Headers(upstream.headers);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Cache-Control", "public, max-age=86400");
  headers.delete("Set-Cookie");

  return new Response(request.method === "HEAD" ? null : upstream.body, {
    status: upstream.status,
    headers
  });
}

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const requestUrl = new URL(request.url);
    if (requestUrl.pathname === "/" || requestUrl.pathname === "/health") {
      return json({ ok: true, service: "newspaperapp-image-proxy" });
    }

    if (requestUrl.pathname === "/image") {
      return proxyImage(request);
    }

    return json({ error: "Not found." }, 404);
  }
};
