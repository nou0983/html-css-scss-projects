document.addEventListener("DOMContentLoaded", function () {
  // Selector list
  let node = document.querySelector(".preload-transition");
  let year = document.querySelector("#year");
  let btnMobile = document.querySelector(".navigation__mobile");
  let navIcon = document.querySelector(".navigation__icon");
  let navList = document.querySelector(".navigation__list");
  let btnPopup = document.querySelectorAll(".card__action-box .btn");
  let popup = document.querySelector(".pop-up");
  let btnClose = document.querySelector(".pop-up__icon");

  // Prevent animation on page load
  node.classList.remove("preload-transition");

  // Year update
  year.innerHTML = new Date().getFullYear();

  // Navigation
  btnMobile.addEventListener("click", (e) => {
    navIcon.classList.toggle("transparent");
    navList.classList.toggle("show");
  });

  // Popup open event
  btnPopup.forEach((el) => {
    el.addEventListener("click", (e) => {
      popup.style.display = "block";
    });
  });

  // Popup close event - on background click
  popup.addEventListener("click", (e) => {
    // if (e.target.classList[0] === "pop-up") {
    //   popup.style.display = "none";
    // }
  
    if (e.target === popup || e.target === btnClose) {
      popup.style.display = "none";
    }
  });
});
