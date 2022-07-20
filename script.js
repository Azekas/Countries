"use strict"

var countries = [
    {name: "Netherlands", area: 41865, population: 17717700},
    {name: "Spain", area: 505990, population: 47450795},
    {name: "United States of America", area: 9833520, population: 331893745},
    {name: "Cuba", area: 109884, population: 11113215},
    {name: "Madagascar", area: 587041, population: 28427328}    
];

for(var def of countries){
    print(def.name, def.area, def.population)
}

function print(name, area, population){
    console.log(`Šalis: ${def.name}, joje gyvena ${(Number(def.population) / 1000000).toFixed(2)} mln. gyventojų.`)
    console.log(`Valstybės plotas: ${def.area} km², plotas tenkantis vienam gyventojui: ${(Number(def.area) * 1000000 / Number(def.population)).toFixed(2)} m².`)
    console.log("------------------")
}
