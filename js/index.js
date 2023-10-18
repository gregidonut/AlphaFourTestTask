import CAROUSEL_DATA from "./carouselData.js";
import CardBtnAnimationLogic from "./cardBtnAnimationLogic.js";
import CarouselSlidIndicators from "./carouselSlideIndicators.js";

const carouselSectionList = document.querySelector(
    "section#join-facebook-groups-section-carousel-section ul"
)

CAROUSEL_DATA.forEach(function (cardData) {
    const baseListItem = document.createElement("li")
    baseListItem.innerHTML = `
<article>
    <figure>
        <img src="${cardData.imagePath}" alt="${cardData.imgAltText}"/>
        <figcaption>
            <img src="assets/fb_icon_white_no_bg.svg" alt="Facebook logo" class="fb-logo">
            <div>
                <h3>${cardData.header}</h3>
                <p>${cardData.members} members</p>
            </div>
        </figcaption>
    </figure>
    <div>
        <p>
            ${cardData.caption}
        </p>
        <button class="card-btn">
            <img src="assets/fb_icon_transparent_white_bg.svg" alt="Facebook logo">
            <span>${cardData.btnText}</span>
        </button>
    </div>
</article>
`
    carouselSectionList.appendChild(baseListItem)
})

CardBtnAnimationLogic()
CarouselSlidIndicators()
