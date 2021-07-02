
//import { numCheck } from './utils.js';

const userGuess = document.getElementById('input');
const gBtn = document.getElementById('guess-btn');
const userScore = document.getElementById('score');


let guessesRemaining = 4;
let targetNum = Math.ceil(Math.random() * 2);

// function numCheck(){
   // let guessField = Number(userGuess.value);
//     if (Number(guessesRemaining === userGuess)) {
//         userScore.textContent = 'previous guesses:';
//     }
//     userScore.textContent += userGuess + '';

//     if (userGuess === targetNum) {
//         userScore.textContent = 'You are a Wizard!';
//         userScore.style.backgroundColor = 'teal';
//         userScore.style.color = 'white';
//         setGameOver();

//         if (guessesRemaining !== 0)
//         {
//             userScore.textContent = `Sorry, That Is Incorrect. You Have ${guessesRemaining} More Attempts`;
//             userScore.style.backgroundColor = 'salmon';
//             userScore.style.color = 'white';
//             userScore.style.border = 'solid white';
//             if (userGuess < targetNum) {
//                 userScore.textContent = `Your Guess Was Too Low, But You Have ${guessesRemaining} More Tries`;
//                 userScore.style.backgroundColor = 'salmon';
//                 userScore.style.color = 'white';
//             } if (userGuess > targetNum) {
//                 userScore.textContent = `Your Guess Was Too High, But You Have ${guessesRemaining} More Tries`;
//                 userScore.style.backgroundColor = 'salmon';
//                 userScore.style.color = 'white';
//             }
//         } if (guessesRemaining === 0) {
//             userScore.textContent = '!!!GAME OVER GROVER!!!';
//             setGameOver();
//         }
//     } 

//     guessesRemaining--;
//     userGuess.value = '';
//     userGuess.focus();


gBtn.addEventListener('click', () => {
    console.log(targetNum);
    // console.log(numCheck);
    if (userGuess === 0) {
        gBtn.disabled = true;
        return userScore.textContent = 'try again!';
    }
    if (Number(userGuess.value === targetNum)) {
        gBtn.disabled = true;
        return userScore.textContent = 'you win!';
    }
    else if (Number(userGuess.value > targetNum)) {
        guessesRemaining --;
        return userScore.textContent = 'the number is lower than your guess';
    }
    else if (Number(userGuess.value < targetNum)) {
        guessesRemaining --;
        return userScore.textContent = 'the number is higher than your guess';
    }
    
    // else if (userGuess)
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
    scr.style.backgroundColor = 'rgb(229, 231, 231)'; 
    scr.style.color = 'rgb(229, 231, 231)'; 
}


