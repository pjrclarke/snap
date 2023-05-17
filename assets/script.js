let instructions = document.getElementById("instructions");

function openInstructions() {
    instructions.classList.add("open-instructions");
}
function closeInstructions(){
    instructions.classList.remove("open-instructions");
}

let congratulations = document.getElementById("gameOverPopup");

function openGameOver () {
    congratulations.classList.add("open-gameoverpopup");
    
}
function closeGameOver () {
    congratulations.classList.remove("open-gameoverpopup");
    
}



let cards = document.querySelectorAll('.easymodecard');

    let userFlipped = false;
    let lock = false;
    let firstCard, secondCard;
    let matchedCards = 0;
    let score = 0;
    shuffle();

function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
}

function flipCard() {
    if(lock) return;
    if (this === firstCard) return;


    this.classList.add('flip');

    if(!userFlipped) {
        userFlipped = true;
        firstCard=this;
        return;
    }
    secondCard = this;

    checkForMatch();
}

function disableCards () {
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    matchedCards += 1;
    console.log(matchedCards);
    checkWin();
    resetBoard();
}

function checkWin () {
    if(matchedCards === 6){
        console.log("game Over!")
        gameOver();}
}

function gameOver () {
        score += 1;
        document.getElementById("total").innerHTML = score; 
        cards.forEach(card => card.classList.remove('flip'));
        newGame();
        console.log("game over was called");
        openGameOver();
}



function newGame () {
    matchedCards = 0;
    shuffle ();
    cards.forEach(card => card.addEventListener('click', flipCard));
}

function checkForMatch() {
    let match = firstCard.dataset.framework === secondCard.dataset.framework 
        match ? disableCards() : unflipCards();
        return;
}

function unflipCards() {
    lockboard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 500);
}

function resetBoard() {
    [userFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));