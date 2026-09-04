const prompt = require("prompt-sync")();
let j = +prompt("Entrer le jour :");
let m = +prompt("Entrer le mois :");
let a = +prompt("Entrer l'année :");

if (a % 400 == 0 || (a % 4 == 0 && a % 100 != 0)) {
    if ((m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && (j >= 1 && j <= 31)) {
        console.log("Date valide")
    }else if ((m == 4 || m == 6 || m == 9 || m == 11) && (j >= 1 && j <= 30)) {
        console.log("Date valide")
    }else if (m == 2 && (j >= 1 && j <= 29)) {
        console.log("Date valide")
    }else console.log("Date invalide")
}else {
    if ((m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && (j >= 1 && j <= 31)) {
        console.log("Date valide")
    }else if ((m == 4 || m == 6 || m == 9 || m == 11) && (j >= 1 && j <= 30)) {
        console.log("Date valide")
    }else if (m == 2 && (j >= 1 && j <= 28)) {
        console.log("Date valide")
    }else console.log("Date invalide")
};