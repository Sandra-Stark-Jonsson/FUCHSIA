"use strict ";
//sök på städer
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
  `;


  let extra = document.createElement('div')
  extra.classList.add('extra');

  let gradeImage = document.createElement('div');
  gradeImage.classList.add('gradeImage');

  let grades = document.createElement('div');
  grades.classList.add('grades');

  let extraImage = document.createElement('img');
  extraImage.classList.add('extraImage');


  let cityUnis = createUniversity(id);
  console.log(cityUnis);


  gradeImage.append(grades, extraImage);


  extra.append(gradeImage, cityUnis);


  container.append(extra);

  return container;
}

function createUniversity(id) {

  let uniDiv = document.createElement("div");
  uniDiv.classList.add("universities");


  let universityCity = UNIVERSITIES.filter((element) => element.cityID === id);


  universityCity.forEach((skola) => {
    let universityDiv = document.createElement("div");
    universityDiv.innerHTML = `
    <h2>${skola.name}</h2>
    `;

    uniDiv.append(universityDiv);
  });

  return uniDiv;

}

//sök på länder

document.querySelector("#buttonCountry").addEventListener("click", function () {
  let inputText = document.querySelector("#destinationsCountry").value;
  inputText = inputText.toLowerCase();
  let filterCountries = COUNTRIES.filter(function (country) {
    if (country.name.toLowerCase().includes(inputText)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterCountries);
  filterCountries.forEach(function (country) {
    let list = document.querySelector("#listContainer");
    list.append(DOMcountries(country.imagesNormal[0], country.name, country.id));
  });
});


function DOMcountries(bild, name, countryID) {
  let box = document.createElement("div");
  box.classList.add("countries");

  box.innerHTML = `
  <div class="startDiv">
  <img class="startImage" src = 'Images/${bild}'> 
  `


  let cityContainer = document.createElement("div");
  cityContainer.classList.add("cityContainer");



  let citydiv = createCities(countryID);


  let button = document.createElement("button");
  button.classList.add("readMoreButton");

  cityContainer.append(citydiv, button);

  return cityContainer;

}

function createCities(idCountry) {
  let parent = document.createElement("div");
  parent.classList.add("citieparent");
  
  CITIES.forEach(function (city) {
    console.log(idCountry);
    if (city.countryID === idCountry) {
      
      let cityelement = document.createElement("div");
      cityelement.classList.add("citydDiv");
      
      let cityh2 = document.createElement("h2");
      cityh2.innerHTML = city.name;
      cityelement.append(cityh2);
      
      let citytext = document.createElement("h2");
      citytext.innerHTML = city.text;
      cityelement.append(citytext);

      let cityBild = document.createElement("h2");
      cityBild.innerHTML = city.imagesNormal[0];
      cityelement.append(cityBild);
      

      


      UNIVERSITIES.forEach(function (uni) {
        if (uni.cityID === city.id) {
          let pElement = document.createElement("p");
          pElement.innerHTML = uni.name;
          cityelement.append(pElement);

        }
      })
      parent.append(cityelement);
    }


  })

  return parent;

}


// Försöka räkna ut ett snitt 
