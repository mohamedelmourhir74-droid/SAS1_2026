const prompt = require("prompt-sync")();
let dur = prompt("Entrer la durée du film en minutes :");
if (dur < 60) {
    console.log("Court métrage")
}else if (dur <= 120) {
    console.log("Film standard")
}else {
    console.log("Film long")
};