//karusellen
const carouselSlide = document.querySelector(".carousel");
const carouselCell = document.querySelectorAll(".carousel .carousel-cell");

//the buttons
const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");

// //counter
let counter = 1;
const size = carouselCell[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Event listners
nextButton.addEventListener("click", function () {
  carouselSlide.style.transition = "transform 0.4 ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(" + -size * counter + "px)';
});

prevButton.addEventListener("click", function () {
  carouselSlide.style.transition = "transform 0.4 ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(" + -size * counter + "px)';
});

//Reset the transition between cells
carouselSlide.addEventListener("transitionend", function () {
  if (carouselCell[counter].id === "sixthCell") {
    carouselSlide.style.transition = "none";
    counter = carouselCell.length - 1;
    carouselSlide.style.transform = 'translateX(" + -size * counter + "px)';
  }
});
