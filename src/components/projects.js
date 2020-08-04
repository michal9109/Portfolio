const imgeffect = document.querySelectorAll(".section-projects__img");

imgeffect.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("section-projects__img--link");
  });
});
