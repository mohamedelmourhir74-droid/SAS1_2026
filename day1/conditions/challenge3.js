const prompt = require("prompt-sync")();
let mont = +prompt("Entrer le montant d'achat :");
if (mont < 500) {
    console.log("aucune réduction")
    console.log("Total : " + mont)
}else if (mont <= 999) {
    console.log("Réduction : " + mont * 0.05)
    console.log("Total : " + (mont - (mont * 0.05)))
}else if (mont < 1999) {
    console.log("Réduction : " + mont * 0.1)
    console.log("Total : " + (mont - (mont * 0.1)))
}else {
    console.log("Réduction : " + mont * 0.15)
    console.log("Total : " + (mont - (mont * 0.15)))
};