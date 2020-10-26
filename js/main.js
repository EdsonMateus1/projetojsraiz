//import menuController from "./menu";

function menuController() {
  const $menu = document.querySelector("#header__nav");

  if ($menu.classList.contains("menu-none")) {
    $menu.classList.remove("menu-none");
    $menu.classList.add("menu-active");
  } else {
    $menu.classList.remove("menu-active");
    $menu.classList.add("menu-none");
  }
}
(function main() {
  const $body = document.querySelector("body");
  $body.classList.remove("no-js");
  $body.classList.add("js");

  const $btnMenu = document.querySelector("#header__btm-menu");
  $btnMenu.removeAttribute("style");

  $btnMenu.addEventListener("click", menuController);
})();
