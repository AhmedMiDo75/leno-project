//  Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
