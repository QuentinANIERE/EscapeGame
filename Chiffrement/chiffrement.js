const alphabetisation = (chaine) => {
    
    let listeCarateres = chaine.split('');
    let nouvelleListe = [];
    
    for (caratere of listeCarateres) {

        switch(caratere) {

            case " ":
                nouvelleListe.push(0)

            case "a", "A", "à":
                nouvelleListe.push(1);
                break;

            case "b":
                nouvelleListe.push(2);
                break;
            
            case "B":
                nouvelleListe.push(2);
                break;

            case "c":
                nouvelleListe.push(3);
                break;
            
            case "C":
                nouvelleListe.push(3);
                break;

            case "ç":
                nouvelleListe.push(3);
                break;

            case "d":
                nouvelleListe.push(4);
                break;

            case "e":
                nouvelleListe.push(5);
                break;

            case "é":
                nouvelleListe.push(5);
                break;
            
            case "è":
                nouvelleListe.push(5);
                break;

            case "f":
                nouvelleListe.push(5);
                break;


            default:
                nouvelleListe.push("?")

        }

    
    }
    console.log(nouvelleListe)
}

alphabetisation("a A à")
