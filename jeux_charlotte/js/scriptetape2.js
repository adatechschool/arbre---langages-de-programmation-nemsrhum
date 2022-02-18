let givenNumber;

function askNumber() {
    givenNumber=prompt("Ecrire un nombre");
}


function didIWin(givenNumber) {
    if (givenNumber<22) {
        alert("Plus grand");
    }
    if (givenNumber>22) {
       alert("Plus petit");
    }
    if (givenNumber==22) {
        alert("Bravo! Vous avez deviné le nombre");
    }
}


function gamePlay() {
    askNumber();
    didIWin(givenNumber);
}

gamePlay();