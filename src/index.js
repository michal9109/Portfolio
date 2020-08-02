import "./sass/index.scss";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const aboutImg = document.querySelector(".section-about__content");

gsap.fromTo(
  aboutImg.children,
  { y: "+=100", opacity: 0 },
  {
    y: "0",
    opacity: 1,
    stagger: 0.5,
    duration: 1,
    ease: "easeInOut",
    scrollTrigger: {
      trigger: ".section-about",
      start: "top 30%",
    },
  }
);
//project
const projectsImg = document.querySelectorAll(".section-projects__box-p");

projectsImg.forEach((img) => {
  gsap.fromTo(
    img,
    { y: "+=100", opacity: 0 },
    {
      y: "0",
      opacity: 1,
      stagger: 0.5,
      duration: 1,

      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".section-projects",
        start: "top 30%",
      },
    }
  );
});

//hamburger menu
const hamburger = document.querySelector(".navigation__hamburger");
const nav = document.querySelector(".navigation__div");

const handleClick = () => {
  hamburger.classList.toggle("navigation__hamburger--active");
  nav.classList.toggle("navigation__div--active");
};

hamburger.addEventListener("click", handleClick);

const navLinks = document.querySelectorAll(".navigation__link");

navLinks.forEach((el) => {
  el.addEventListener("click", () => {
    hamburger.classList.toggle("navigation__hamburger--active");
    nav.classList.toggle("navigation__div--active");
  });
});

const title = document
  .querySelector(".navigation__title")
  .addEventListener("click", () => {
    hamburger.classList.remove("navigation__hamburger--active");
    nav.classList.remove("navigation__div--active");
  });

//skills

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee__content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

//shine typping effect
let glowInTexts = document.querySelectorAll(".glowIn ");
glowInTexts.forEach((glowInText) => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    glowInText.append(span);
  });
});

///// scroll
document
  .querySelectorAll(".navigation__item", ".navigation__title")
  .forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#section" + (index + 1), offsetY: 20 },
      });
    });
  });

// img
const imgeffect = document.querySelectorAll(".section-projects__img");

imgeffect.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("section-projects__img--link");
  });
});
