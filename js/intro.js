let slideActuelle = 1; 
afficherSlides(slideActuelle);
//Par défaut on affiche la slide numéro 1


function plusSlides(x) {
//Fonction qui permet d'avancer dans les slides
  afficherSlides(slideActuelle += x);
}


function afficherSlides(numéroSlide) {
  let index;
  let slides = document.getElementsByClassName("slides");
  let points = document.getElementsByClassName("points");
  //On récupére les élements HTML en variables

  if (numéroSlide > slides.length) {slideActuelle = 1}
  if (numéroSlide < 1) {slideActuelle = slides.length}
  //On vérifie qu'on ne dépasse d'un slide (Si 3 slides, on peut pas aller à la 4éme)

  for (index = 0; index < slides.length; index++) {
      slides[index].style.display = "none";
      //On cache toutes les slides
  }
  for (index = 0; index< points.length; index++) {
      points[index].className = points[index].className.replace(" active", "");
      //On met en évidence le point correspondant
  }

  slides[slideActuelle-1].style.display = "block";
  points[slideActuelle-1].className += " active";
  //On affiche la slide sélectionée
}