const prompt = require("prompt-sync")();
let budgetMAD = prompt("Entrer le budget en MAD :");
let result = budgetMAD / 11
console.log("Budget en EUR est : " + result);