# NewspaperApp Image Proxy

This Cloudflare Worker gives the static GitHub Pages app a CORS-safe way to fetch magazine JPG pages for browser-side PDF generation.

## Deploy

```bash
cd newspaperapp/cloudflare-worker
npx wrangler deploy
```

After deploy, open the app once with your Worker URL:

```text
https://your-site.example/newspaperapp/?imageProxy=https://newspaperapp-image-proxy.npapp.workers.dev
```

The app now uses `https://newspaperapp-image-proxy.npapp.workers.dev` by default. Passing `imageProxy` is still useful if you deploy another Worker URL later.

## Endpoints

```text
GET /health
GET /image?url=https%3A%2F%2Fepaper.dotsolution.net%2Fassets%2Ffile_media%2F...
```

The proxy only allows HTTPS JPG files from `epaper.dotsolution.net/assets/file_media/`.
