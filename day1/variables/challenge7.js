const prompt = require("prompt-sync")();
let noteCC = +prompt("Entrer la note de Contrôle continu :");
let noteProjet = +prompt("Entrer la note de Projet :");
let noteExamen = +prompt("Entrer la note d'Examen final :");
let noteFinale = ((noteCC * 2) + (noteProjet * 3) + (noteExamen * 5)) / 10;
console.log("Note finale est : " + noteFinale)
