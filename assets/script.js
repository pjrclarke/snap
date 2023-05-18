/* Code for index.html - Including pop up instructions */

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

/* Code for the game inspired by Marina Ferreira - https://marina-ferreira.github.io/tutorials/js/memory-game/ */


let cards = document.querySelectorAll('.easymodecard');

    let userFlipped = false;
    let lock = false;
    let firstCard, secondCard;
    let matchedCards = 0;
    let score = 0;
    shuffle();

/* The function for the cards to shuffle randomly */

function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
}

/* code to 'flip' the cards */

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

/*check to see if the cards match, if it is, play a sound. If you've won the game, go to function checkWin() */

function disableCards () {
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    matchedCards += 1;
    checkWin();
    cardMatch.play();
    resetBoard();
}

/* Check to win. If cards have matched 6 then go to gameOver function */

function checkWin () {
    if(matchedCards === 6){
        gameOver();}
}

/* If the game has concluded, open the pop up, add 1 score onto the score board, remove the class of flip so that all cards flip back around,
start a brand new game, play a congratulatory sound effect. */ 

function gameOver () {
        score += 1;
        document.getElementById("total").innerHTML = score; 
        cards.forEach(card => card.classList.remove('flip'));
        newGame();
        gameOverSound.play();
        openGameOver();
}
/* This function resets the game after a gameOver() has occured */
function newGame () {
    matchedCards = 0;
    shuffle ();
    cards.forEach(card => card.addEventListener('click', flipCard));
}

/* This function actively checks if the cards match, if they do then activate disableCards() if not unflipcards () */

function checkForMatch() {
    let match = firstCard.dataset.framework === secondCard.dataset.framework 
        match ? disableCards() : unflipCards();
        return;
}

/* The function to flip the cards back over if they are not a match, how quickly they rotate back around and a sound effect for a false match */

function unflipCards() {
    lockboard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 500);
    notMatch.play();
}

/* a simple function to reset the code */

function resetBoard() {
    [userFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

/* The event listener to flip the cards */

cards.forEach(card => card.addEventListener('click', flipCard));

/* The sound effects for events - all sounds from https://freesound.org/ */

let cardMatch = new Audio("assets/sounds/correctSound.mp3");
let gameOverSound = new Audio("assets/sounds/gameoversound.wav");
let notMatch = new Audio("assets/sounds/wrong.mp3")
