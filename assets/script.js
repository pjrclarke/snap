const cards = document.querySelectorAll('.easymodecard');

    let userFlipped = false;
    let lock = false;
    let firstCard, secondCard;

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

    resetBoard();

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
    }, 800);
}

function resetBoard() {
    [userFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));