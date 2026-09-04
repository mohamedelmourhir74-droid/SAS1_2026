const prompt = require("prompt-sync")();
let n = prompt("entrer un nombre : ");
let ndiv = 0
for (let i = 1; i <= n/2; i++) {
    let rslt = n % i
    if (!rslt) ndiv += 1
};
if (ndiv == 1) console.log(n + " est un nombre premier");
else console.log(n +  " n'est pas un nombre premier");