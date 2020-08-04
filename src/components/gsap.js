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

//header title
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

///// ScrollTo
const navItem = document
  .querySelectorAll(".navigation__title, .navigation__item, .btn")
  .forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (index === 4) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: "#section" + (index + 1) },
        });
      } else if (index === 5) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: "#section4" },
        });
      } else {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: "#section" + (index + 1), offsetY: 35 },
        });
      }
    });
  });
