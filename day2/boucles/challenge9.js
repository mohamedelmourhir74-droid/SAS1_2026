const prompt = require("prompt-sync")();
let base = prompt("Entrer la base : ");
let exposant = prompt("Entrer l'Exposant : ");
let i = 0
rslt = 1
while (i < exposant){
    rslt = rslt * base
    i = i + 1
};
console.log(rslt)