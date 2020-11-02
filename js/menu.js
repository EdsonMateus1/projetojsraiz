const menuController = () => {
  const $menu = document.querySelector("#header__nav");

  if ($menu.classList.contains("menu-none")) {
    $menu.classList.remove("menu-none");
    $menu.classList.add("menu-active");
  } else {
    $menu.classList.remove("menu-active");
    $menu.classList.add("menu-none");
  }
};
