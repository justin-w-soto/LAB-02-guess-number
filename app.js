
//import { numCheck } from './utils.js';
const targetNum = Math.floor(Math.random() * 10) + 1;
const guessField = document.getElementsByClassName('guess-field');
const userGuess = document.getElementById('input');
const gBtn = document.getElementById('guess-btn');
const rBtn = document.getElementById('reset-btn');
const scr = document.getElementById('score');
let guessesRemaining = 4;
function numCheck(){
    let guessField = Number(userGuess.value);
    if (guessesRemaining === 4) {
        scr.textContent = 'previous guesses:';
    }
    scr.textContent += userGuess + '';

    if (userGuess === targetNum) {
        scr.textContent = 'You are a Wizard!';
        scr.style.backgroundColor = 'teal';
        scr.style.color = 'white';
        setGameOver();
    } else if (guessesRemaining === 0) {
        scr.textContent = '!!!GAME OVER GROVER!!!';
        setGameOver();
    } else {
        scr.textContent = 'Sorry, that is incorrect';
        scr.style.backgroundColor = 'salmon';
        scr.style.color = 'white';
        if (userGuess < targetNum) {
            scr.textContent = 'You guessed too low!';
        } else if (userGuess > targetNum) {
            scr.textContent = 'That was too high';
        }
    } 

    guessesRemaining--;
    userGuess.value = '';
    userGuess.focus();
}

gBtn.addEventListener('click', numCheck, () => {
    //guessesRemaining --;
    // console.log(guessesRemaining);
    // console.log(targetNum);
    // console.log(userGuess);
   
    // if (userGuess.value < targetNum) {
    //     return scr.textContent = `Your Guess Was Too Low, But You Have ${guessesRemaining} More Tries`;
    // }
    // if (userGuess.value > targetNum) {
    //     return scr.textContent = `Your Guess Was Too High, But You Have ${guessesRemaining} More Tries`;
    // }
    // if (userGuess.value === targetNum) {
    //     return scr.textContent = `You Are A Wizard!`;
    // }
    
});

function setGameOver() {
    guessField.disabled = true;
    gBtn.disabled = true;
    rBtn.textContent = 'Start new game';
    document.body.append(rBtn);
    rBtn.addEventListener('click', resetGame);
}

function resetGame() {
    guessesRemaining = 4;

    rBtn.parentNode.removeChild(rBtn);

    guessField.disabled = false;
    gBtn.disabled = false;
    guessField.value = '';
    scr.style.backgroundColor = 'white'; 
}


