const prompt = require("prompt-sync")();
let sm = 0
let n = prompt("entrer un nombre : ");
for ( let i =1; i <= n; i++) {
    let rslt = n % i
    if(!rslt) {
        console.log(i)
        sm += 1
    }

};
console.log("Nombre de diviseurs : " + sm);