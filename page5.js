document.addEventListener("DOMContentLoaded", function () {
    let diamond = document.getElementById("diamond");
    let transitionCircle = document.querySelector(".transition-circle");
    let pageContainer = document.querySelector(".page-container");

    if (diamond) {
        diamond.addEventListener("click", function () {
            transitionCircle.style.opacity = "1"; // Make the circle visible

            setTimeout(() => {
                transitionCircle.style.width = "0";
                transitionCircle.style.height = "0";
                pageContainer.style.transform = "scale(0.8)"; // Shrink whole page
                pageContainer.style.opacity = "0"; // Fade out the page too
            }, 100); // Short delay for visibility

            setTimeout(() => {
                window.location.href = "page6.html";
            }, 1600); // Redirect after animation
        });
    }
});
