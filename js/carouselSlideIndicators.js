import CAROUSEL_DATA from "./carouselData.js";

export default function CarouselSlideIndicators() {
    let maxCardsPerSlide = 3
    const numberOfSlides = Math.ceil(CAROUSEL_DATA.length / maxCardsPerSlide)
    const carouselSlideIndicatorList = document.querySelector("div#join-facebook-groups-section-carousel-slide-indicators ul")


    for (let i = 0; i < numberOfSlides; i++) {
        const baseListItem = document.createElement("li")
        baseListItem.innerText = "⚪️"

        carouselSlideIndicatorList.appendChild(baseListItem)
    }
}
