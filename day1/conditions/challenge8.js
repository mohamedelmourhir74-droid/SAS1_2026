const prompt = require("prompt-sync")();
let num = prompt("Entrer le numéro de niveau :");
switch (num) {
    case "1" : console.log("Niveau : Facile / Ennemis : 10 / Points par ennemi : 10");
    break;
    case "2" : console.log("Niveau : Normal / Ennemis : 30 / Points par ennemi : 20");
    break;
    case "3" : console.log("Niveau : Difficile / Ennemis : 50 / Points par ennemi : 30");
    break;
    case "4" : console.log("Niveau : Extrême / Ennemis : 70 / Points par ennemi : 40");
    break;
};