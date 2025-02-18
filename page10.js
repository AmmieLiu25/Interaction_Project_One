document.addEventListener("DOMContentLoaded", function () {
    let diamond6 = document.getElementById("diamond17");

    if (diamond6) {
        diamond6.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation

            // Create the black circle div
            let transitionCircle = document.createElement("div");
            transitionCircle.classList.add("transition-circle");
            document.body.appendChild(transitionCircle);

            // Start the animation
            setTimeout(() => {
                transitionCircle.classList.add("expand");
            }, 10); // Small delay to ensure animation starts

            // Navigate to the next page after animation completes
            setTimeout(() => {
                window.location.href = "page11.html";
            }, 900); // Slightly longer than animation duration
        });
    }
});
