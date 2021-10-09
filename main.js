// (function myCarousel() {
var carouselContent = document.getElementById("carousel__content");
var carouselLeftBtn = document.getElementById("carousel__button--prev");
var carouselRightBtn = document.querySelector("#carousel__button--next");

var Item1 = document.querySelector(".carousel__item");
var Item2 = document.getElementsByClassName("carousel__item")[1];
var Item3 = document.getElementsByClassName("carousel__item")[2];
var Item4 = document.getElementsByClassName("carousel__item")[3];
var Item5 = document.getElementsByClassName("carousel__item")[4];
var Item6 = document.getElementsByClassName("carousel__item")[5];
var Item7 = document.getElementsByClassName("carousel__item")[6];

var carouselLeftValue = 0; // left propery of .carousel__content
var totalWidth = carouselContent.getBoundingClientRect().width; // Total width of the carousel content "1456"
var widthToMove = (300 + 16) * 4; //How much to move the carousel, first box + margin x 4times
var arrowBtnWidth = 50; // width of the arrow buttons
var noOfSlides = totalWidth / widthToMove; //number of total slides of the carousel
var currentSlide = 0; //the currentslide number is 1.

carouselLeftBtn.addEventListener("click", CarouselLeftClick);
carouselRightBtn.addEventListener("click", CarouselRightClick);

Item5.style.display = "none";
Item6.style.display = "none";
Item7.style.display = "none";
// carouselLeftBtn.classList.remove("show");

manageButtons();
console.log(Item1);
console.log(Item2);

function CarouselRightClick() {
  console.log("Click !!!");
  switch (currentSlide) {
    case 0:
      Item1.style.display = "none";
      Item5.style.display = "block";
      Item6.style.display = "none";
      currentSlide = currentSlide + 1;
      // carouselRightBtn.classList.add("show");
      // carouselLeftBtn.classList.add("show");
      console.log(currentSlide);

      //   manageButtons();

      break;
    case 1:
      Item2.style.display = "none";
      Item6.style.display = "block";
      currentSlide = currentSlide + 1;
      // carouselRightBtn.classList.add("show");
      // carouselLeftBtn.classList.add("show");
      console.log(currentSlide);
      //   manageButtons();

      break;
    case 2:
    case 3:
    case 4:
      Item3.style.display = "none";
      Item7.style.display = "block";
      // carouselRightBtn.classList.remove("show");
      // carouselLeftBtn.classList.add("show");
      console.log(currentSlide);
      currentSlide = 2;
      //   manageButtons();

      break;

    default:
      Item3.style.display = "none";
      Item7.style.display = "block";
      // carouselRightBtn.classList.remove("show");
      // carouselLeftBtn.classList.add("show");
      console.log(currentSlide);
      currentSlide = 2;
      // currentSlide = currentSlide + 1;
      //   manageButtons();

      break;
  }
  //   if (currentSlide == 1) {
  //     console.log(currentSlide);
  //     Item1.style.display = "none";
  //     Item5.style.display = "block";
  //     Item6.style.display = "none";
  //     currentSlide = currentSlide + 1;
  //     manageButtons();
  //   }
  //   if (currentSlide == 2) {
  //     console.log(currentSlide);
  //     Item2.style.display = "none";
  //     Item6.style.display = "block";
  //     currentSlide = currentSlide + 1;
  //     manageButtons();
  //   } else Item3.style.display = "none";
  //   Item7.style.display = "block";
  //   manageButtons();

  //carouselLeftValue -= widthToMove - arrowBtnWidth;
  //   else carouselLeftValue -= widthToMove;

  //   currentSlide++;
  //   manageButtons();

  //   carouselContent.style.left = `${carouselLeftValue}px`;
}

function CarouselLeftClick() {
  switch (currentSlide) {
    case 0:
    case -1:
    case -2:
      Item5.style.display = "none";
      Item1.style.display = "block";
      // carouselLeftBtn.classList.remove("show");
      // carouselRightBtn.classList.add("show");
      console.log(currentSlide);
      currentSlide = 0;

      //   manageButtons();

      break;
    case 1:
      Item6.style.display = "none";
      Item2.style.display = "block";
      // carouselLeftBtn.classList.add("show");
      // carouselRightBtn.classList.add("show");
      console.log(currentSlide);
      currentSlide = currentSlide - 1;

      //   manageButtons();

      break;
    case 2:
      Item7.style.display = "none";
      Item3.style.display = "block";
      currentSlide = currentSlide - 1;
      // carouselLeftBtn.classList.add("show");
      // carouselRightBtn.classList.remove("show");
      console.log(currentSlide);

      //   manageButtons();

      break;

    default:
      console.log(currentSlide);
      Item1.style.display = "block";
      Item2.style.display = "block";
      Item3.style.display = "block";
      Item5.style.display = "none";
      Item6.style.display = "none";
      Item7.style.display = "none";
      // carouselRightBtn.classList.add("show");

      currentSlide = 0;
      break;
  }
  //   console.log("Click Left!!!");
  //   if (currentSlide == 2) {
  //     console.log(currentSlide);
  //     Item2.style.display = "block";
  //     Item6.style.display = "none";
  //     currentSlide = currentSlide - 1;
  //     manageButtons();
  //   }
  //   if (currentSlide == 3) {
  //     console.log(currentSlide);
  //     Item3.style.display = "block";
  //     Item7.style.display = "none";
  //     currentSlide = currentSlide - 1;
  //     manageButtons();
  //   } else {
  //     console.log(currentSlide);
  //     Item1.style.display = "block";
  //     Item2.style.display = "block";
  //     Item3.style.display = "block";
  //     Item5.style.display = "none";
  //     Item6.style.display = "none";
  //     Item7.style.display = "none";
  //     currentSlide = 0;
  //   }

  //   currentSlide--;
  //   manageButtons();

  //   carouselContent.style.left = `${carouselLeftValue}px`;
}

// function manageButtons() {
//   if (currentSlide == noOfSlides - 1) carouselRightBtn.classList.remove("show");
//   else carouselRightBtn.classList.add("show");
//   if (currentSlide == 1) carouselLeftBtn.classList.remove("show");
//   else carouselLeftBtn.classList.add("show");
// }
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
