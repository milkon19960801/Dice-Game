'use strict';

//Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Stating conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

//Rolling dice functionality
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  //1. Generate a rando number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-png\\dice-${dice}.png`;

  //3. check for rolled 1: if true switch to next player
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  //1. add currentScore to active players score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2. Chech if player's score is >= 100
  // finish the game.

  //switch to the next player
  switchPlayer();
});
