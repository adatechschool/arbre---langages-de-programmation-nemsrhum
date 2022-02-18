let givenNumber;

function askNumber() {
    givenNumber=prompt("Ecrire un nombre");
}


function didIWin(givenNumber) {
    if (givenNumber==22) {
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
    else { if (givenNumber<22) {
            alert("Plus grand");
            }
           if (givenNumber>22) {
            alert("Plus petit");
            }
    
        }
}

while (!didIWin(givenNumber)) {
gamePlay();
}