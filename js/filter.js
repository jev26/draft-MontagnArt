// ======================================
// Gallery Filter 
// ======================================

document.addEventListener("DOMContentLoaded", async function () {

  const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // active button
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    items.forEach(item => {
      const category = item.getAttribute("data-category");

      if (filter === "all" || category.includes(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

  });
});

});