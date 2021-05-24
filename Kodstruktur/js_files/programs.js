"use strict"

document.querySelector("#buttonProgram").addEventListener("click", function () {
  let inputText = document.querySelector("#program").value;
  inputText = inputText.toLowerCase();
  let filterPrograms = PROGRAMMES.filter(function (program) {
    if (program.name.toLowerCase().includes(inputText)) {
      return true;
    } else {
      return false;
    }

  });

  document.querySelector("#program").value = "";
  filterPrograms.forEach(function (program) {
    let list = document.querySelector("#listContainer");
    list.append(DOMprograms(program.name, program.universityID, program.level, program.language, program.entryGrades));

  });
});



function DOMprograms(name, universityID, level, language, entryGrades) {
  let container = document.createElement("div");
  container.classList.add("program");

  let degree;
  if (level === 0) {
    degree = ``
  } else if (level > 0) {
    degree = LEVELS[level - 1]
  }

  let school;
  UNIVERSITIES.forEach(function (skola) {
    if (skola.id === universityID) {
      school = skola.name;
    }
  });

  let talk;
  LANGUAGES.forEach(function (sprak) {
    if (sprak.id === language) {
      talk = sprak.name
    }
  });

  let stad;
  let findCity;
  UNIVERSITIES.forEach(function (skola) {
    if (skola.id === universityID) {
      findCity = skola.cityID;
      CITIES.forEach(function (city) {
        if (city.id === findCity) {
          stad = city.name;
        }
      })
    }
  });

  //slupmässig nummer
  // function randomNumber(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  //slumpmässig kommentar


  container.innerHTML = `
  <div class="startdiv">
    <div class="programContainer">
      <div class="allInfo">
        <h1 id="programH1">${name} - ${degree}</h1>

        <div id="info">
          <p class="programP" id="skola">${school}</p>
          <p class="programP">${talk}</p>
          <p class="programP">${stad}</p>
        </div>  
        <div id="studentReview"></div>
      </div>
      <div id="grades">
        <p class="eg">2021</p>
        <p class="eg">2020</p>
        <p class="eg">2019</p>
        <p class="eg">2018</p>
        <p class="eg">2017</p>
        <p class="eg">${entryGrades[0]}</p>
        <p class="eg">${entryGrades[1]}</p>
        <p class="eg">${entryGrades[2]}</p>
        <p class="eg">${entryGrades[3]}</p>
        <p class="eg">${entryGrades[4]}</p>
      </div>
    </div>
    <div class="students"></div> 
    </div>`


    ;

  return container;

}


