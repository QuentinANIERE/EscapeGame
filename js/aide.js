function demandeAide() {

    switch(saisie.value) {
        
        default:

            texte.innerHTML = "Je n'ai pas compris...";
            break;

        case "":
        case " ":
        case "  ":
        case "    ":

            break;
    
        case "C'est quoi ?":
        case "C'est quoi":
        case "c'est quoi ?":
        case "C est quoi ?":
        case "c koi":

            texte.innerHTML = "C'est un message chiffré ennemi !";
            break;



    }

    saisie.value = "";
}

function detection() {
    
    if (event.key == "Enter") {
    //Si l'utilisateur a appuyé sur la touche entrée
        demandeAide();
    }
}

let texte = document.getElementById("texteGunther");
let saisie = document.getElementById("saisie");
let boutton = document.getElementById("boutton");
//Récupération des élements HTML

boutton.addEventListener("click", demandeAide);
//Ajout d'un callback au clic sur le boutton

document.addEventListener("keypress", detection);
//Ajout d'un callback pour chaque pressée, la fonction vérifie si c'est la touche entrée