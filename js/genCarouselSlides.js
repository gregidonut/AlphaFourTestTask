import CAROUSEL_DATA from "./carouselData.js";

export default function GenCarouselSlides(maxCardsPerSlide) {
    const slideList = [];

    for (let i = 0; i < CAROUSEL_DATA.length; i += maxCardsPerSlide) {
        // console.log("pushing...")
        // console.log(JSON.stringify(CAROUSEL_DATA.slice(i, i + maxCardsPerSlide)))
        slideList.push(CAROUSEL_DATA.slice(i, i + maxCardsPerSlide));
    }

    const carouselSlideIndicatorList = document.querySelector("div#join-facebook-groups-section-carousel-slide-indicators ul")

    for (let i = 0; i < slideList.length; i++) {
        const baseListItem = document.createElement("li")
        baseListItem.innerText = "⚪️"

        carouselSlideIndicatorList.appendChild(baseListItem)
    }

    return slideList
}
