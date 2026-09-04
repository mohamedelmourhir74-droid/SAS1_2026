const prompt = require("prompt-sync")();

let n = +prompt("entrer un nombre : ");
let sm = 0
let rslt = 0
for (let i = 1; i <= n / 2; i++) {
    rslt = n % i
    if (rslt == 0) sm += i
};

if (sm == n) console.log(n + " est un nombre parfait");
    else console.log(n + " n'est pas un nombre parfait");