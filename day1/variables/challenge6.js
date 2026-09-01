const prompt = require("prompt-sync")();
let scr1 = prompt("Entrer Score partie 1 :");
let scr2 = prompt("Entrer Score partie 2 :");
let scr3 = prompt("Entrer Score partie 3 :");
let scr4 = prompt("Entrer Score partie 4 :");
let scrTotal = +scr1 + +scr2 + +scr3 + +scr4;
let scrMoyen = (scrTotal / 4);

console.log("Le score total est : " + scrTotal);
console.log("Le score moyen est : " + scrMoyen);