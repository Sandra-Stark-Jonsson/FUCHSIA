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

  // Nu är halva diven skapad. P.g.a att universiteten skapas via en funktion
  // går det inte att använda innerHTML på samma sätt. Därför skapar vi alla divar progremmatiskt, vilket tar upp mer plats
  // och ser mer förvirrande ut, men ger oss samtidigt större frihet.
  let extra = document.createElement('div')
  extra.classList.add('extra');

  let gradeImage = document.createElement('div');
  gradeImage.classList.add('gradeImage');

  let grades = document.createElement('div');
  grades.classList.add('grades');
  
  let extraImage = document.createElement('img');
  extraImage.classList.add('extraImage');
  
  // Här kör vi funktionen (se kommentarer om hur den fungerar) och cityUnis blir en div med alla universitet för just denna staden
  // som vars en h2:a i en stor förälder.
  let cityUnis = createUniversity(id);
  console.log(cityUnis);

  // Nu ska vi slå ihop våra divar och appenda det till container
  // Vi jobbar "innifrån och ut" så de "yngsta barnen" kommer först. 
  gradeImage.append(grades, extraImage);

  // gradeImage och cityUnis är syskon, så de appendas nu i extra
  extra.append(gradeImage, cityUnis);

  // Nu vill vi lägga allting i container-diven, den "äldsta föräldern"
  container.append(extra);

  return container;
}

function createUniversity(id) {
  //Skapa en förälderdiv och lägga till class.
  let uniDiv = document.createElement("div");
  uniDiv.classList.add("universities");

// Filtrera arrayen med universitet, så ENDAST de med samma cityID som staden 
// vi är på kommer med i vår nya array som heter universityCity.
  let universityCity = UNIVERSITIES.filter((element) => element.cityID === id);

// För varje skola skapar vi sedan en ny div där vi lägger in namn och appendar den i föräldern. 
// Har vi en skola körs loopen en gång, har vi två skolor körs det två gånger etc.
  universityCity.forEach((skola) => {
    let universityDiv = document.createElement("div");
    universityDiv.innerHTML = `
    <h2>${skola.name}</h2>
    `;

    uniDiv.append(universityDiv);
  });
  // Efter loopen är klar och alla divar är inne i vår förälder, skickar vi hela föräldern med alla sina barn
  // till dit vi kallade på funktionen, aka i DOMcities-funktionen.
  return uniDiv;
  // Det som _faktiskt_ skickas är en array som innehåller element som JS sedan kan arbeta med, vilket är pretty neat.
}

//sök på länder


//Clicka på länder
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


function DOMcountries(bild, name, countryID){
  let box = document.createElement("div");
  box.classList.add("countries");

  box.innerHTML = `
  <div class="startDiv">
  <img class="startImage" src = 'Images/${bild}'>`


let cityContainer = document.createElement("div");
cityContainer.classList.add("cityContainer");



let citydiv = createCities(countryID);


let button = document.createElement("button");
button.classList.add("readMoreButton");

cityContainer.append(citydiv, button);

return cityContainer;

}

function createCities(idCountry){
let parent = document.createElement("div");
parent.classList.add("citieparent");

CITIES.forEach(function (city){
  console.log(idCountry);
  if(city.countryID === idCountry){

    let cityelement = document.createElement("div");
    cityelement.classList.add("citydDiv");
  
    let cityh2 = document.createElement("h2");
    cityh2.innerHTML = city.name;
    cityelement.append(cityh2);
  
      UNIVERSITIES.forEach(function(uni){
        if (uni.cityID === city.id){
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