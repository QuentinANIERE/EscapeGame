const transformationChiffres = (chaine) => {

    /* Cette fonction transforme une chaine en liste d'entiers selon la position de chaque caractere dans l'alphabet.
    Exemple => a = 1, f = 6, z = 26 */  
    
    let listeCarateres = chaine.split('');
    //On splite chaque caractere de la chaine en une liste ("Hello" => ["H", "e", "l", "l"; "o"])
    let nouvelleListe = [];
    
    for (caratere of listeCarateres) {

        switch(caratere) {

            case " ":
                nouvelleListe.push(0)
                break; //Le break est indispensable car sinon cela execute le bloc d'en dessous même si la condition est false

            case "a":
                nouvelleListe.push(1);
                break;

            case "b":
                nouvelleListe.push(2);
                break;
            
            case "c":
                nouvelleListe.push(3);
                break;

            case "d":
                nouvelleListe.push(4);
                break;

            case "e":
                nouvelleListe.push(5);
                break;

            case "f":
                nouvelleListe.push(6);
                break;
            
            case "g":
                nouvelleListe.push(7);
                break;

            case "h":
                nouvelleListe.push(8);
                break;

            case "i":
                nouvelleListe.push(9);
                break;

            case "j":
                nouvelleListe.push(10);
                break;
            
            case "k":
                nouvelleListe.push(11);
                break;
            
            case "l":
                nouvelleListe.push(12);
                break;

            case "m":
                nouvelleListe.push(13);
                break;

            case "n":
                nouvelleListe.push(14);
                break;

            case "o":
                nouvelleListe.push(15);
                break;

            case "p":
                nouvelleListe.push(16);
                break;

            case "q":
                nouvelleListe.push(17);
                break;

            case "r":
                nouvelleListe.push(18);
                break;

            case "s":
                nouvelleListe.push(19);
                break;

            case "t":
                nouvelleListe.push(20);
                break;

            case "u":
                nouvelleListe.push(21);
                break;


            case "v":
                nouvelleListe.push(22);
                break;

            case "w":
                nouvelleListe.push(23);
                break;

            case "x":
                nouvelleListe.push(24);
                break;

            case "y":
                nouvelleListe.push(25);
                break;
            
            case "z":
                nouvelleListe.push(26);
                break;

            default:
                nouvelleListe.push("?");
                break;

        }
    }

    return nouvelleListe;
}

const transformationLettres = (liste) => {

    /* Cette fonction transforme les entiers en lettres, selon leur position dans l'alphabet latin.
    exemple => 1 = a, 6 = f, 26 = z */  
    
    let nouvelleListe = [];
    
    for (entier of liste) {
    //On effectue l'opération autant de fois qu'il y'a d'index dans la liste. 
    //Les entiers sont asignés tour à tour a la variable caractere

        switch(entier) {

            case 0:
                nouvelleListe.push(" ")
                break; //Le break est indispensable car sinon cela execute le bloc d'en dessous même si la condition est false

            case 1:
                nouvelleListe.push("a");
                break;

            case 2:
                nouvelleListe.push("b");
                break;
            
            case 3:
                nouvelleListe.push("c");
                break;

            case 4:
                nouvelleListe.push("d");
                break;

            case 5:
                nouvelleListe.push("e");
                break;

            case 6:
                nouvelleListe.push("f");
                break;
            
            case 7:
                nouvelleListe.push("g");
                break;

            case 8:
                nouvelleListe.push("h");
                break;

            case 9:
                nouvelleListe.push("i");
                break;

            case 10:
                nouvelleListe.push("j");
                break;
            
            case 11:
                nouvelleListe.push("k");
                break;
            
            case 12:
                nouvelleListe.push("l");
                break;

            case 13:
                nouvelleListe.push("m");
                break;

            case 14:
                nouvelleListe.push("n");
                break;

            case 15:
                nouvelleListe.push("o");
                break;

            case 16:
                nouvelleListe.push("p");
                break;

            case 17:
                nouvelleListe.push("q");
                break;

            case 18:
                nouvelleListe.push("r");
                break;

            case 19:
                nouvelleListe.push("s");
                break;

            case 20:
                nouvelleListe.push("t");
                break;

            case 21:
                nouvelleListe.push("u");
                break;


            case 22:
                nouvelleListe.push("v");
                break;

            case 23:
                nouvelleListe.push("w");
                break;

            case 24:
                nouvelleListe.push("x");
                break;

            case 25:
                nouvelleListe.push("y");
                break;
            
            case 26:
                nouvelleListe.push("z");
                break;

            default:
                nouvelleListe.push("?");
                break;

        }
    }

    let chaine = "";

    for (caratere of nouvelleListe) {
    //On ajout chaque caractere traduit a une chaine
        
        chaine += caratere;
    }

    return chaine;
}


const chiffrement = (liste, clef) => {
    
    let resultat = [];

    for (chiffre of liste) {     
    //On récupére chaque chiffre de la liste tour à tour

        chiffre += clef;
        //On ajoute la clé de chiffrement

        while (chiffre > 26) {
        //Si le résultat obtenu est plus grand que 26, "la roue à fait à tour" donc on enleve 26. 
        //On repete l'opération autant que nécéssaire
            chiffre -= 26;
        }

        resultat.push(chiffre);
    }

    return resultat;
}

const dechiffrement = (liste, clef) => {
    
    let resultat = [];

    for (chiffre of liste) {     
    //On récupére chaque chiffre de la liste tour à tour

        chiffre -= clef;
        //On soustrait la clé de chiffrement

        while (chiffre < 0) {
        //Si le résultat obtenu est plus petit que 0, "la roue à fait à tour" donc on ajoute 26. 
        //On repete l'opération autant que nécéssaire
            chiffre += 26;
        }

        resultat.push(chiffre);
    }

    return resultat;
}

let message = "au bar";
console.log("Le message non chifré => " + message);
console.log();

message = transformationChiffres(message);
console.log("Le message transformé en chiffres => " + message);
console.log();

clef = 252;

messageChiffre = chiffrement(message, clef);
console.log("Le message chiffré => " + messageChiffre);
console.log();

message = transformationLettres(messageChiffre);
console.log("Le message chiffré et transformè en letre => " + message);
console.log();

message = transformationChiffres(message);
console.log("Le message chiffré reconverti en chiffre => " + message);
console.log()

message = dechiffrement(message, clef);
console.log("Le message déchiffré => " + message);
console.log();

message = transformationLettres(message);
console.log("Le message déchiffré => " + message);