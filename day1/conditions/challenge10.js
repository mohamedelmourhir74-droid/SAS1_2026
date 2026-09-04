const prompt = require("prompt-sync")();

let num = prompt("Entrer le numéro de conversion :");
let vl = prompt("Entrer la valeur a convertir :");
let prix = 0

switch (num) {
    case "1" : console.log("Standard → " + vl * 1000 + " m");
    break;
    case "2" : console.log("VIP      → " + vl * 1000 + " cm");
    break;
    case "3" : console.log("Premium  → " + vl * 1000 + " g");
    break;
    case "4" : console.log("Enfant   → " + vl * 1000 + " l");
    break;
};