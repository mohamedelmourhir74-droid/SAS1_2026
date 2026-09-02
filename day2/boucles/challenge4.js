const prompt = require("prompt-sync")();
let n = prompt("Entrer un nombre : ");
 for (let i = 1; i <= 10; i++){
    produit = i * n
    console.log(i + " x " + n + " = "+  produit)
 };