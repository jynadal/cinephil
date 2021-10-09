// (function myCarousel() {
var carouselContent = document.getElementById("carousel__content");
var carouselLeftBtn = document.getElementById("carousel__button--prev");
var carouselRightBtn = document.querySelector("#carousel__button--next");

var carouselLeftValue = 0; // left propery of .carousel__content
var totalWidth = carouselContent.getBoundingClientRect().width; // Total width of the carousel content "1456"
var widthToMove = (300 + 16) * 4; //How much to move the carousel, first box + margin x 4times
var arrowBtnWidth = 50; // width of the arrow buttons
var noOfSlides = totalWidth / widthToMove; //number of total slides of the carousel
var currentSlide = 1; //the currentslide number is 1.

carouselLeftBtn.addEventListener("click", moveCarouselRight);
carouselRightBtn.addEventListener("click", moveCarouselLeft);

manageButtons();

function moveCarouselLeft() {
  console.log("Click !!!");
  if (currentSlide == 1) carouselLeftValue -= widthToMove - arrowBtnWidth;
  else carouselLeftValue -= widthToMove;

  currentSlide++;
  manageButtons();

  carouselContent.style.left = `${carouselLeftValue}px`;
}

function moveCarouselRight() {
  console.log("Click !!!");
  if (currentSlide == 2) carouselLeftValue = 8;
  else carouselLeftValue += widthToMove;

  currentSlide--;
  manageButtons();

  carouselContent.style.left = `${carouselLeftValue}px`;
}
function manageButtons() {
  if (currentSlide == noOfSlides - 1) carouselRightBtn.classList.remove("show");
  else carouselRightBtn.classList.add("show");
  if (currentSlide == 1) carouselLeftBtn.classList.remove("show");
  else carouselLeftBtn.classList.add("show");
}
// });

// // var carouselLeftBtn = document.("carousel__button--prev");
// var carouselRightBtn = document.getElementById("carousel__button--next");
// // carouselLeftBtn.addEventListener("click", helloLeft);
// carouselRightBtn.addEventListener("click", helloRight);

// function helloLeft() {
//   console.log("Click Left");
// }
// function helloRight() {
//   console.log("Click Right");
// }
