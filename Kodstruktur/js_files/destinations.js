"use strict ";
//sök på städer
document.querySelector("#buttonCity").addEventListener("click", function () {
  document.querySelector("#listContainer").innerHTML = "";
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
    list.append(DOMcities(city.imagesNormal[0], city.imagesNormal[1], city.name, city.text, city.id));
  });
});



function DOMcities(bild, bild2, name, text, id) {
  let container = document.createElement("div");
  container.classList.add("cities");


  let cityelement = document.createElement("div");
  cityelement.classList.add("startDiv");


  let cityContainer = document.createElement("div");

  cityContainer.classList.add("cityContainer");
  cityContainer.setAttribute("id", name)
  cityelement.append(cityContainer);

  let cityH1 = document.createElement("h1");
  cityH1.classList.add("cityH1");
  cityH1.innerHTML = name;
  cityContainer.append(cityH1);

  let cityP = document.createElement("p");
  cityP.classList.add("cityP");
  cityP.innerHTML = text;
  cityContainer.append(cityP);

  let cityBild = document.createElement("div");
  cityBild.innerHTML = `
      <img class="startImage" src = 'Images/${bild}'> `
  cityelement.append(cityBild);

  let button = document.createElement("element");
  button.innerHTML = ` 
      <button class="readMoreButton">Läs Mer</button><br>
      `;
  cityContainer.append(button);

  container.append(cityelement);

  let cityUnis = createUniversity(id);


  button.addEventListener('click', function (event) {
    let extra = document.createElement('div')
    extra.classList.add('extra');

    let gradeImage = document.createElement('div');
    gradeImage.classList.add('gradeImage');

    let grades = document.createElement('div');
    grades.classList.add('grades');

    let extraImage = document.createElement('div');
    extraImage.classList.add('extraImage');
    extraImage.innerHTML = `
  <img class="extraImage" src = 'Images/${bild2}'> 
  `;
    let extraCloseButton = document.createElement("button");
    extraCloseButton.className = "extraCloseButton";
    extraCloseButton.textContent = "Stäng";
    extraImage.append(extraCloseButton);
    extraCloseButton.addEventListener("click", (event) => {
      event.target.parentElement.parentElement.parentElement.parentElement.remove();

    })

    gradeImage.append(grades, extraImage);


    extra.append(gradeImage, cityUnis);
    event.target.parentElement.parentElement.parentElement.parentElement.append(extra)
    console.log(event.target.parentElement.parentElement.parentElement.parentElement);
  })





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
  document.querySelector("#listContainer").innerHTML = "";
  let inputText = document.querySelector("#destinationsCountry").value;
  inputText = inputText.toLowerCase();
  let filterCountries = COUNTRIES.filter(function (country) {
    if (country.name.toLowerCase().includes(inputText)) {
      return true;
    } else {
      return false;
    }
  });
  document.querySelector("#destinationsCountry").value = "";
  filterCountries.forEach(function (country) {
    let list = document.querySelector("#listContainer");
    list.append(DOMcountries(country.imagesNormal[0], country.id));
  });
});


function DOMcountries(bild, countryID) {
  let box = document.createElement("div");
  box.classList.add("countries");

  box.innerHTML = ``;

  let citydiv = createCities(countryID);


  box.append(citydiv);

  return box;

}


function createCities(idCountry) {
  let parent = document.createElement("div");
  parent.classList.add("citieparent");


  CITIES.forEach(function (city) {
    if (city.countryID === idCountry) {


      let cityelement = document.createElement("div");
      cityelement.classList.add("startDiv");


      let cityContainer = document.createElement("div");

      cityContainer.classList.add("cityContainer");
      cityContainer.setAttribute("id", city.name)
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
      <button class="readMoreButton">Läs Mer</button><br>
      `;
      cityContainer.append(button);

      let cityBild = document.createElement("div");
      cityBild.innerHTML = `
      <img class="startImage" src = 'Images/${city.imagesNormal[0]}'> 
  
      `;
      cityelement.append(cityBild);


      parent.append(cityelement);

      button.addEventListener('click', (event) => {
        let extra2 = document.createElement('div')
        extra2.classList.add('extra');
        parent.append(extra2);

        let gradeImage2 = document.createElement('div');
        gradeImage2.classList.add('gradeImage');
        extra2.append(gradeImage2);

        let grades2 = document.createElement('div');
        grades2.classList.add('grades');
        extra2.append(grades2);

        let extraImage2 = document.createElement('div');
        extraImage2.innerHTML = `
      <img class="extraImage" src = 'Images/${city.imagesNormal[1]}'> 
      <img id="adSquare" src="Annonser/annons_kvadratisk.jpg" alt="annons" />
    
      `;
        let extraCloseButton = document.createElement("button");
        extraCloseButton.className = "extraCloseButton";
        extraCloseButton.textContent = "Stäng";
        extraImage2.append(extraCloseButton);
        extraCloseButton.addEventListener("click", (event) => {
          event.target.parentElement.parentElement.parentElement.remove();

        })
        extra2.append(extraImage2);

        let cityUnis2 = createUniversity();



        gradeImage2.append(grades2, extraImage2);


        extra2.append(gradeImage2, cityUnis2);

        UNIVERSITIES.forEach(function (uni) {
          if (uni.cityID === city.id) {
            let pElement = document.createElement("h2");
            pElement.innerHTML = uni.name;
            cityUnis2.append(pElement);

          }


        })

        event.target.parentElement.parentElement.parentElement.after(extra2);
      })
    }
  })








  return parent;


}

// // läs mer knapp
// document.querySelector(".readMoreButton").addEventListener("click", function () {
//   let readMore = document.querySelector(".extra");
//   console.log(readMore);
//   if (readMore.style.display == "none") {
//     readMore.style.display = "block";
//   } else {
//     readMore.style.display = "none";
//   }
// })
// // //läs mer knapp
// let divExtra = document.querySelector('.extra');
// console.log(divExtra);
// let readMore = document.querySelector(".readMoreButton");
// console.log(readMore);
// readMore.addEventListener('click', () => {
//   if (extra.style.display === 'none') {
//     extra.style.display = 'block';
//   } else {
//     extra.style.display = 'none';
//   }
// // })


