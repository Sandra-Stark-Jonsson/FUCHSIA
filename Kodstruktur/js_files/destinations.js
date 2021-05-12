"use strict ";

console.log(COUNTRIES);

// function DOMcities(cities) {
//   let container = document.createElement("div");
//   container.classList.add("country");

//   // Add Name
//   container.append(countryName());

//   // // Add Courses
//   // container.append(studentCourses());

//   return container;
//   console.log(container);
// }

// // We can put these declarations after the return because they are function declarations,
// // not "normal" executable code. "Normal" executable code is not executed
// // if it is placed after a return instruction.

// function studentName(){
//     //ska inkludera namn, efternamn, total credits
//     //skicka som en div
//     let studentName = document.createElement("div");
//     studentName.classList.add("studentName")

//     //TOTAL CREDITS
//     let totalCreditsOfStudent = 0;
//     student.courses.forEach( course => {
//        totalCreditsOfStudent += course.passedCredits;
//     });

//     //TEXT
//     studentName.textContent = `${student.firstName} ${student.lastName} (total credits: ${totalCreditsOfStudent})`

//     return studentName;
// }

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
