function chiffrement(chaine, clef) {

    let resultat = "";

    for (lettre of chaine) {
    //On récupere chaque lettre de la chaine 
        for (index = 0; index < alphabet.length; index++) {
        //On récupere chaque indice d'index de l'alphabet

            if (lettre == alphabet[index]) {
            //Si une lettre de la chaine correspondant à une lettre de l'alphabet
            //Exemple = si a = a, on récupere la position 1 à laquelle on ajoutera la clef de chiffrement
                nouveauRang = index + clef;

                while (nouveauRang > 26) {
                //Si on dépasse la lettre z, on revient à l'espace
                    nouveauRang -= 26;
                }
                resultat += alphabet[nouveauRang];
            }
        }
    }

    return resultat;
}

function déchiffrement(chaine, clef) {

    let resultat = "";

    for (lettre of chaine) {
    //On récupere chaque lettre de la chaine 
        for (index = 0; index < alphabet.length; index++) {
        //On récupere chaque indice d'index de l'alphabet

            if (lettre == alphabet[index]) {
            //Si une lettre de la chaine correspondant à une lettre de l'alphabet
            //Exemple = si a = a, on récupere la position 1 à laquelle on ajoutera la clef de chiffrement
                nouveauRang = index - clef;

                while (nouveauRang < 0) {
                //Si on dépasse la lettre a, on revient à z
                    nouveauRang += 26;
                }
                resultat += alphabet[nouveauRang];
            }
        }
    }

    return resultat;
}

function EntierAléatoire(ChiffreMax) { 
    return Math.floor(Math.random() * Math.floor(ChiffreMax));
}

function estMultiplede26(Chiffre) {

    //Fonction qui vérifie si un chiffre est un multiple de 26 en vérifiant le reste 
    //d'une division euclidienne

    reste = Chiffre % 26;
    
    if (reste == 0) {
        return true;

    } else {
        return false;
    }
}

function changementsValeur(opération){

    audio.play();
    //On joue le son du clic

    opération = opération.split("_");
    //On récupere l'opération à effectuer (plus ou moins) et la case à changer

    caseAff = parseInt(opération[1]) - 1;
    //On converti l'id en index de la liste, la case avec l'id 1 étant stocké à l'indice 0

    if (opération[0] == "+") {

        ancienneValeur = listeCase[caseAff].innerHTML;
        nouvelleValeur = parseInt(ancienneValeur) + 1;

        if (nouvelleValeur == 10) {
            nouvelleValeur = 0;
        }

        listeCase[caseAff].innerHTML = nouvelleValeur;

    } else {

        ancienneValeur = listeCase[caseAff].innerHTML;
        nouvelleValeur = parseInt(ancienneValeur) - 1;

        if (nouvelleValeur == -1) {
            nouvelleValeur = 9;
        }

        listeCase[caseAff].innerHTML = nouvelleValeur;
    }
}



const alphabet = " abcdefghijklmnopqrstuvwxyz";
//Définition de l'alphabet + l'espace à l'index 0

let PositionsGeneral = ["au bar", "a la petanque"];
let indexRandom = EntierAléatoire(PositionsGeneral.length);
//On choisi une position aléatoire pour le général parmis la liste de positions possibles

let clef = EntierAléatoire(9999);
//On choisi un clef de chiffrement aléatoire à quatre chiffre 

while (estMultiplede26(clef)) {
//Tant que la clef est un multiple de 26, le message ne sera pas chiffré correctement

    clef = EntierAléatoire(9999);
    //On régenère une nouvelle clef
}

console.log(clef); //Temporaire pour le dev

let MessageChiffre = chiffrement(PositionsGeneral[indexRandom], clef);

let banderole = document.getElementById("MessageChiffre");
banderole.innerHTML = MessageChiffre;
// On récupere la banderole HTML et on affiche le message chiffré

let case1 = document.getElementById("case1");
let case2 = document.getElementById("case2");
let case3 = document.getElementById("case3");
let case4 = document.getElementById("case4");
//Récupération des cases d'affichage

let listeCase = [case1, case2, case3, case4];

for(caseAff of listeCase) {

    caseAff.innerHTML = EntierAléatoire(10);
}

document.oncontextmenu = new Function("return false");
//Fonction qui empêche d'afficher le menu du clic droit

let h_1 = document.getElementById("+_1");
let h_2 = document.getElementById("+_2");
let h_3 = document.getElementById("+_3");
let h_4 = document.getElementById("+_4");

let b_1 = document.getElementById("-_1");
let b_2 = document.getElementById("-_2");
let b_3 = document.getElementById("-_3");
let b_4 = document.getElementById("-_4");
//Récuperation des bouttons HTML ainsi que des cases

h_1.addEventListener("click", function() { changementsValeur(this.id); } );
h_2.addEventListener("click", function() { changementsValeur(this.id); } );
h_3.addEventListener("click", function() { changementsValeur(this.id); } );
h_4.addEventListener("click", function() { changementsValeur(this.id); } );

b_1.addEventListener("click", function() { changementsValeur(this.id); } );
b_2.addEventListener("click", function() { changementsValeur(this.id); } );
b_3.addEventListener("click", function() { changementsValeur(this.id); } );
b_4.addEventListener("click", function() { changementsValeur(this.id); } );
//Au clic, on lance la fonction avec comme argument l'id HTML du boutton cliqué, ou de la case

let audio = document.querySelector("audio");
//On sélectione l'audio caché du document