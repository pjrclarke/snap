const cards = document.querySelectorAll('.easymodecard');

function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));