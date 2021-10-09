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
let maxMove = 77;
// let maxMove = 203;

// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 98;
  maxMove = 605;
}

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
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of movie) {
    if (movie_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
right.onclick = () => {
  right_mover();
};
left.onclick = () => {
  left_mover();
};
