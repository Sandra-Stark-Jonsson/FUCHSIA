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
        <button>Läs Mer</button>
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

function createUniversity(id){

  let universityCity = UNIVERSITIES.filter(element => element.cityID === id);
  console.log(universityCity);

  universityCity.forEach(skola => {
    
    let universityDiv = document.createElement("div");
    universityDiv.innerHTML = `

    <h2>${skola.name}</h2>
    
    `
    return universityDiv;
  }); 
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
  filterCities.forEach(function (country) {
    let list = document.querySelector("#listContainer");
    list.append(DOMcities(country.imagesNormal[0], country.name, country.text, country.id));

  });
});


  

 //Clicka på länder

