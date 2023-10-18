import CarouselData from "./carouselData.js";

const carouselSectionList = document.querySelector(
    "section#join-facebook-groups-section-carousel-section ul"
)

CarouselData.forEach(function (cardData) {
    const baseListItem = document.createElement("li")
    baseListItem.innerHTML = `
<figure>
    <img src="${cardData.imagePath}" alt="${cardData.imgAltText}"/>
    <figcaption>
        <h3>${cardData.header}</h3>
        <p>${cardData.members} members</p>
    </figcaption>
</figure>
<p>
    ${cardData.caption}
</p>
<button>${cardData.btnText}</button>
`


    carouselSectionList.appendChild(baseListItem)
})
