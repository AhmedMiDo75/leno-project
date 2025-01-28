//  Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

// Scroll Navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});

// Video Player
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  const videoBtn = document.querySelector(".preview__video-button");
  const closeBtn = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");
  // Open Modal When Clicked
  videoBtn.addEventListener("click", function () {
    modal.style.display = "block";
    // Replace the src attribute with the video URL
    videoPlayer.src = "https://www.youtube.com/embed/8sXRyHI3bLw";
    // Close Modal on click
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      videoPlayer.src = "";
    });
    // Close modal on outter click
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        videoPlayer.src = "";
      }
    });
  });
});
