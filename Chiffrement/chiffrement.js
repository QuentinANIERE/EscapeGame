const transformationChiffres = (chaine) => {

    /* Cette fonction prend comme argugment une chaine et renvoi une liste d'entiers correspondant à la position des lettres dans l'alphabet
    latin. Exemple => a => 1, z = 26

    Les accents et les mascules renvoie des nombres flottants.
    Exemple = A => 1.1, é => 5.2

    On utilise cette méthode plûtot que la notation des caratères Ascii car cela renvoi des valeurs plus simples pour les joueurs non initiés à 
    l'informatique, rendant le jeu accessibile à tous */
    
    let listeCarateres = chaine.split('');
    //On splipte chaque caractéres de la chaine d'arguments
    let nouvelleListe = [];
    
    for (caratere of listeCarateres) {

        switch(caratere) {
        //Le switch permet d'alléger la syntaxe par rapport à une bloc IF, ELIF

            case " ":
                nouvelleListe.push(0)
                break;
                // L'instruction break est indispensable car cela execute la condition du bloc suivant sinon. [Les joies de JS :-) ]

            case "a":
                nouvelleListe.push(1);
                break;

            case "A":
                nouvelleListe.push(1.1)
                break;

            case "à":
                nouvelleListe.push(1.2)
                break;

            case "b":
                nouvelleListe.push(2);
                break;
            
            case "B":
                nouvelleListe.push(2.1);
                break;

            case "c":
                nouvelleListe.push(3);
                break;
            
            case "C":
                nouvelleListe.push(3.1);
                break;

            case "ç":
                nouvelleListe.push(3.2);
                break;

            case "d":
                nouvelleListe.push(4);
                break;

            case "D":
                nouvelleListe.push(4.1)
                break;

            case "e":
                nouvelleListe.push(5);
                break;

            case "E":
                nouvelleListe.push(5.1)

            case "é":
                nouvelleListe.push(5.2);
                break;
            
            case "è":
                nouvelleListe.push(5.3);
                break;

            case "ê":
                nouvelleListe.push(5.4);
                break;

            case "f":
                nouvelleListe.push(6);
                break;
            
            case "F":
                nouvelleListe.push(6.1);
                break;

            case "g":
                nouvelleListe.push(7);
                break;

            case "G":
                nouvelleListe.push(7.1);
                break;

            case "h":
                nouvelleListe.push(8);
                break;

            case "H":
                nouvelleListe.push(8.1);
                break;

            case "i":
                nouvelleListe.push(9);
                break;

            case "I":
                nouvelleListe.push(9.1);
                break;

            case "ï":
                nouvelleListe.push(9.2);
                break;

            case "j":
                nouvelleListe.push(10);
                break;

            case "J":
                nouvelleListe.push(10.1);
                break;
            
            case "k":
                nouvelleListe.push(11);
                break;
            

            case "K":
                nouvelleListe.push(11.1);
                break;

            case "l":
                nouvelleListe.push(12);
                break;

            case "L":
                nouvelleListe.push(12.1);
                break;

            case "m":
                nouvelleListe.push(13);
                break;

            case "M":
                nouvelleListe.push(13.1);
                break;

            case "n":
                nouvelleListe.push(14);
                break;

            case "N":
                nouvelleListe.push(14.1);
                break;

            case "o":
                nouvelleListe.push(15);
                break;

            case "O":
                nouvelleListe.push(15.1);
                break;

            case "p":
                nouvelleListe.push(16);
                break;

            case "P":
                nouvelleListe.push(16.1);
                break;

            case "q":
                nouvelleListe.push(17);
                break;

            case "Q":
                nouvelleListe.push(17.1);
                break;

            case "r":
                nouvelleListe.push(18);
                break;

            case "R":
                nouvelleListe.push(18.1);
                break;

            case "s":
                nouvelleListe.push(19);
                break;

            case "S":
                nouvelleListe.push(19.1);
                break;

            case "t":
                nouvelleListe.push(20);
                break;

            case "T":
                nouvelleListe.push(20.1);
                break;

            case "u":
                nouvelleListe.push(21);
                break;

            case "U":
                nouvelleListe.push(21.1);
                break;

            case "v":
                nouvelleListe.push(22);
                break;

            case "V":
                nouvelleListe.push(22.1);
                break;

            case "w":
                nouvelleListe.push(23);
                break;

            case "W":
                nouvelleListe.push(23.1);
                break;

            case "x":
                nouvelleListe.push(24);
                break;

            case "X":
                nouvelleListe.push(24.1);
                break;

            case "y":
                nouvelleListe.push(25);
                break;

            case "Y":
                nouvelleListe.push(25.1);
                break;
            
            case "z":
                nouvelleListe.push(26);
                break;

            case "Z":
                nouvelleListe.push(26.1);
                break;

            default:
                nouvelleListe.push("?");
                break;

        }
    }

    return nouvelleListe;
}


let message = "Le général se trouve au toilletes";
console.log("Le message non chifré => " + message);
console.log();

message = transformationChiffres(message);
console.log("Le message transformé en chiffres => " + message);
console.log()