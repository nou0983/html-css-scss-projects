// Selectors
let btnNav = document.querySelector(".btn-nav");
let navIcon = document.querySelector(".btn-nav__icon");
let navList = document.querySelector(".navigation__list");

let btnPopup = document.querySelectorAll(".btn--pop-up");
let btnClose = document.querySelector(".section-pop-up__icon");
let popup = document.querySelector(".section-pop-up");

// Navigation
btnNav.addEventListener("click", (e) => {
  navIcon.classList.toggle("btn-nav__icon--transparent");
  navList.classList.toggle("navigation__list--show");
});

// Popup open event handler
btnPopup.forEach((el) => {
  el.addEventListener("click", (e) => {
    popup.style.display = "block";
  });
});

// Popup close event handler
popup.addEventListener("click", (e) => {
  if (e.target === popup || e.target === btnClose) {
    popup.style.display = "none";
  }
});
