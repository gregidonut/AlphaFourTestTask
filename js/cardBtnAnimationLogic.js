export default function CardBtnAnimationLogic() {
    const cardBtns = document.querySelectorAll("button.card-btn");
    cardBtns.forEach(function (btn) {
        btn.addEventListener("mouseenter", function () {
            btn.classList.add("focused");
        });

        btn.addEventListener("mouseleave", function () {
            btn.classList.remove("focused");
        });

        btn.addEventListener("focus", function () {
            btn.classList.add("focused");
        });

        btn.addEventListener("blur", function () {
            btn.classList.remove("focused");
        });

        btn.addEventListener("mousedown", function () {
            btn.classList.add("activated");
        });

        btn.addEventListener("mouseup", function () {
            btn.classList.remove("activated");
        });

        btn.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                btn.classList.add("activated");
            }
        });

        btn.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                btn.classList.remove("activated");
            }
        });

    })
}