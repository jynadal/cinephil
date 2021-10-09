//Carousel

let left = document.getElementById("left");
let right = document.getElementById("right");

let movie = document.getElementsByClassName("movie");
let movie_page = Math.ceil(movie.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 504;
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

// let btnLeft = document.getElementById("carousel__3__button--prev");
// let btnright = document.getElementById("carousel__3__button--next");

// let carouselBox = document.getElementById("carousel__3__content");
// let movieCard = document.getElementsByClassName("carousel__3__item");
// let movieCard_page = Math.ceil(movieCard.length / 4);
// let l = 0; //arbitraire
// let movePercentage = 25;
// let maxMove = 330; // maxWidth + margin
// console.log(carouselBox.scrollWidth);
// console.log(movieCard_page); //4
// movieCard.scrollWidth;

// let totalMovieCard = maxMove * movieCard.length; //4620px
// console.log(totalMovieCard);

// let right_mover = () => {
//   console.log("Right click!");
//   l = l + maxMove;
//   if (l <= 0) {
//     l = 0;
//   }
//   console.log(l);
//   movieCard.style.position = "absolute";
//   movieCard.style.right = `${l}px`;
//   // CarouselBox.style.left = "330px";
//   // for (const i of movieCard) {
//   //   if (movieCard_page > 1) {
//   //     movieCard.style.left = "25%";
//   //   }
//   // }
// };

// let left_mover = () => {
//   l = l - movePer;
//   if (l <= 0) {
//     l = 0;
//   }
//   for (const i of movieCard) {
//     console.log(i);
//     if (movieCard_page > 1) {
//       i.style.left = "-" + 1 + "%";
//     }
//   }
// };

// // let right_mover = () => {
// //   l = l + movePer;
// //   console.log(l);
// //   if (movieCard == 1) {
// //     l = 0;
// //   }
// //   for (const i of movieCard) {
// //     if (l > maxMove) {
// //       l = l - movePer;
// //     }
// //     i.style.left = "-" + l + "%";
// //   }
// // };

// // btnLeft.onclick = () => {
// //   left_mover();
// // };
// btnRight.onclick = () => {
//   right_mover();
// };

// // (function () {
// //   var carouselContent = document.getElementById("carousel__content");
// //   var carouselLeftBtn = document.getElementById("carousel__button--prev");
// //   var carouselRightBtn = document.getElementById("carousel__button--next");

// //   var carouselLeftValue = 0; // left propery of .carousel__content
// //   var totalWidth = carouselContent.getBoundingClientRect().width; // Total width of the carousel content "1456"
// //   var widthToMove = (300 + 16) * 4; //How much to move the carousel, first box + margin x 4times
// //   var arrowBtnWidth = 50; // width of the arrow buttons
// //   var noOfSlides = totalWidth / widthToMove; //number of total slides of the carousel
// //   var currentSlide = 1; //the currentslide number is 1.

// //   carouselLeftBtn.addEventListener("click", moveCarouselRight);
// //   carouselRightBtn.addEventListener("click", moveCarouselLeft);

// //   manageButtons();

// //   function moveCarouselLeft() {
// //     if (currentSlide == 1) carouselLeftValue -= widthToMove - arrowBtnWidth;
// //     else carouselLeftValue -= widthToMove;

// //     currentSlide++;
// //     manageButtons();

// //     carouselContent.style.left = `${carouselLeftValue}px`;
// //   }

// //   function moveCarouselRight() {
// //     if (currentSlide == 2) carouselLeftValue = 8;
// //     else carouselLeftValue += widthToMove;

// //     currentSlide--;
// //     manageButtons();

// //     carouselContent.style.left = `${carouselLeftValue}px`;
// //   }
// //   function manageButtons() {
// //     if (currentSlide == noOfSlides - 1)
// //       carouselRightBtn.classList.remove("show");
// //     else carouselRightBtn.classList.add("show");
// //     if (currentSlide == 1) carouselLeftBtn.classList.remove("show");
// //     else carouselLeftBtn.classList.add("show");
// //   }
// // });

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);
