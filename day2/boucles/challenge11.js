const prompt = require("prompt-sync")();

let n = prompt("Entrer un nombre : ");
let rslt = 1

if (n == 0) rslt = 1;
else {
    for (let i = 1; i <= n; i++) {
    rslt = rslt * i
 }
 };

console.log(rslt);