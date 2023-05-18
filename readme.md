# `Snap!` #
`Snap!` is a fun filled, memory game. Players select two cards, if they match, it's a `Snap!` If not, the cards turn back around and you try again. They keep going until they have all 6 pairs. It's a good game for passing time, for having a bit of silliness and enjoying a user interface that is easy on the eyes and easy to use. 

Get comfortable, be silly and <a href = https://pjrclarke.github.io/snap/index.html>click here to play `Snap!`</a>.

![responsive mockup](readmefiles/responsive.png)

# Contents
* [**User Experience**](<#user-experience>)
    * [User Stories](<#user-stories>)
* [**Wireframes**](<#wireframes>)
* [**Site Structure**](#site-structure)
* [**Design Choices**](#design-choices)
    * [Typograghy](#typograghy)
    * [Colour Choices](#colour-choices)
* [**Features**](<#features>)
    * [Home Page](<#home-page>)
    * [Game](<#game>)
    * [Future Features](<#future-features>)
    * [Technologies Used](#technologies-used)
* [**Testing**](<#testing>)

# User Experience #

## User Experience ##

- As a user, I want to play a game that works. 
- As a user, I want the game `Snap!` to feel familiar.
- As a user, the game needs to be fun, enjoyable and memorable. 
- As a user, I want to be able to navigate the site with ease.
- As a user, I want to track how many times I win.

# Wireframes #

The Wireframes for `Snap!` were made on [Balsamiq](https://www.balsamiq.cloud).
The below wireframes are a good representation of change for the better. I had an initial idea to go down a portrait / landscape root. Maybe something for the future but from the wireframing, the finalised design isn't too far from the intital drawings. 

![Wireframes](readmefiles/wireframes_snap.png)

You can also see the quantity of cards has changed and there is a lot more consistency within the game itself due to this.

[Back to top](<#content>)
<hr>

# Site Structure #

`Snap!` has two simple pages. [Home](index.html), which gives an option to play and to read instructions and [Game](game.html) to play the game.

# Design Choices #

## Typograghy ##

When thinking about `Snap!` and how much I wanted it to be a fun experience for the user. The font needs to be something fun, rounded and partly nonsensical. The font [Luckiest Guy](https://fonts.google.com/specimen/Luckiest+Guy?query=luckiest+guy) in regular 400 was a perfect choice and one I found straight away at the start of the project. The mix of uppercase and lowercase letters and the slightly off line effect made this a sure choice for this game. 

![Font](readmefiles/font.png)

[Back to top](<#content>)
<hr>

## Colour Choices ##

The inspiration behind the colour choices for this game, came from the japanese animation 'Dragon Ball'. The orange and blue combination gave off a really fun and colourful design and mixed well on the screen. The orange is called 'Darker Coral' where as the blue is called 'Lighter Alice'. I have text shadowing and border lines using 'Black Olive'.

![Colour Choices](readmefiles/colorchoices.png)

[Back to top](<#content>)
<hr>

# Features #

## Home Page ##

To start we have the [Favicon](https://favicon.io/favicon-generator/) which replicates the font and colouring of the website and upholds that consistency across the site. 

![Favicon](readmefiles/favicon.png)

You're welcomed by a bright and fun page. Showing the buttons Play and Instructions gives the user clear indication what to do next. 

![Home](readmefiles/homepage.png)

Selecting play will take you straight to the [Game](game.html) action whereas clicking 'Instructions' will open a pop-up giving directions on how the game works and includes a small warning about the sound effects. 

![Instructions](readmefiles/instructions.png)

[Back to top](<#content>)
<hr>

## Game ## 

The Game page welcomes the user with fun filled mystery. 12 squares (cards) are offered out with the score shown at the bottom. The colours are mirrored by the colours already chosen to remain consistent with the site dynamic. 

![Game](readmefiles/gameone.png)

When selecting these cards, the user is offered a few things to immerse them. Firstly, we have a smooth flipping of the cards, colourful and fun numbers on different coloured backgrounds and fun little sound effects which are different dependant on whether you select the right match or wrong match. 

![During the Game](readmefiles/gametwo.png)

When the game is over a pop-up shows up congratulating you for completing the board. The word 'Congratulations' shakes more than my washing machine trying  to escape its cupboard, a sound effect of a tremendous fanfare, an option to play again or leave and lose the progress of the score which will increase the more you play the game. 

![Game Over](readmefiles/gameover.png)

[Back to top](<#content>)
<hr>

## Future Features ## 

- Creating a timer to check how fast a user takes to complete the board.
- Incorporating a leaderboard so the user can see where they stack with the world. 
- A higher difficulty with more cards and harder to spot differences. 
- A game of chance. When you get a match wrong, the board shuffles again. I didn't incorporate this at this point. I feel it's a little too sitting in a swivel chair and laughing evily. 
- custom artwork. 

[Back to top](<#content>)
<hr>

# Technologies used #

* [HTML5](https://en.wikipedia.org/wiki/HTML5) - Provides the content for the website.
* [CSS](https://www.w3schools.com/css/css_intro.asp) - Provides the styling.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Provides the scripting for the website. 
* [Balsamiq](https://balsamiq.cloud/) - Used to create the wireframes. 
* [CodeAnywhere](https://codeanywhere.com/) - Used to host and edit all code and the website. 
* [Gitpod](https://www.gitpod.io/#get-started) - Used to deploy the website

[Back to top](<#content>)
<hr>

# Testing #





BUGS
FIXED
The opening page - Couldn't figure out how to centre on a vertical basis. Help from the tutors at Code institute for reminding me about display:flex and its properties!

THe cards on easymode.html were shifting to the right slightly, realised as I had text-align: center; in the body, this was the issue. Removed and this fixed the issue. 


With the easy mode I started with 20 tiles - Seems a little unfair considering this page will be directed and aimed at Children. 
I brought it down the 16.

bug

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

match pair sound https://freesound.org/people/Gronkjaer/sounds/654321/
game ove rsound https://freesound.org/people/FunWithSound/sounds/456966/

card backing https://pixabay.com/vectors/question-mark-info-help-orange-295272/

favicon - https://favicon.io/favicon-generator/ 