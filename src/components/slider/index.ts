const slider = document.getElementById("slider");
const sliderItems = slider?.querySelectorAll("[data-slider-item]");
let currentSlide = 0;
const slideDuration = 300;

const goToSlide = (index: number) => {
  if (slider && sliderItems) {
    if (index < 0) index = sliderItems.length - 1;
    if (index >= sliderItems.length) index = 0;

    currentSlide = index;
    const translateValue = -currentSlide * 100;
    slider.classList.add(
      "transition-transform",
      "ease-in-out",
      `duration-${slideDuration}`,
    );
    slider.style.transform = `translateX(${translateValue}vw)`;
  }
};

const handleSliderChange = (index: number) => {
  if (slider && sliderItems) {
    if (index < 0) index = sliderItems.length - 1;
    if (index >= sliderItems.length) index = 0;

    goToSlide(index);
    setTimeout(() => {
      slider.classList.remove(
        "transition-transform",
        "ease-in-out",
        `duration-${slideDuration}`,
      );
    }, slideDuration);
  }
};

export const setupSlider = () => {
  const sliderNextButton = document.getElementById("slider-next");
  const sliderPreviousButton = document.getElementById("slider-previous");

  if (sliderNextButton) {
    sliderNextButton.addEventListener("click", () => {
      handleSliderChange(currentSlide + 1);
    });
  }

  if (sliderPreviousButton) {
    sliderPreviousButton.addEventListener("click", () => {
      handleSliderChange(currentSlide - 1);
    });
  }
};
