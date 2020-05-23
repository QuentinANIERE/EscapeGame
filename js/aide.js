function demandeAide() {

    switch(saisie.value) {
        
        default:

            texte.innerHTML = "Je n'ai pas compris... Utilise des mots simples";
            break;

        case "":
        case " ":
        case "  ":
        case "    ":
        //Si la saisie est vide ou remplie avec des espaces

            break; //Usage du break néccésaire dans le switch

        case "C'est quoi ?":
        case "C'est quoi":
        case "c'est quoi ?":
        case "C est quoi ?":
        case "c koi":
        //On prend en compte les fautes d'ortographes

            texte.innerHTML = "C'est un message chiffré ennemi !";
            break;

        case "aide":
        case "Aide":
        case "Aide moi":
        case "aide moi":

            texte.innerHTML = "Pose moi une question si tu veux je t'aide !";
            break;

        case "méthode":
        case "Méthode":
        case "methode":
        case "Quelle méthode ?":
        case "quelle méthode":

            texte.innerHTML = "Je pense qu'ils ont utilisé la méthode de la roue de césar";
            break;

    }

    saisie.value = "";
    //Vidage de la zone de saisie
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
//Ajout d'un callback pour chaque pressée, la fonction vérifie si c'est la touche entré