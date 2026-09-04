const prompt = require("prompt-sync")();

let n = prompt("entrer un nombre : ");
let sm1 = 0
let sm2 = 0

for (let i = 1; i <= n; i++) {
    let rslt = i % 2
    if (rslt == 0) {
        sm1 += i 
    }else sm2 += i
};

console.log("somme des pairs : " + sm1);
console.log("somme des impairs : " + sm2);
