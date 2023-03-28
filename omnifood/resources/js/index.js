// DOM Selectors
var navIcon = document.querySelector(".nav-icon");
var navList = document.querySelector("nav ul");

// Event Listener
navIcon.addEventListener("click", function (e) {
  e.target.classList.toggle("fa-times");
  navList.classList.toggle("show");
});