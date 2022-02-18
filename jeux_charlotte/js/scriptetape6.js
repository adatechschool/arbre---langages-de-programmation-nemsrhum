let rangeMinimal=0;
let rangeMaximal=50;

document.getElementById('range').innerHTML = rangeMinimal + " < ? < " + rangeMaximal;
let index=0;
document.getElementById('nombreTentatives').innerHTML = "Nombre de tentatives: " + index;
let numberToGuess;
let givenNumber;

function askPlayerOne() {
numberToGuess = Number(document.getElementById("playerOne").value);

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
    givenNumber= Number(document.getElementById("playerTwo").value);
    index++;
    document.getElementById('nombreTentatives').innerHTML = "Nombre de tentatives: " + index;
    if (givenNumber==numberToGuess) {
        document.getElementById('range').innerHTML = "Bravo! Vous avez gagné.";
    }
    else {
        if (givenNumber<numberToGuess) {
            if (givenNumber>rangeMinimal) {
                rangeMinimal=givenNumber;   
                console.log(rangeMinimal);
                document.getElementById('range').innerHTML = rangeMinimal + " < ? < " + rangeMaximal;
            }
            if(givenNumber<rangeMinimal) { 
                alert("Le nombre proposé n'est pas dans le range");
            }
            
         }

        if (givenNumber>numberToGuess) {
            if (givenNumber<rangeMaximal) {
                rangeMaximal=givenNumber;  
                console.log(rangeMaximal);
                document.getElementById('range').innerHTML = rangeMinimal + " < ? < " + rangeMaximal;     
            }
            if(givenNumber>rangeMaximal) {
                alert("Le nombre proposé n'est pas dans le range");
            }
        }
     }
}


