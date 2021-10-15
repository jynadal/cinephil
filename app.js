// ********* NAV MENU ***************
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// The Modal Commande
var btnModal = document.getElementById("btnModal");

var bestModal = document.querySelector(".bestModal");
var spanClose = document.getElementsByClassName("bestClose")[0];

var moviesModal = document.querySelector(".moviesModal");
var modalClose = document.getElementsByClassName("closeModal")[0];

btnModal.addEventListener("click", function () {
  console.log(bestModal);
  bestModal.style.display = "block";
});

spanClose.onclick = function () {
  bestModal.style.display = "none";
};

moviesModal.onclick = function () {
  moviesModal.style.display = "none";
};

//   NEW CAROUSEL FOR GENRES

const gap = 20;

const carousel = document.getElementById("carousel");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let content = document.getElementById("content");

next.addEventListener("click", (e) => {
  console.log("next btn clicked !");
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
