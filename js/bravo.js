var MusiqueVictoire = document.getElementById("MusiqueVictoire");
setTimeout(() => { MusiqueVictoire.play() }, 500);
//Un délai est obligatoire car sinon cela est considéré comme indésirable par les navigateurs.

$.confetti.start();

localStorage.removeItem("Clef");
localStorage.removeItem("MessageClair");
localStorage.removeItem("MessageChiffre");
//On supprime les valeurs stockées afin de permettre à l'utilisateur de rejouer