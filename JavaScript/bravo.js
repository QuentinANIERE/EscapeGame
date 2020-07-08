AffichagePosition = document.getElementById("Position");
Position.innerHTML = localStorage.getItem("MessageClair");

var MusiqueVictoire = document.getElementById("MusiqueVictoire");
setTimeout(() => { MusiqueVictoire.play() }, 500);
//Un délai est obligatoire car sinon cela est considéré comme indésirable par les navigateurs.

$.confetti.start();

localStorage.removeItem("Clef");
localStorage.removeItem("MessageChiffre");
localStorage.removeItem("MessageClair");
//On supprime les valeurs stockées afin de permettre à l'utilisateur de rejouer