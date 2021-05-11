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
    DOMcreater: DOMcities
};

console.log(database);

function DOMcities (cities){
    let contaier = document.createElement ("div");
    contaier.classList.add("cities");

    contaier.append(cityName());

    contaier.append(cityInfo());

//Denna funktion fungerar inte men vi tror att vi är på rätt spår    

    function cityName(){

        let cityDiv = document.createElement("div");

        cityDiv.innerHTML = `<div>${cities.name}</div>`;

        console.log(cityDiv);

        return cityDiv;
    };

};

function getCountry(database) {

    let {baseArray, filterKey, filterLabelKey} = database;

    let contaier = document.createElement("div");
    contaier.classList.add("input");
    
    let input = contaier.querySelector("#destinationsCountry");
    input.addEventListener("keyup", function() {

        document.querySelector("")



    });
};