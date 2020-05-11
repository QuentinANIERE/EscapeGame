$.getScript("chiffrement.js", function() {
    alert("Script loaded but not necessarily executed.");
 });

alert("hello there !");
let PositionsGeneral = ["au bar", "a la petanque"]
let indexRandom = Math.random();

indexRandom *= PositionsGeneral.length;
indexRandom = Math.floor(indexRandom);

let message = transformationChiffres(PositionsGeneral[indexRandom]);

alert(message);