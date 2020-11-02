let elemntCorrent = 0;

const sliderShowNext = () => {
  const $figures = document.querySelectorAll(
    ".container-img__laptop-slider figure"
  );
  $figures.forEach((figure) => {
    figure.style.zIndex = 0;
  });
  elemntCorrent++;
  if ($figures.length === elemntCorrent) {
    elemntCorrent = 0;
  }
  $figures[elemntCorrent].style.zIndex = 1;
};

const sliderShowPrev = () => {
  const $figures = document.querySelectorAll(
    ".container-img__laptop-slider figure"
  );
  $figures.forEach((figure) => {
    figure.style.zIndex = 0;
  });
  elemntCorrent--;
  if (elemntCorrent < 0) {
    elemntCorrent = 3;
  }
  $figures[elemntCorrent].style.zIndex = 1;
};
