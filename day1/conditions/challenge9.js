const prompt = require("prompt-sync")();

let num = prompt("Entrer le numéro de types de billets :");
let cont = prompt("Entrer la quantité :");
let prix = 0

switch (num) {
    case "1" : prix = 80
    console.log("Standard → " + prix * cont + "DH");
    break;
    case "2" : prix = 200
    console.log("VIP      → " + prix * cont + "DH");
    break;
    case "3" : prix = 350
    console.log("Premium  → " + prix * cont + "DH");
    break;
    case "4" : prix = 40
    console.log("Enfant   → " + prix * cont + "DH");
    break;
};