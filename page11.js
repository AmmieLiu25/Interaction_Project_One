document.addEventListener("DOMContentLoaded", function () {
    sessionStorage.setItem("previousPage", window.location.href);
    let diamond = document.getElementById("diamond1");
  
    if (diamond) {
      diamond.addEventListener("mouseenter", function () {
        window.location.href = "page12.html";
      });
    }
  });
  
document.addEventListener("DOMContentLoaded", function () {
    sessionStorage.setItem("previousPage", window.location.href);
    let diamond = document.getElementById("diamond2");
  
    if (diamond) {
      diamond.addEventListener("mouseenter", function () {
        window.location.href = "page13.html";
      });
    }
  });

document.addEventListener("DOMContentLoaded", function () {
    sessionStorage.setItem("previousPage", window.location.href);
    let diamond = document.getElementById("diamond3");
  
    if (diamond) {
      diamond.addEventListener("mouseenter", function () {
        window.location.href = "page14.html";
      });
    }
  });
  