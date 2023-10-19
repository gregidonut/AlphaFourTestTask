import RenderCarousel from "./renderCarousel.js";

const mediaQueryMin1300 = window.matchMedia('(min-width: 1300px)');
const mediaQueryMin900 = window.matchMedia('(min-width: 900px)');
export default function CarouselContainerQuery() {
    setInitialCarouselState();
    mediaQueryMin1300.addEventListener('change', handleMediaQueryChange1200);
    mediaQueryMin900.addEventListener('change', handleMediaQueryChange900);
}

function handleMediaQueryChange1200(mediaQuery) {
    if (mediaQuery.matches) {
        RenderCarousel(3)
        return
    }

    RenderCarousel(2)
}

function handleMediaQueryChange900(mediaQuery) {
    if (mediaQuery.matches) {
        RenderCarousel(2)
        return
    }
    RenderCarousel(1)
}

function setInitialCarouselState() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1300) {
        RenderCarousel(3);
    } else if (windowWidth >= 900) {
        RenderCarousel(2);
    } else {
        RenderCarousel(1);
    }
}

