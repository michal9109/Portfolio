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
