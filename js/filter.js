// ======================================
// Gallery Filter
// ======================================

document.addEventListener("DOMContentLoaded", async function () {

  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");

  // Fonction qui applique le filtre
  function applyFilter(filter) {

    // Active le bon bouton
    buttons.forEach(btn => {
      btn.classList.toggle(
        "active",
        btn.getAttribute("data-filter") === filter
      );
    });

    // Affiche / cache les éléments
    items.forEach(item => {
      const category = item.getAttribute("data-category");

      if (filter === "all" || category.includes(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // ======================================
  // Clic sur les boutons
  // ======================================

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      const filter = btn.getAttribute("data-filter");

      applyFilter(filter);

    });
  });

  // ======================================
  // Filtre provenant de l'URL
  // ======================================

  const params = new URLSearchParams(window.location.search);
  const urlFilter = params.get("filter");

  if (urlFilter) {
    applyFilter(urlFilter);
  } else {
    // Filtre par défaut
    applyFilter("all");
  }

});
