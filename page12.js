document.addEventListener("DOMContentLoaded", function () {
    let returnZone = document.getElementById("diamond1");
    let previousPage = sessionStorage.getItem("previousPage");

    if (returnZone && previousPage) {
        returnZone.addEventListener("mouseout", function () {
            console.log("Mouse left return zone, going back...");
            window.location.href = previousPage; // Navigate back
        });
    }
});
