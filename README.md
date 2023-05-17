color on the background a mixture called darker coral. text is lighter Alice. Inspired by Dragon Ball colors as I was watching this as I was making it. 

BUGS
FIXED
The opening page - Couldn't figure out how to centre on a vertical basis. Help from the tutors at Code institute for reminding me about display:flex and its properties!

THe cards on easymode.html were shifting to the right slightly, realised as I had text-align: center; in the body, this was the issue. Removed and this fixed the issue. 


With the easy mode I started with 20 tiles - Seems a little unfair considering this page will be directed and aimed at Children. 
I brought it down the 16.

bug

TO ADD

Resetting the board when all complete then adding score to total.
Elements to 'shake when pair made'
elements to all shake together when all are complete. 
Alert to come up to say congratulations, do you want to play this again? 

Sarah @ code institute. 


Cards didn't increment or match up. 

"
function checkWin () {
    if(matchedCards === 6){
    gameOver();}
}

function gameOver () {
    if (checkWin === true) {
        alert("Congrats!");
        resetBoard();
        shuffle();
        score += 1;
        document.getElementsByClassName("total").innerHTML = score; 
    }
}
console.log(gameOver);
"

They were matching up on the console.log. but not didn't push the orther code


"(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
})();"
Brackets! 

After removing the brackets, I need to call the function when the game started. 

When gameOver was called. All of the functions were working. Apart from the cards we not flipping back over. 

"function gameOver () {
        alert("Congrats!");
        resetBoard();
        shuffle();
        unflipCards();
        score += 1;
        document.getElementById("total").innerHTML = score; 
        cards.forEach(card => card.classList.remove('flip'))
        console.log("game over was called")
}
"
Solved the flipping back over but when a new game starts. the cards don't turn over when selected. 


https://www.youtube.com/watch?v=AF6vGYIyV8M

