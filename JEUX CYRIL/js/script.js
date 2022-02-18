
let nb;
let guessNB;
let nbToGuess;
let cpt=0;

function myNumber(givenNumber){
   let intNumber=parseInt(givenNumber);
   return intNumber;
}

/* // VERSION ETAPE 2 : NB=22 VERSION ALERT 
function didIWin() {
   if (nb==22)  { 
      alert("YOU DID IT !!!","");
      console.log(nb);
      return true;
   }

   else { 
      if (nb<22) { 
         myNumber(alert("TROP PETIT ! Play again!",""));
         console.log(nb);
         return false
      }

      else if (nb>22) { 
         myNumber(alert("TROP GRAND ! Play again!",""));
         console.log(nb);
         return false
      }
      return false
  }
 
}*/

/* // VERSION ETAPE 3  : VERSION ALERT 
function didIWin() {
   if (nb==nbToGuess)  { 
      alert("YOU DID IT !!!","");
      console.log(nb);
      return true;
   }

   else { 
      if (nb<nbToGuess) { 
         myNumber(alert("TROP PETIT ! Play again!",""));
         console.log(nb);
         return false
      }

      else if (nb>nbToGuess) { 
         myNumber(alert("TROP GRAND ! Play again!",""));
         console.log(nb);
         return false
      }
      return false
  }
 
}
*/

/* // VERSION 2
function askANumber () {
   nb=myNumber(prompt("Votre nombre :",""))
   return nb;
}*/

// VERSION 4
function askANumber1 () {
   guessNB=myNumber(prompt("Votre nombre entre 0 et 50 :",""))
   return guessNB;
}

function askANumber2 () {
   nb=myNumber(prompt("Votre nombre :",""))
   return nb;
}

function nbInRange (n) {
   if (n<0 || n>50) {
      console.log("nbInRange retourne False : " + n);
      return false;
   }
   else {
      console.log("nbInRange retourne True : " + n); 
      return true;
   };
}


/*  // VERSION 2
function gamePlay() {
   askANumber () ;  
   console.log(nb);

   while (!didIWin()) {

      askANumber();
   };
}
*/

// VERSION 5
function compteur () {

   cpt++;
   return cpt;
}


function askANumber5(idJoueur) {
   var nbJX = document.getElementById(idJoueur).value;
   guessNB=myNumber(nbJX);
   //alert("Vous avez tapé : " + test);
   console.log("Vous avez tapé : " + guessNB);
   return guessNB;
}

/*// VERSION 4
function gamePlay() {

   nbToGuess= askANumber1 ();

  while (!nbInRange(nbToGuess)) {
      console.log("Dans 1er While : " + nbToGuess);
      nbToGuess=askANumber1 ();

      if (nbInRange(nbToGuess)) {
         console.log("Dans If nbInRange True : " + nbToGuess);
         
            askANumber2();

         while (!didIWin()) {
            askANumber2();
            console.log("Dans While Compteur : " + compteur ());
            
        }

      }

      
   };*/

// VERSION 5
function gamePlay2() {

   nbToGuess= askANumber5("joueur1");
   console.log("Avant 1er While : " + nbToGuess);

   if  (!nbInRange(nbToGuess)) {
      console.log("Dans 1er IF FALSE : " + nbToGuess);
      //nbToGuess=askANumber5("joueur1");
      document.getElementById("message").innerHTML="Salut\! Entre un chiffre entre  0 < ? < 50"
   }
   else {
      document.getElementById("joueur1").value="";
      document.getElementById("message").innerHTML="PLACE AU JOUEUR 2!"
   
   }



    // VERSION 2
  /* while (!didIWin()) {

      askANumber();
   };*/
      //var test=document.nbToGuess.input.value;
   //console.log("Test : " + test);
}

/* // VERSION 5  : JOUEUR 2 */
function didIWin(idJoueur) {
   var nbJX = document.getElementById(idJoueur).value;
   nb=myNumber(nbJX);
   //alert("Vous avez tapé : " + test);
   //console.log("Vous avez tapé : " + nb);
   
   if (nb==nbToGuess)  { 
      alert("YOU DID IT !!!","");
      //console.log(nb);
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

   else { 
      if (nb<nbToGuess) { 
         myNumber(alert("TROP PETIT ! Play again!",""));
         //console.log(nb);
         document.getElementById("score").innerHTML = "<br><br>Nombre de tentative(s) : " + compteur ();
         return false
      }

      else if (nb>nbToGuess) { 
         myNumber(alert("TROP GRAND ! Play again!",""));
         //console.log(nb);
         document.getElementById("score").innerHTML = "<br><br>Nombre de tentative(s) : " + compteur ();
         return false
      }
      return false
  }
 
}