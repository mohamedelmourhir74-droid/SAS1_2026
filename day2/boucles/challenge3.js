const prompt = require("prompt-sync")();
let n = prompt("Entrer un nombre : ");
somme = 0;
 for (let i = 1; i <= n; i++){
    somme = somme + i
 };
  console.log("somme : " + somme);