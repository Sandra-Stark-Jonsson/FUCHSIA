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
  document.querySelector("#destinationsCity").value = "";
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
  <div class= "cityContainer">
      <h1 class="cityH1">${name}</h1>
      <p class="cityP">${text}</p>
      <element>
      <button class="readMoreButton">Läs Mer</button>
      <element>
  </div>
    <img class="startImage" src = 'Images/${bild}'>
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
  
 
 /* let extraCloseButton = document.createElement("element");
  extraCloseButton.innerHTML = `
  <button class="readMoreButton">Stäng</button>
  `;
  grades.append(extraCloseButton);
*/
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
    list.append(DOMcountries(country.imagesNormal[0], country.id));
  });
});


function DOMcountries(bild, countryID) {
  let box = document.createElement("div");
  box.classList.add("countries");

  box.innerHTML = `
  <div class="startDiv">
  <img class="startImage" src = 'Images/${bild}'> 
  `


  let listContainer = document.createElement("div");
  listContainer.classList.add("listContainer");



  let citydiv = createCities(countryID);



  listContainer.append(citydiv);

  return listContainer;

}


function createCities(idCountry) {
  let parent = document.createElement("div");
  parent.classList.add("citieparent");

  CITIES.forEach(function (city) {
    console.log(idCountry);
    if (city.countryID === idCountry) {


      let cityelement = document.createElement("div");
      cityelement.classList.add("startDiv");

      
      let cityContainer = document.createElement("div");
      cityContainer.classList.add("cityContainer");
      cityelement.append(cityContainer);
      
      let cityH1 = document.createElement("h1");
      cityH1.classList.add("cityH1");
      cityH1.innerHTML = city.name;
      cityContainer.append(cityH1);
      
      let cityP = document.createElement("p");
      cityP.classList.add("cityP");
      cityP.innerHTML = city.text;
      cityContainer.append(cityP);
      
      
      let button = document.createElement("element");
      button.innerHTML = ` 
      <button class="readMoreButton">Läs Mer</button>
      `;
      cityContainer.append(button);
      
      let cityBild = document.createElement("div");
      cityBild.innerHTML = `
      <img class="startImage" src = 'Images/${city.imagesNormal[0]}'> 
      `;
      cityelement.append(cityBild);




      parent.append(cityelement);
    }


    /*UNIVERSITIES.forEach(function (uni) {
      if (uni.cityID === city.id) {
        let pElement = document.createElement("p");
        pElement.innerHTML = uni.name;
        cityelement.append(pElement);

      }
    })
    */
  })

  return parent;

}





// Försöka räkna ut ett snitt 
