
const userGuess = document.getElementById('input');
const gBtn = document.getElementById('guess-btn');
const userScore = document.getElementById('score');

let targetNum = Math.ceil(Math.random() * 2);
let guessesRemaining = 3;

gBtn.addEventListener('click', () => {
    if (guessesRemaining === 0) {
        gBtn.disabled = true;
        return userScore.textContent = 'try again!';
    }
    if (Number(userGuess.value) === targetNum) {
        gBtn.disabled = true;
        return userScore.textContent = 'you win!';
    }
    else if (Number(userGuess.value) > targetNum) {
        guessesRemaining --;
        return userScore.textContent = 'the number is lower than your guess';
    }
    else (Number(userGuess.value) < targetNum); 
    guessesRemaining --;
    return userScore.textContent = 'the number is higher than your guess';
    
});



