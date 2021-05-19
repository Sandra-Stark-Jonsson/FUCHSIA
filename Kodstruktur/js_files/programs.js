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
  
  console.log(filterPrograms);
  filterPrograms.forEach(function (program) {
    let list = document.querySelector("#listContainer");
    list.append(DOMprograms(program.name, program.universityID, program.level, program.language));
  
  });
});



function DOMprograms(name, universityID, level, language){
  let container = document.createElement("div");
  container.classList.add("program");

  container.innerHTML = `
  <div class="startdiv">
    <div class="programContainer">
      <div id="rubrik"></div>
        <hi id="programH1">${name}</h1>
        <p id="level"> - ${level}</p>
      </div>
      <div id="info">
        <p class="programP">${universityID}</p>
        <p class="programP">${language}</p>
      </div>  
    </div>
    <div></div>
  </div>
  `;
  return container;
}


  //function DOMcities(bild, name, text, id) {
  //  let container = document.createElement("div");
  //  container.classList.add("cities");
  
  //  container.innerHTML = `
  //  <div class="startDiv">
  //    <img class="startImage" src = 'Images/${bild}'>
  //    <div class= "cityContainer">
  //        <h1 id="cityH1">${name}</h1>
  //        <p id="cityP">${text}</p>
  //        <button class="readMoreButton">Läs Mer</button>
  //    </div>
  //  </div>  
  //  <div class="extra">
  //    <div class="gradeImage">
  //      <div class="grades"></div>
  //      <img class="extraImage" src='Images/${bild}'>
  //    </div>
  //    <div class="universitet">
  //      ${createUniversity(id)}
  //    </div>
  //  </div>
  //  `;
  //
  //  return container;
  //}
