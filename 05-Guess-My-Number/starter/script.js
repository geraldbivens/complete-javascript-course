'use strict';

// 70. Project #1: Guess My Number!
// console.log(document.querySelector('.message').textContent);

// 71. What's the DOM and DOM Manipulation
// Note: See the screenshots of the slides from the lesson
// "We can say that the DOM is a connection point between HTML documents and JavaScript code."

// 72. Selecting and Manipulating Elements
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.label-score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// 73. Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   Logic for the first scenario, which assumes that there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }
});

// Refactor of the above code
// const checkButton = document.querySelector('.check');
// const guess = document.querySelector('.guess');
// const message = document.querySelector('.message');

// checkButton.addEventListener('click', function () {
//   if (!guess) {
//     message.textContent = '⛔️ No number!';
//   } else {
//     console.log(guess.value);
//   }
// });

// Copied from Guess My Number app
const background = document.querySelector('body');
const playAgainButton = document.querySelector('.play-again');
const secretNumber = document.querySelector('.secret-number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const currentScore = document.querySelector('.score');
const currentHighScore = document.querySelector('.high-score');

let secretNumberValue = Math.trunc(Math.random() * 20) + 1;
// secretNumber.textContent = secretNumberValue;
let score = 20;
let highscore = 0;

checkButton.addEventListener('click', function () {
  const guessValue = Number(guessInput.value);
  console.log(guessValue, typeof guessValue);

  if (!guessValue) {
    message.textContent = 'Please guess a number between 1-20';
  } else if (guessValue === secretNumberValue) {
    message.textContent = 'CONGRATULATIONS, YOU WIN!';
    background.style.backgroundColor = '#60b347';
    secretNumber.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      currentHighScore.textContent = highscore;
    }
  } else if (guessValue > secretNumberValue) {
    if (score > 1) {
      message.textContent = 'Too high!';
      score--;
      currentScore.textContent = score;
    } else {
      message.textContent = 'Sorry, you lose!';
      currentScore.textContent = 0;
    }
  } else if (guessValue < secretNumberValue) {
    if (score > 1) {
      message.textContent = 'Too low!';
      score--;
      currentScore.textContent = score;
    } else {
      message.textContent = 'Sorry, you lose!';
      currentScore.textContent = 0;
    }
  }
});

// checkButton.addEventListener('click', function () {
//   const guessValue = Number(guessInput.value);
//   console.log(guessValue, typeof guessValue);

//   if (!guessValue) {
//     message.textContent = 'Please guess a number between 1-20';
//   } else if (guessValue === secretNumberValue) {
//     message.textContent = 'CONGRATULATIONS, YOU WIN!';
//     background.style.backgroundColor = '#60b347';
//     secretNumber.style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       currentHighScore.textContent = highscore;
//     }
//   } else if (guessValue !== secretNumberValue) {
//     if (score > 1) {
//       message.textContent =
//         guessValue > secretNumberValue ? 'Too high!' : 'Too low!';
//       score--;
//       currentScore.textContent = score;
//     } else {
//       message.textContent = 'Sorry, you lose!';
//       currentScore.textContent = 0;
//     }
//   }
// });

playAgainButton.addEventListener('click', function () {
  secretNumber.textContent = '?';
  secretNumberValue = Math.trunc(Math.random() * 20) + 1;
  guessInput.value = '';
  message.textContent = 'Start guessing...';
  score = 20;
  currentScore.textContent = score;
  background.style.backgroundColor = '#222';
  secretNumber.style.width = '15rem';
});

// This resets the high score, which is not good
// playAgainButton.addEventListener('click', function () {
//   window.location.reload();
// });
