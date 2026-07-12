async function loadHeader() {

  const header = document.getElementById("header");

  if (!header) return;

  const response = await fetch("components/header.html");
  const data = await response.text();

  header.innerHTML = data;

  const navbarClass = header.dataset.navbar;
  const logo = header.dataset.logo;

  document
    .getElementById("main-navbar")
    ?.classList.add(navbarClass);

  document
    .getElementById("navbar-logo")
    ?.setAttribute("src", logo);
}

async function loadFooter() {

  const footer = document.getElementById("footer");

  if (!footer) return;

  const response = await fetch("components/footer.html");
  const data = await response.text();

  footer.innerHTML = data;

  const backToTop = document.querySelector(".back-to-top");

  backToTop?.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {

  await loadHeader();
  await loadFooter();

});