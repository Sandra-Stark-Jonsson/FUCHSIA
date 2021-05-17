"use strict ";

document.querySelector("#buttonCity").addEventListener("click", function () {
  let inputText = document.querySelector("#destinationsCity").value;
  inputText = inputText.toLowerCase();
  let filterCities = CITIES.filter(function (city) {
    if (city.name.toLowerCase().includes(inputText)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterCities);
  filterCities.forEach(function (city) {
    let list = document.querySelector("#listContainer");
    list.append(DOMcities(city.imagesNormal[0], city.name, city.text));
  });
});

// console.log(COUNTRIES);

function DOMcities(bild, name, text) {
  let container = document.createElement("div");
  container.classList.add("cities");

  container.innerHTML = `
    <img src = 'Images/${bild}'>
    <div class= "cityContainer">
        <h1>${name}</h1>
        <p>${text}</p>
        <button>Läs Mer</button>
    </div>
`;

  return container;
}

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
