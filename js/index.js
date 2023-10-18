import CarouselData from "./carouselData.js";

const carouselSectionList = document.querySelector(
    "section#join-facebook-groups-section-carousel-section ul"
)

CarouselData.forEach(function (cardData) {
    const baseListItem = document.createElement("li")
    baseListItem.innerHTML = `
<article>
    <figure>
        <img src="${cardData.imagePath}" alt="${cardData.imgAltText}"/>
        <figcaption>
            <img src="assets/Group.svg" alt="Facebook logo" class="fb-logo">
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
        <button>${cardData.btnText}</button>
    </div>
</article>
`


    carouselSectionList.appendChild(baseListItem)
})
