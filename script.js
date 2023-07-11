'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('span.score').textContent = 100;

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // When theres no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No guessing was made ⛔';
    displayMessage('No guessing was made ⛔');
  }
  // When guess is correct or player wins
  else if (guess === randomNumber) {
    // document.querySelector('.message').textContent =
    //   'You guessed the correct Number 🥳';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When guess is high
  // else if (guess > randomNumber) {
  //   if (score > 1) {
  //     // document.querySelector('.message').textContent = 'Too high 🔆';
  //     displayMessage('Too high 🔆');
  //     document.querySelector('.score').textContent = score--;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game 😝';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // when guess is low
  // else if (guess < randomNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low ↘️';
  //     document.querySelector('.score').textContent = score--;
  //   }
  // }

  // When guess is wrong
  else if (guess !== randomNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > randomNumber ? 'Too high 🔆' : 'Too Low ↘️';
      displayMessage(guess > randomNumber ? 'Too high 📈' : 'Too Low 📉');
      document.querySelector('.score').textContent = score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game 😝';
      displayMessage('You lost the game 😝');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else statement
  // else {
  //   document.querySelector('.message').textContent = 'You lost the game 😝';
  //   document.querySelector('.score').textContent = 0;
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
