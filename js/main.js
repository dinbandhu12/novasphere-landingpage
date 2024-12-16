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

// GSAP Animation here

function navHeroAnimation() {
  var tl = gsap.timeline();

  tl.from("nav .nav-logo, nav .nav-items, nav .nav-contact", {
    y: "-30",
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
    ease: "ease-in",
  });

  tl.from(".hero-content h1", {
    x: "-100",
    duration: 1,
    opacity: 0,
    ease: "ease-in",
  });

  tl.from(".hero-content .hero-subheading", {
    x: "-100",
    duration: 1,
    opacity: 0,
    ease: "ease-in",
  });
}

function aboutanimation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-container",
      scoller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 0.5,
    },
  });

  tl2.from(
    ".about-content h2, .about-content p",
    {
      opacity: 0,
      x: "-50",
      duration: 1,
      delay: 0.5,
      ease: "ease-in",
      stagger: 0.5,
    },
    "anime"
  );
  tl2.from(
    ".focus-content h2, .focus-content p",
    {
      opacity: 0,
      x: "-50",
      duration: 1,
      delay: 0.5,
      ease: "ease-in",
      stagger: 0.5,
    },
    "anime"
  );
  tl2.from(
    "#aboutbtn",
    {
      opacity: 0,
      x: "-50",
      duration: 1,
      delay: 0.5,
      ease: "ease-in",
      stagger: 0.5,
    },
    "anime"
  );
}

function commitmentAnimation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".commitment-section",
      scoller: "body",
      start: "top 80%",
      end: "top 40%",
      // scrub: 0.5,
    },
  });

  tl3.from(".commitment-container .partner-logos img", {
    opacity: 0,
    y: "30",
    stagger: 0.1,
    ease: "ease-in",
    duration: 0.2,
    delay: 0.2,
  });

  tl3.from(
    ".commitment-heading h2, .commitment-heading .commitment-btns",
    {
      opacity: 0,
      x: "-50",
      duration: 1,
      ease: "ease-in",
      stagger: 0.5,
    },
    "anime2"
  );

  tl3.from(
    ".commitment-img",
    {
      opacity: 0,
      x: "50",
      duration: 0.5,
      delay: 0.5,
      ease: "ease-in",
    },
    "anime2"
  );

  tl3.from(".commitment-para p", {
    opacity: 0,
    x: "-50",
    duration: 1,
    ease: "ease-in",
    stagger: 0.5,
  });

  tl3.from(".commitment-cards", {
    opacity: 0,
    y: "-30",
    duration: 1,
    ease: "ease-in",
    stagger: 0.5,
  });
}

function focusAnimation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#focus",
      scoller: "body",
      start: "top 80%",
      end: "top 40%",
      // markers: true,
      // scrub: 0.5,
    },
  });

  tl4.from(".focus-content-main h2", {
    opacity: 0,
    y: "-50",
    duration: 1,
    ease: "ease-in",
  });

  tl4.from(".focus-para h3, .focus-para p", {
    opacity: 0,
    x: "-30",
    duration: 0.5,
    ease: "ease-in",
    stagger: 0.5,
  });

  tl4.from(".focus-sm-card", {
    opacity: 0,
    x: "30",
    duration: 0.5,
    ease: "ease-in",
  });
  // cards
  tl4.from(".focus-card-1, .focus-card-2, .focus-card-3", {
    opacity: 0,
    y: "30",
    duration: 1,
    ease: "ease-in",
    stagger: 0.5,
  });

  tl4.from(".mission-part, .vision-part", {
    opacity: 0,
    x: "30",
    duration: 1,
    ease: "ease-in",
    stagger: 0.2,
  });
}

function globalservicesAnimation() {
  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".global-services-section",
      scoller: "body",
      start: "top 80%",
      end: "top 40%",
      // markers: true,
      // scrub: 0.5,
    },
  });

  tl5.from(
    ".global-services-subheading h2",
    {
      opacity: 0,
      // x: "-50",
      duration: 2,
      delay: 0.5,
      ease: "ease-in",
    },
    "anime5"
  );
  tl5.from(
    ".contact-btn-2",
    {
      opacity: 0,
      x: "-30",
      ease: "ease-in",
    },
    "anime5"
  );

  tl5.from(
    ".global-services-card-1 h3, .global-services-card-1 p, .global-services-card-1-btn",
    {
      opacity: 0,
      x: "-30",
      duration: 1,
      ease: "ease-in",
      stagger: 0.5,
    }
  );

  tl5.from(".global-services-card-2", {
    opacity: 0,
    x: "30",
    duration: 1,
    ease: "ease-in",
  });
}

function servicessectionTwoAnimation() {
  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-section-2",
      scoller: "body",
      start: "top 80%",
      end: "top 40%",
      // markers: true,
      // scrub: 0.5,
    },
  });

  tl6.from(
    ".services-section-2-content h2, .services-section-2-content h3, .services-section-2-content p",
    {
      opacity: 0,
      x: "-50",
      duration: 1,
      ease: "ease-in",
      stagger: 0.5,
    }
  );

  tl6.from(".services-section-2-content-btn", {
    opacity: 0,
    x: "-50",
    duration: 1,
    ease: "ease-in",
    stagger: 0.5,
  });
}

function footerAnimation() {
  var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-section",
      scoller: "body",
      start: "top 90%",
    }
  });
  
  tl7.from(".footer-section", {
    opacity: 0,
    y: "30",
    duration: 1,
    ease: "ease-in",
  })
  
  // tl7.from(".footer-company, .footer-legal, .footer-social", {
  //   opacity: 0,
  //   y: "-30",
  //   duration: 0.5,
  //   ease: "ease-in",
  //   stagger: 0.5,
  // })
}

navHeroAnimation();
aboutanimation();
commitmentAnimation();
focusAnimation();
globalservicesAnimation();
servicessectionTwoAnimation();
footerAnimation();

