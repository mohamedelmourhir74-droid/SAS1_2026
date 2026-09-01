const prompt = require("prompt-sync")();
let u = +prompt("Entrer la tension en volts :");
let i = +prompt("Entrer L'intensité en ampères :");
let t = +prompt("Entrer le temps en heures :");
let energie = u * i * t;
console.log("Énergie de la batterie est : " + energie)