// import functions and grab DOM elements
//import { numCheck } from './utils.js';
const targetNum = Math.floor(Math.random() * 10);
const userGuess = document.getElementById('input');
const gBtn = document.getElementById('guess-btn');
const scr = document.getElementById('score');
//const rBtn = document.getElementById('reset-btn');
let guessesRemaining = 4;
gBtn.addEventListener('click', () => {
    guessesRemaining --;
    // console.log(guessesRemaining);
    // console.log(targetNum);
    // console.log(userGuess);
   
    if (userGuess.value < targetNum) {
        return scr.textContent = `Your Guess Was Too Low, But You Have ${guessesRemaining} More Tries`;
    }
    if (userGuess.value > targetNum) {
        return scr.textContent = `Your Guess Was Too High, But You Have ${guessesRemaining} More Tries`;
    }
    else
        return scr.textContent = `You Are A Wizard!`;
});




// if (guessesRemaining.value < 1) {
//   return scr.textContent = 'GAME OVER';
// }


//rBtn.addEventListener('click', () => {
//});
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