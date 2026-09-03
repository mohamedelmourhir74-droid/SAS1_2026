const prompt = require("prompt-sync")();
function fnc (arr){
    do {
    n = +prompt("Entrer un nombre : ")
    arr.push(n)
}while (!(isNaN(n))) 
};
function additionnerTout(tab){
    fnc(tab)
    total = 0
    for (i = 0; i < tab.length - 1; i++){
        total += tab[i]
    }
    return total
};
let arra = []
console.log(additionnerTout(arra));