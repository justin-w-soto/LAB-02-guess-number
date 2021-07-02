
//import { numCheck } from './utils.js';
const targetNum = Math.floor(Math.random() * 10) + 1;
const guessField = document.getElementsByClassName('guess-field');
const userGuess = document.getElementById('input');
const gBtn = document.getElementById('guess-btn');
const rBtn = document.getElementById('reset-btn');
const scr = document.getElementById('score');
let guessesRemaining = 4;
function numCheck(){
   // let guessField = Number(userGuess.value);
    if (guessesRemaining === 3) {
        scr.textContent = 'previous guesses:';
    }
    scr.textContent += userGuess + '';

    if (userGuess === targetNum) {
        scr.textContent = 'You are a Wizard!';
        scr.style.backgroundColor = 'teal';
        scr.style.color = 'white';
        setGameOver();
    } if (guessesRemaining === 0) {
        scr.textContent = '!!!GAME OVER GROVER!!!';
        setGameOver();
    } else {
        scr.textContent = `Sorry, That Is Incorrect. You Have ${guessesRemaining} More Attempts`;
        scr.style.backgroundColor = 'salmon';
        scr.style.color = 'white';
        scr.style.border = 'solid white';
        if (userGuess < targetNum) {
            scr.textContent = `Your Guess Was Too Low, But You Have ${guessesRemaining} More Tries`;
            scr.style.backgroundColor = 'salmon';
            scr.style.color = 'white';
        } if (userGuess > targetNum) {
            scr.textContent = `Your Guess Was Too High, But You Have ${guessesRemaining} More Tries`;
            scr.style.backgroundColor = 'salmon';
            scr.style.color = 'white';
        }
    } 

    // some of the above code is broken. I wasn't able to get the too high/low 
    // to work if the reset button was working and vice versa. 

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
    guessesRemaining = 3;

    rBtn.parentNode.removeChild(rBtn);

    guessField.disabled = false;
    gBtn.disabled = false;
    guessField.value = '';
    scr.style.backgroundColor = 'rgb(229, 231, 231)'; 
    scr.style.color = 'rgb(229, 231, 231)'; 
}


