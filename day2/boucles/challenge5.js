const prompt = require("prompt-sync")();
let n = prompt("Entrer le premier nombre : ");
let x = prompt("Entrer le deuxieme nombre : ");
let rslt = 0
let rslt2 = 0
 for (let i = 1; x*i  < n; i++)
{
   if(rslt>n) break 
    rslt = i * x
    
    console.log(rslt)
     rslt2++
};
 console.log("total de multiples trouvés : " + rslt2);