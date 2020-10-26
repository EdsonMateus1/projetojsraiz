export default function menuController() {
  const $menu = document.querySelector("#flex__header__nav");
  $menu.classList.remove("menu-none");
  $menu.classList.add("menu-active");
  console.log($menu);
}
