// VARIABLES GLOBALES
let nb;
let guessNB;
let nbToGuess;
let cpt=0;
let minRange;
let maxRange;

// CONVERSION EN ENTIER
function myNumber(givenNumber){
   let intNumber=parseInt(givenNumber);
   return intNumber;
}

// VERSION ETAPE 6 : VERSION AVEC MINRANGE ET MAXRANGE AU CHOIX DE JOUEUR 1 ALLANT DE 1 A INFINI !!!
function nbInRange (n) {
   if (n<minRange || n>maxRange) {  // CAS EN DEHORS DU RANGE
      console.log("nbInRange retourne False : " + n);
      return false;
   }
   else { // SINON RETOURNE TRUE IL EST DANS LE RANGE
      console.log("nbInRange retourne True : " + n); 
      return true;
   };
}

// VERSION  ETAPE 6 : compteur itération
function compteur () {
   cpt++;  // ON INCREMENTE LE COMPTEUR
   return cpt;
}

// VERSION  ETAPE 6 : entre un chiffre quelque soit le joueur 1 ou 2 en paramètre
function askANumber5(idJoueur) {
   var nbJX = document.getElementById(idJoueur).value;
   guessNB=myNumber(nbJX);
   console.log("Vous avez tapé : " + guessNB);
   return guessNB;
}

// VERSION ETAPE 6 : lance le jeu pour le joueur 1 d'abord, pas de range fixé, allant de 1 à infini !!!
function gamePlay3() {
   nbToGuess= askANumber5("joueur1");
   console.log("NB TO GUESS : " + nbToGuess);
   document.getElementById("joueur1").value="";   // efface son formulaire à joueur 1
   document.getElementById("message").innerHTML="PLACE AU JOUEUR 2!";  // demande au joueur 2 d'entrer un chiffre
}

/* // VERSION ETAPE 6  : POUR LE JOUEUR 2 */
function didIWin(idJoueur) {
   var nbJX = document.getElementById(idJoueur).value;
   nb=myNumber(nbJX);
   
   // CAS IL A GAGNE :
   if (nb==nbToGuess)  { 
      alert("YOU DID IT !!!","");
      document.getElementById("score").innerHTML = "<br><br>Nombre de tentative(s) : " + compteur ();
      document.getElementById("message").innerHTML="BRAVO JOUEUR 2! Tu as droit à un bonus !"
      document.getElementById("bonus").innerHTML="Click 'GO' to play: <button id='ok' onclick='myName()'>GO!</button>" ; // 1ere solution : mettre du html dans JS; 2e sol: separer html du JS mais appelle le DOM ci-dessous :
      // document.getElementById("ok").setAttribute("style", "visibility:visible;");  // 2e solution : Pour rendre visible le bouton OK
      display_image('img/rat.jfif', 
      276, 
      250, 
      'JavaScriptImage');
      
      return true;
   }

   // SINON ON VERIFIE S'iL EST DANS LE RANGE
   else { 
      if  (!nbInRange(nb)) {
         console.log("Pas dans range : " + nb);
         document.getElementById("score").innerHTML = "<br><br>Nombre de tentative(s) : " + compteur ();
      }      
      else {

         if (nb<nbToGuess) { 
            myNumber(alert(`TROP PETIT ! Play again! Entre un chiffre entre ${minRange}<?<${maxRange} `,""));
            minRange=nb;  // ON CHANGE LE RANGE MINIMUM PAR LE NOMBRE NB DU JOUEUR 2
            console.log(`minRange = ${minRange}`);
            document.getElementById("score").innerHTML = "<br><br>Nombre de tentative(s) : " + compteur ();
            return false
         }

         else if (nb>nbToGuess) { 
            myNumber(alert(`TROP GRAND ! Play again! Entre un chiffre entre ${minRange}<?<${maxRange} `,""));
            maxRange=nb; // ON CHANGE LE RANGE MMAXIMUM PAR LE NOMBRE NB DU JOUEUR 2
            console.log(`maxRange = ${maxRange}`);
            document.getElementById("score").innerHTML = "<br><br>Nombre de tentative(s) : " + compteur ();
            return false
         }
      }
      return false
  }
 
}