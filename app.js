"use strict";

let score1 = document.getElementById("score-0");
let score2 = document.getElementById("score-1");

let dice = document.querySelector(".dice")

let currrent0 = document.getElementById("current-0");
let currrent1 = document.getElementById("current-1");

let player1 = document.querySelector('.player')
let player2 = document.querySelector('.player')

let btnHold = document.querySelector(".hold");



// btns

let rollDice = document.querySelector(".rollDice");
let currentScore = 0;
let activePlayer = 0;


score1.textContent = '0'
score2.textContent = '0'
dice.classList.add("hidden")
// roll a dice
rollDice.addEventListener("click", () => {
    dice.classList.remove('hidden')

    //1. Making random Number

    const diceNumber = Math.floor(Math.random() * 6) + 1;
    // console.log(diceNumber);

    //2. Display Random image
    dice.src = `./images/${diceNumber}.png`
    // console.log(dice);

    //3. checked the roll 1
    if (diceNumber != 1) {
        //display the score
        currentScore += diceNumber;
        // currrent0.textContent = currentScore
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
        //switch the player
        currrent0.textContent = currentScore;
        document.getElementById(`current-${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player1.classList.toggle("player")
        player2.classList.toggle("player")

    }

})

// Hold Button Function 
let scores = [0, 0];

btnHold.addEventListener('click', () => {
    console.log(currentScore);

    scores[activePlayer] += currentScore;
    console.log(scores);
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
    currentScore = 0;
    currrent0.innerHTML = 0;
    player1.classList.toggle("player");
    // player2.classList.toggle("player");
    if (scores[activePlayer] >= 20) {
        document.querySelector(`.player_${activePlayer}`).classList.add("background");
        activePlayer = activePlayer === 0 ? 1 : 0;
        currrent0.innerHTML = 0;
        
        setTimeout(()=>{
            alert("you win")
        },1500)
    }
    else {
        activePlayer = activePlayer === 0 ? 1 : 0;
        currrent1.innerHTML = 0
    }
})

document.querySelector('.newGame').addEventListener('click', (e) => {
    e.preventDefault()
    location.reload();
})

