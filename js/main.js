(function main() {
  const $body = document.querySelector("body");
  $body.classList.remove("no-js");
  $body.classList.add("js");

  const $btnMenu = document.querySelector("#header__btm-menu");
  $btnMenu.removeAttribute("style");
  $btnMenu.addEventListener("click", menuController);

  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  prev.removeAttribute("style");
  next.removeAttribute("style");
  next.addEventListener("click", sliderShowNext);
  prev.addEventListener("click", sliderShowPrev);
})();
