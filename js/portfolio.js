// ======================================
// Gallery Animation - apparition douce
// ======================================

document.addEventListener("DOMContentLoaded", async function () {

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".gallery-item").forEach(el => {
      observer.observe(el);
    });

});