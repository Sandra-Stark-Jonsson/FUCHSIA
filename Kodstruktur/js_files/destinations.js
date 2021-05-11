"use strict "

let DOMcontainer = document.createElement("container");

document.querySelector("#main").append(DOMcontainer);

main.innerHTML = `
    <div class="listContainer"></div>
`;

let database = {
    baseArray: CITIES,
    filterKey: "name",
    filterLabelKey:"",
};

console.log(database);

function getCountry(database) {

    let {baseArray, filterKey, filterLabelKey} = database;

    let contaier = document.createElement("div");
    contaier.classList.add("input");
    
    let input = contaier.querySelector("#destinationsCountry");
    input.addEventListener("keyup", function() {

        document.querySelector("")

    });
};