
let numberToGuess;
let givenNumber;

function askplayerOne() {
    numberToGuess=prompt("Joueur 1: Saisir un nombre à deviner entre 0 et 50");
    while (numberToGuess<0 || numberToGuess>50) {
    numberToGuess=prompt("Joueur 1: Saisir un nombre à deviner entre 0 et 50");
    }

}

function askNumber() {
    givenNumber=prompt("Joueur 2: Saisir un nombre");
}


function didIWin(givenNumber) {
    if (givenNumber==numberToGuess) {
        return true;
    }
    else {
        return false;
    }
}


function gamePlay() {
    askNumber();
    didIWin(givenNumber);
    if (didIWin(givenNumber)) {
        alert("Bravo! Vous avez deviné le nombre");
    }
    else { if (givenNumber<numberToGuess) {
            alert("Plus grand");
            }
           if (givenNumber>numberToGuess) {
            alert("Plus petit");
            }
    
        }
}

askplayerOne();
while (!didIWin(givenNumber)) {
gamePlay();
}
