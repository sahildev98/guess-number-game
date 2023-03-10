'use strict';

// query selector
// start guessing was written in message.
// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'Correct Number🥳';

// document.querySelector('.number').textContent = 16;
// document.querySelector('.score').textContent = 25;

// for input values you would use value property to access it. You can also use it to change values.
// console.log(document.querySelector('.guess').value);
// console.log((document.querySelector('.guess').value = 20));

// secret value is value that is being set as the correct answer.
// Math trunc rounds values to a whole number.
let secretValue = Math.trunc(Math.random() * 20 + 1);

// score value
let score = 20;
// highest score value
let highScore = 0;

// query selector statements
const selectorMessage = document.querySelector('.message');
const selectorScore = document.querySelector('.score');
const selectorNumber = document.querySelector('.number');

// any input into javascript is by default a string. Implementing parseInt or Number will make it into a number.
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  // if value field is empty the scenario will be outputted
  if (guessValue == '') {
    selectorMessage.textContent = '🔢 Please enter a number ';
  } else if (guessValue === secretValue) {
    selectorMessage.textContent = '✅ You got the correct answer';
    score++;
    selectorScore.textContent = score;
    selectorNumber.textContent = secretValue;
    document.body.style.backgroundColor = '#00ff00';
    selectorNumber.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guessValue !== secretValue) {
    if (score > 1) {
      selectorMessage.textContent =
        guessValue > secretValue ? 'Too high!' : 'Too Low';
      score--;
      console.log(score);
      selectorScore.textContent = score;
    } else {
      selectorMessage.textContent = '❌You lost the game!, START AGAIN!';
      selectorScore.textContent = 0;
      document.body.style.backgroundColor = '#ff0000';
    }
  }
});

/* Tenary operator in use to refactor the following code below. Line 48 shows this. */
//   // if the guess value is high, the below code will be outputted
// } else if (guessValue > secretValue) {
//   // score is 1 because the message seclector shows the message at score 1 when the score condition is set to 0.
//   // Score is set to 1 to allow the message to be executed at score 0
//   if (score > 1) {
//     selectorMessage.textContent = 'Too high!';
//     score--;
//     console.log(score);
//     document.querySelector('.score').textContent = score;
//   } else {
//     selectorMessage.textContent = '❌You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
//   // if the guess value is high the following will be outputted
// } else if (guessValue < secretValue) {
//   if (score > 1) {
//     selectorMessage.textContent = 'Too Low';
//     score--;
//     console.log(score);
//     document.querySelector('.score').textContent = score;
//   } else {
//     selectorMessage.textContent = '❌You lost the game!';
//     document.querySelector('.score').textContent = 0;
//     document.body.style.backgroundColor = '#ff0000';
//   }
// }
// });

// again btn listener
const resetNumField = document.querySelector('.guess');
document.querySelector('.again').addEventListener('click', function () {
  // reset guess, message and score
  score = 20;
  secretValue = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').innerHTML = 20;
  selectorMessage.textContent = 'Start Guessing...';
  resetNumField.value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
