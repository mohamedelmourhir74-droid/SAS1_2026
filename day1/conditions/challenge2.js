const prompt = require("prompt-sync")();
let clr = prompt("Entrer le couleur de feu :");
if (clr === "rouge") {
    console.log("Arrêtez-vous")
}else if (clr === "orange") {
    console.log("Ralentissez")
}else if(clr === "vert") {
    console.log("Vous pouvez passer")
}else {
    console.log("Couleur invalide")
};