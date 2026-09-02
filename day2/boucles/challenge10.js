const prompt = require("prompt-sync")();
let n = 1
let somme = 0
let i = 0
while (n !== 0){
    n = +prompt("Entrer un nombre : ")
    somme = somme + n
    i++
};
console.log(i - 1);
console.log(somme);