// ======================================
// Charge un composant HTML dans une balise
// Exemple : header ou footer
// ======================================

async function loadComponent(id, file) {

  const element = document.getElementById(id);

  if (!element) return null;

  try {

    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Impossible de charger ${file}`);
    }

    element.innerHTML = await response.text();

    return element;

  } catch (error) {

    console.error(error);

    return null;

  }
}

// ======================================
// Initialisation du Header
// ======================================

async function initHeader() {

  const header = await loadComponent(
    "header",
    "components/header.html"
  );

  if (!header) return;

  document
    .getElementById("main-navbar")
    ?.classList.add(header.dataset.navbar);

  document
    .getElementById("navbar-logo")
    ?.setAttribute("src", header.dataset.logo);
}

// ======================================
// Initialisation du Footer
// ======================================

async function initFooter() {

  const footer = await loadComponent(
    "footer",
    "components/footer.html"
  );

  if (!footer) return;

  document
    .querySelector(".back-to-top")
    ?.addEventListener("click", function (e) {

      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

}

// ======================================
// Démarrage de la page
// ======================================

document.addEventListener("DOMContentLoaded", async function () {

  await initHeader();
  await initFooter();

});