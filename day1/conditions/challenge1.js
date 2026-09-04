const prompt = require("prompt-sync")();

let mont = +prompt("Entrer Montant de commande :");

if (mont < 100) {
    console.log("Frais livraison : 30")
    console.log("Total à payer : " + (mont + 30))
}else if (mont < 299) {
    console.log("Frais livraison : 20")
    console.log("Total à payer : " + (mont + 20))
}else if (mont < 499) {
    console.log("Frais livraison : 10")
    console.log("Total à payer : " + (mont + 10))
}else {
    console.log("Livraison gratuite")
    console.log("Total à payer : " + mont)
};