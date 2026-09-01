const prompt = require("prompt-sync")();
let spaceGB = prompt("Entrer l'espace en GB :");
let result = spaceGB * 1024
console.log("l'espace en MB est : " + result);