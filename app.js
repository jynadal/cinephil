// ********* NAV MENU ***************
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// ********* CAROUSEL ***************

let left = document.getElementById("left");
let right = document.getElementById("right");

let movie = document.getElementsByClassName("movie");
let movie_page = Math.ceil(movie.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// let maxMove = 203;

// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 98;
  maxMove = 605;
}
// movePer = 50.36;
// maxMove = 504;

let right_mover = () => {
  l = l + movePer;
  if (movie == 1) {
    l = 0;
  }
  for (const i of movie) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
  console.log(l);
};

let left_mover = () => {
  console.log("Left click!");
  console.log(l);
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (let i of movie) {
    if (movie_page > 1) {
      i.style.position = "absolute";
      i.style.left = "-" + l + "%";
    }
  }
  console.log(l);
};
left.onclick = () => {
  left_mover();
};
right.onclick = () => {
  right_mover();
};

// The Modal Commande
var btnModal = document.getElementById("btnModal");

var bestModal = document.querySelector(".bestModal");
var spanClose = document.getElementsByClassName("bestClose")[0];

var moviesModal = document.querySelector(".moviesModal");
var modalClose = document.getElementsByClassName("closeModal")[0];

// btnModal.onclick = function () {
//   console.log("modal clicked!");
//   bestModal.style.display = "block";
// };
// btnMovieModal.onclick = function () {
//   console.log("movie Modal clicked!");
//   moviesModal.style.display = "block";
// };
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

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", (e) => {
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
