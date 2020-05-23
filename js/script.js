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

    //Fonction qui vérifie si un chiffre est un multiple de 26 en vérifiant le modulo 

    modulo = Chiffre % 26;
    
    if (modulo == 0) {
        return true;

    } else {
        return false;
    }
}

function changementsValeur(opération){

    audioClic.play();
    //On joue le son du clic

    opération = opération.split("_");
    //On récupere l'opération à effectuer (plus ou moins) et la case à changer

    caseAff = parseInt(opération[1]) - 1;
    //On converti l'id en index de la liste, la case avec l'id 1 étant stocké à l'indice 0

    if (opération[0] == "+") {
    //Si le boutton est en haut, on ajoute 1

        ancienneValeur = listeCase[caseAff].innerHTML;
        nouvelleValeur = parseInt(ancienneValeur) + 1;
        //On récupere la valeur affichée, on la converti en entier et on ajoute 1

        if (nouvelleValeur == 10) {
        //Si on dépasse 10, on retourne à à
            nouvelleValeur = 0;
        }

        listeCase[caseAff].innerHTML = nouvelleValeur;
        //On affiche la valeur dans la case appropriée

    } else {
    //Si le boutton est en bas, on soustrait 1

        ancienneValeur = listeCase[caseAff].innerHTML;
        nouvelleValeur = parseInt(ancienneValeur) - 1;
                //On récupere la valeur affichée, on la converti en entier et on eneleve 1

        if (nouvelleValeur == -1) {
        //Si on atteint -1, on revient à 9
            nouvelleValeur = 9;
        }

        listeCase[caseAff].innerHTML = nouvelleValeur;
        //On affiche la valeur dans la case appropriée
    }
}

function victoire() {
    window.location = "./bravo.html";
}

function clicAide() {

    aide = window.open("aide.html","aide", "top=10, left=10, \
    height=400, width=400, \
    directories=no, menubar=no, status=no, location=no");
    //Affichage d'un pop d'aide
}

function clicDéchiffrement() {

    let valeurCase = [];

    for(caseAff of listeCase) {
        valeurCase.push(caseAff.innerHTML);
    }

    //On récupere la valeur de toutes les cases dans une liste

    clefUser = parseInt(valeurCase.join(""));
    //On transforme cette liste en entier de 4 chiffres

    ancienMessage = MessageChiffre;
    nouveauMessage = déchiffrement(ancienMessage, clefUser);
    //On déchiffre message original avec la clé proposée par l'utilisateur

    banderole.innerHTML = nouveauMessage;
    //On affiche le message

    if (nouveauMessage == MessageClair) {
    //Si le message déchiffré est le message de départ

        setTimeout(() => {  victoire() }, 1000);
        //Au bout de 1000ms, on appelle la fonction victoire
    }
}

//TODO garde en mémoire le message chiffré origal et déchiffre celui ci pas le nouveau

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

let MessageClair = PositionsGeneral[indexRandom];
let MessageChiffre = chiffrement(MessageClair, clef);

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

const h_1 = document.getElementById("+_1");
const h_2 = document.getElementById("+_2");
const h_3 = document.getElementById("+_3");
const h_4 = document.getElementById("+_4");

const b_1 = document.getElementById("-_1");
const b_2 = document.getElementById("-_2");
const b_3 = document.getElementById("-_3");
const b_4 = document.getElementById("-_4");
//Récuperation des bouttons HTML ainsi que des cases

const bt_décod = document.getElementById("bt_décod")
//Récupération du boutton de validation

h_1.addEventListener("click", function() { changementsValeur(this.id); } );
h_2.addEventListener("click", function() { changementsValeur(this.id); } );
h_3.addEventListener("click", function() { changementsValeur(this.id); } );
h_4.addEventListener("click", function() { changementsValeur(this.id); } );

b_1.addEventListener("click", function() { changementsValeur(this.id); } );
b_2.addEventListener("click", function() { changementsValeur(this.id); } );
b_3.addEventListener("click", function() { changementsValeur(this.id); } );
b_4.addEventListener("click", function() { changementsValeur(this.id); } );
//Au clic, on lance la fonction avec comme argument l'id HTML du boutton cliqué, ou de la case

bt_décod.addEventListener("click", clicDéchiffrement);
bt_aide.addEventListener("click", clicAide);

let audioClic = document.getElementById("audioClic");
audioClic.preload;
//On sélectione l'audio du clic caché du document et on le précharge pour éviter un délai

let musiqueFond = document.getElementById("musiqueFond");
//On sélection l'audio HTML, mais on ne peut pas le joueur directement car l'utilisateur n'a pas interagit avec le DOM

setTimeout(() => { musiqueFond.play() }, 500);
//On lance donc la lecture en asyncrhone au bout de 500ms (Merci Google Chrome...)