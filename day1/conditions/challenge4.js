const prompt = require("prompt-sync")();
let a = +prompt("Entrer la premiere longueur :");
let b = +prompt("Entrer la deuxieme longueur :");
let c = +prompt("Entrer la troisieme longueur :");

if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
        console.log("Triangle valide : Équilatéral")
    }else if (a == b && a != c || a == c && a != b || b == c && b != a) {
        console.log("Triangle valide : Isocèle")
    }else {
        console.log("Triangle valide : Scalène")
    }
}else {
    console.log("Triangle invalide")
};