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
      list.append(DOMprograms(program, program.name, program.text, program.id));
  
    });
  });


  