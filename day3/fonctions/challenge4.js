const prompt = require("prompt-sync")();
let nom = prompt("Entrer le nom : ");
let titre = prompt ("Entrer le titre : ");
function saluerClient(nom, titre){
    if (titre == "") {
        titre = "Client"
    }
return "Bonjour " + titre + " " + nom
};

console.log(saluerClient(nom, titre));
