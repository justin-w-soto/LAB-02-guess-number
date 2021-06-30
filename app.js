// import functions and grab DOM elements

//import {} from './utils.js';

//  STATE for guess-a-number
// const userGuess --> get this from the input field
// const targetNumber --> get this using Math module
// const guessesRemaining = 4

const userGuess = document.getElementById('input');
const targetNum = Math.floor(Math.random()*10);
const guessesRemaining = 4;

const outPut = document.getElementById('output');
const gBtn = document.getElementById('guess-btn');
const rBtn = document.getElementById('reset-btn');

gBtn.addEventListener('click', () => {

});

rBtn.addEventListener('click', () => {

});

//   get the userGuess from the input -- convert it to a number
//   check the userGuess against the targetNumber
//   if userGuess === targetNumber --> 
//       END THE GAME
//       display winning message
//   if userGuess !== targetNumber --> 
//       display feedback with over or under
//       decrement remaining guesses
//          if no guesses remaining
//             END THE GAME
//             display losing message
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
