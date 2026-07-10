function setupLanguage() {
  const saved = localStorage.getItem("a2a-cba-lang") || "en";
  document.body.dataset.lang = saved;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === saved);
    button.setAttribute("aria-pressed", String(button.dataset.lang === saved));
    button.addEventListener("click", () => {
      document.body.dataset.lang = button.dataset.lang;
      localStorage.setItem("a2a-cba-lang", button.dataset.lang);
      document.querySelectorAll("[data-lang]").forEach((item) => {
        item.classList.toggle("active", item.dataset.lang === button.dataset.lang);
        item.setAttribute("aria-pressed", String(item.dataset.lang === button.dataset.lang));
      });
    });
  });
}

function setupInterventionFilters() {
  const cards = [...document.querySelectorAll("[data-card]")];
  const search = document.querySelector("[data-search]");
  const filters = [...document.querySelectorAll("[data-filter]")];
  if (!cards.length) return;

  let activeArea = "all";

  function applyFilters() {
    const query = (search?.value || "").trim().toLowerCase();
    cards.forEach((card) => {
      const matchesArea = activeArea === "all" || card.dataset.area === activeArea;
      const matchesQuery = !query || card.textContent.toLowerCase().includes(query);
      card.classList.toggle("hidden", !(matchesArea && matchesQuery));
    });
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      activeArea = button.dataset.filter;
      filters.forEach((item) => item.classList.toggle("active", item === button));
      applyFilters();
    });
  });

  search?.addEventListener("input", applyFilters);
  applyFilters();
}

setupLanguage();
setupInterventionFilters();
