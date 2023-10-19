import CardBtnAnimationLogic from "./cardBtnAnimationLogic.js";
import GenCarouselSlides from "./genCarouselSlides.js";

const carouselSectionList = document.querySelector(
    "section#join-facebook-groups-section-carousel-section ul"
)
const leftSlideBtn = document.querySelector(
    "button#join-facebook-groups-section-carousel-section-left-slider-btn"
)
const rightSlideBtn = document.querySelector(
    "button#join-facebook-groups-section-carousel-section-right-slider-btn"
)

const listOfSlides = GenCarouselSlides(3)

let slideIndex = 0;

function updateCarousel() {
    // Clear the current content of the carousel
    carouselSectionList.innerHTML = "";

    listOfSlides[slideIndex].forEach((cardData) => {
        const baseListItem = document.createElement("li");
        baseListItem.innerHTML = `
      <article>
        <figure>
          <img src="${cardData.imagePath}" alt="${cardData.imgAltText}" />
          <figcaption>
            <img src="assets/fb_icon_white_no_bg.svg" alt="Facebook logo" class="fb-logo">
            <div>
              <h3>${cardData.header}</h3>
              <p>${cardData.members} members</p>
            </div>
          </figcaption>
        </figure>
        <div>
          <p>${cardData.caption}</p>
          <button class="card-btn">
            <img src="assets/fb_icon_transparent_white_bg.svg" alt="Facebook logo">
            <span>${cardData.btnText}</span>
          </button>
        </div>
      </article>
    `;
        carouselSectionList.appendChild(baseListItem);
    });
}

updateCarousel();
rightSlideBtn.addEventListener("click", () => {
    slideIndex++;

    if (slideIndex >= listOfSlides.length) {
        slideIndex = listOfSlides.length - 1; // Wrap to the last slide
        rightSlideBtn.classList.add("dead")
        return
    }

    rightSlideBtn.classList.remove("dead")
    updateCarousel();
});

leftSlideBtn.addEventListener("click", () => {
    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = 0;
        leftSlideBtn.classList.add("dead")
        return
    }

    leftSlideBtn.classList.remove("dead")
    updateCarousel();
});

CardBtnAnimationLogic()
