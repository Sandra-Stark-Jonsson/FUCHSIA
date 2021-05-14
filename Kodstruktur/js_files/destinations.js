"use strict ";

document.querySelector("#buttonCity").addEventListener("click", function () {
  let inputText = document.querySelector("#destinationsCity").value;
  let filterCities = CITIES.filter(function (city) {
    if (city.name.includes(inputText)) {
      return true;
    } else {
      return false;
    }
  });
});
filerCities.forEach(function (city) {});
// console.log(COUNTRIES);

// function DOMcities(cities) {
//   let container = document.createElement("div");
//   container.classList.add("country");

//   // Add Name
//   container.append(countryName());

//   // // Add Courses
//   // container.append(studentCourses());

//   return container;
//   console.log(container);
// }

// let DOMcontainer = document.createElement("container");

// document.querySelector("#main").append(DOMcontainer);

// main.innerHTML = `
//     <div class="listContainer"></div>
// `;

// let database = {
//   baseArray: CITIES,
//   filterKey: "name",
//   filterLabelKey: "",
//   DOMcreater: DOMcities,
// };

// console.log(database);

// function DOMcities(cities) {
//   let contaier = document.createElement("div");
//   contaier.classList.add("cities");

//   contaier.append(main());

//   contaier.append(main());

//   //Denna funktion fungerar inte men vi tror att vi är på rätt spår

//   function cityName() {
//     let cityDiv = document.createElement("div");

//     cityDiv.innerHTML = `<div>${cities.name}</div>`;

//     console.log(cityDiv);

//     return cityDiv;
//   }
// }
// console.log(DOMcities);

// function getCountry(database) {
//   let { baseArray, filterKey, filterLabelKey } = database;

//   let contaier = document.createElement("div");
//   contaier.classList.add("input");

//   let input = contaier.querySelector("#destinationsCountry");
//   input.addEventListener("keyup", function () {
//     document.querySelector("");
//   });
// }
