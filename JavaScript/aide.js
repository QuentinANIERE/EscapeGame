let clef = localStorage.getItem("Clef");
//On récupère la clef de chiffrement

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

        case "T'es qui ?":
        case "t'es qui ?":
        case "T'es qui":
        case "t es qui":
        case "Qui est tu ?":
        case "qui est tu ?":
        //On prend en compte les fautes d'ortographes
            texte.innerHTML = "Je suis Gunther, Je suis là pour t'aider. Pose moi une question !"
            break;

        case "C'est quoi ?":
        case "C'est quoi":
        case "c'est quoi ?":
        case "C est quoi ?":
        case "c koi":
        

            texte.innerHTML = "C'est un message chiffré ennemi !";
            break;

        case "aide":
        case "Aide":
        case "Aide moi":
        case "aide moi":

            texte.innerHTML = "Pose moi une question si tu veux que je t'aide !";
            break;

        case "méthode":
        case "Méthode":
        case "methode":
        case "Quelle méthode ?":
        case "quelle méthode":

            texte.innerHTML = "Ce message est chiffré avec la méthode de césar";
            break;

        case "Comment faire ?":
        case "comment faire ?":
        case "Comment faire":
        case "comment faire":
        case "Comment ?":
        case "comment ?":
        case "Comment":
        case "comment":

        texte.innerHTML = "Je pense que la clé de chiffrement dépend de chiffres de la vie du général";
        break;

        case "Vie du général":
        case "vie général":
        case "général":
        case "Général":
        case "Qui est le général ?":
        case "qui est le général":
        case "Chiffre préféré général":
        case "chiffre préfréré général":

            ChiffrePref = clef.substring(0, 2);
            //On détermine le chiffre du général, qui est les deux premiers chiffre de la clef

            texte.innerHTML = "Le général Shneitzel est un homme simple. Son chiffre préféré est " + ChiffrePref;
            break;

        case "Naissance":
        case "naissance":
        
    }

    saisie.value = "";
    //Vidage de la zone de saisie
}


let texte = document.getElementById("texteGunther");
let saisie = document.getElementById("saisie");
let boutton = document.getElementById("boutton");
//Récupération des élements HTML

boutton.addEventListener("click", demandeAide);
//Ajout d'un callback au clic sur le boutton

document.addEventListener("keypress", function () {
    
    if (event.key == "Enter") {
    //Si l'utilisateur a appuyé sur la touche entrée
        demandeAide();
    }
});
//Ajout d'un callback pour chaque pressée, la fonction vérifie si c'est la touche entré