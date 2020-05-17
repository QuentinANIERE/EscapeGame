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
//On chiffre la position

let banderole = document.getElementById("MessageChiffre");
banderole.innerHTML = MessageChiffre;
// On récupere la banderole HTML et on affiche le message chiffré

document.oncontextmenu = new Function("return false");
//Fonction qui empêche d'afficher le menu du clic droit