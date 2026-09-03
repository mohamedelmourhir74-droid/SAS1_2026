const prompt = require("prompt-sync")();
let prenom = prompt("Entrer le prenom : ").toLowerCase();
let nom = prompt ("Entrer le nom : ").toLocaleLowerCase();
function genererEmail(prenom, nom){
    return prenom + "." + nom + "@entreprise.com"
};
 console.log(genererEmail(prenom, nom));