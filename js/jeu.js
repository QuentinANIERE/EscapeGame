const alphabet = " abcdefghijklmnopqrstuvwxyz";
//Définition de l'alphabet + l'espace à l'index 0

let clef;
let MessageClair;
let MessageChiffre;
//On initialise ces variables en dehors du if pour leur donner une portée globale

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
//Fonction qui renvoie un entier aléatoire entre 0 et le paramètre compris
    return Math.floor(Math.random() * Math.floor(ChiffreMax));
}

function EntierBorné(min, max) { 
//Fonctio qui renvoie un entier entre les deux paramètres fournis
    return Math.floor(Math.random() * (max - min + 1) + min);
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
    //Code qui affiche l'indice (Vibration)

    let index = NuméroCaseIndice - 1;
    //On prend en compte le fait que l'indice d'une chaine commence toujours à 0

    if (ContenuCaseIndice.innerHTML == clef.charAt(index) && caseAff + 1 == NuméroCaseIndice)  {
    //Si le contenu de la case indice est égale à la valeur de son index de la clef
    //ET que cette case est celle qui vient d'être modifié :

        CaseIndice.classList.add("Vibration");
        setTimeout(function () { CaseIndice.classList.remove("Vibration")}, 250);
        //On ajoute la vibration, et l'on la supprime au bout de 250ms

    } else if (caseAff + 1 == NuméroCaseIndice) {
    //Si la case modifié est la case indice, mais que sa valeur est incorrecte, on retire la classe vibration
    //Afin d'arrêter net la vibration
        
        CaseIndice.classList.remove("Vibration");
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


if (!localStorage.getItem("Clef") && !localStorage.getItem("MessageChiffre")) {
//Si aucune partie n'a été commencée

    let PositionsGeneral = ["au bar", "a la petanque", "au petit coin"];
    let indexRandom = EntierAléatoire(PositionsGeneral.length);
    //On choisi une position aléatoire pour le général parmis la liste de positions possibles

    clef = EntierAléatoire(9999);
    //On choisi un clef de chiffrement aléatoire à quatre chiffre 

    while (estMultiplede26(clef)) {
    //Tant que la clef est un multiple de 26, le message ne sera pas chiffré correctement

        clef = EntierAléatoire(9999);
        //On régenère une nouvelle clef
    }

    MessageClair = PositionsGeneral[indexRandom];
    MessageChiffre = chiffrement(MessageClair, clef);

    localStorage.setItem("Clef", clef);
    localStorage.setItem("MessageClair", MessageClair);
    localStorage.setItem("Message", MessageChiffre);

    //On stocke la clef de chiffrement et le message chiffre dans le local storage
    //Cela permet de récuperer les valeurs dans le script d'aide et de garder les mêmes valeurs en cas de rechargement

} else {
  //Si il y'a une partie déja commencée 

  clef = localStorage.getItem("Clef");
  MessageClair = localStorage.getItem("MessageClair");
  MessageChiffre = localStorage.getItem("Message");

}


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

NuméroCaseIndice = EntierBorné(3, 4);
//On défini aléatoirement le numéro de la case qui affichera l'indice

let ContenuCaseIndice = document.getElementById("case" + NuméroCaseIndice);
let CaseIndice = document.getElementById("CaseChiffre" + NuméroCaseIndice);
//On stocke la case choisie aléatoirement ainsi que le contenu de la case

document.oncontextmenu = new Function("return false");
//Fonction qui empêche d'afficher le menu du clic droit

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
//On lance donc la lecture en asyncrhone au bout de 500ms