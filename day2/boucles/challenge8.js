const prompt = require("prompt-sync")();
let n = prompt("combien de missions vous pouvez  : ");
for (i = 1; i <= n; i++){
    console.log("Mission " + i + " → Score : " + i*100)
};