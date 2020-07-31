import "./sass/index.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import $ from "jquery";

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

function scroll(e) {
  var href = $(this).attr("href");

  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    600
  );

  location.hash = href;
}

$('a[href^="#"]').click(scroll);

// img
const imgeffect = document.querySelectorAll(".section-projects__img");
const live = document.querySelectorAll(".section-projects__live");

imgeffect.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("section-projects__img--link");
  });
});
