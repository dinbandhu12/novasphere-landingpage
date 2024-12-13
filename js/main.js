// NAVBAR
// Hamburger menu toggle
document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".nav-contact").classList.toggle("active");
});

// Close the hamburger menu when a navigation link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      document.querySelector(".hamburger").classList.remove("active");
      document.querySelector(".nav-links").classList.remove("active");
      document.querySelector(".nav-contact").classList.remove("active");
    }
  });
});

// Navbar bottom border
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
