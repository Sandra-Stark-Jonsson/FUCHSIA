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
    list.append(DOMcities(city.imagesNormal[0], city.name, city.text, city.id));
  });
});

// console.log(COUNTRIES);

function DOMcities(bild, name, text, id) {
  let container = document.createElement("div");
  container.classList.add("cities");

  container.innerHTML = `
  <div class="startDiv">
    <img class="startImage" src = 'Images/${bild}'>
    <div class= "cityContainer">
        <h1 id="cityH1">${name}</h1>
        <p id="cityP">${text}</p>
        <button class="readMoreButton">Läs Mer</button>
    </div>
  </div>  
  <div class="extra">
    <div class="gradeImage">
      <div class="grades"></div>
      <img class="extraImage" src='Images/${bild}'>
    </div>
    <div class="universitet">
      ${createUniversity(id)}
    </div>
  </div>
  `;

  return container;
}

function createUniversity(id) {
  let universityCity = UNIVERSITIES.filter((element) => element.cityID === id);
  console.log(universityCity);

  universityCity.forEach((skola) => {
    let universityDiv = document.createElement("div");
    universityDiv.innerHTML = `

    <h2>${skola.name}</h2>
    
    `;
    return universityDiv;
  });
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
