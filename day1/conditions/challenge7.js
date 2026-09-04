const prompt = require("prompt-sync")();
let code = prompt("Entrer le code :");
switch (code) {
    case "1" : console.log("Compte courant → 20 DH");
    break;
    case "2" : console.log("Compte épargne → 10 DH");
    break;
    case "3" : console.log("Compte étudiant → 0 DH");
    break;
    case "4" : console.log("Compte professionnel → 50 DH");
    break;
};