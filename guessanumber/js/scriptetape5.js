document.getElementById('range').innerHTML = "0 < ? < 50";
let index=0;
document.getElementById('nombreTentatives').innerHTML = "Nombre de tentatives: " + index;
let numberToGuess;
let givenNumber;

function askPlayerOne() {
numberToGuess = document.getElementById("playerOne").value;

if(numberToGuess<0 || numberToGuess>50) {

document.getElementById('message').innerHTML = "Entrez un nombre entre 0 et 50";
}
else {
    document.getElementById("playerOne").value= " ";
    document.getElementById('message').innerHTML = "Place au joueur 2";

}
/* alert("Vous avez tapé : " + numberToGuess); */

}
function askNumber() {
    givenNumber= document.getElementById("playerTwo").value;
    index++;
    document.getElementById('nombreTentatives').innerHTML = "Nombre de tentatives: " + index;
    if (givenNumber==numberToGuess) {
        document.getElementById('range').innerHTML = "Bravo! Vous avez gagné.";
    }
    else {
        if (givenNumber<numberToGuess) {
            alert("Plus grand");
            }
           if (givenNumber>numberToGuess) {
            alert("Plus petit");
            }
        }
}


