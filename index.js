const menuToggle = document.querySelector(".menu-toggle");
const showcase = document.querySelector(".landing");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
