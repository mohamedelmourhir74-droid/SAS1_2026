const prompt = require("prompt-sync")();
let dis = prompt("Entrer La distance parcourue en kilomètres :");
let carb = prompt("Entrer La quantité de carburant consommée en litres :");
let result = (carb / dis) * 100
console.log("votre Consommation est : " + result + "L/100 km");