//karusellen
const carouselSlide = document.querySelector(".carousel");
const carouselCell = document.querySelectorAll(".carousel .carousel-cell");

//the buttons
const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");

// //counter
let counter = 0;
const size = carouselCell[2].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// divar 
let makediv = document.createElement("div");


//Button Event listners
nextButton.addEventListener("click", function () {
  //bug preventor
  if (counter >= carouselCell.length - 1) return;
  console.log('size' + size);
  console.log('counter' + counter);
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener("click", function () {
  //bug preventor
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4 ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

//Reset the transition between cells prev button
carouselSlide.addEventListener('transitionend', function () {
  if (carouselCell[counter].id === "sixthCell") {
    //carouselSlide.style.transition = "none";
    counter = carouselCell.length - 0;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  else if (carouselCell[counter].id === "firstCell") {
    //carouselSlide.style.transition = "none";
    counter = carouselCell.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});


