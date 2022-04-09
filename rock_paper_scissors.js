function computerPlay() {
  let randomValue = Math.random()*100;
  if (randomValue <= 33) {
    return 'Rock';
  } else if (randomValue <= 66) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

let userWins = 0;
let computerWins = 0;
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

  if (computerSelection === 'Rock') {
    switch (playerSelection) {
      case 'Rock':
        return 'You draw! Both chose rock';
      case 'Paper':
        userWins++
        return 'You win! Paper beats rock';
      case 'Scissors':
        computerWins++
        return 'You lose! Rock beats scissors';
    }
  }

  if (computerSelection === 'Paper') {
    switch (playerSelection) {
      case 'Rock':
        computerWins++
        return 'You lose! Paper beats rock';
      case 'Paper':
        return 'You draw! Both chose paper';
      case 'Scissors':
        userWins++
        return 'You win! Scissors beat paper';
    }
  }

  if (computerSelection === 'Scissors') {
    switch (playerSelection) {
      case 'Rock':
        userWins++
        return 'You win! Rock beats scissors';
      case 'Paper':
        computerWins++
        return 'You lose! Scissors beat paper';
      case 'Scissors':
        return 'You draw! Both chose scissors';
    }
  }
}

// DOM nodes in order of calling
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const userScore = document.querySelector('#userscore');
const computerScore = document.querySelector('#computerscore');
const results = document.querySelector('.results');
const scores = document.querySelector('.scores');

// Create restart button
const restartDiv = document.createElement('div');
const restartButton = document.createElement('button');
restartButton.textContent = 'Restart';
restartButton.classList.add('blue');
restartButton.setAttribute('onClick', 'window.location.reload();'); // Refresh page
restartDiv.appendChild(restartButton);

// Allows to stop execution of function for a few seconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Event listener for each button
let winner;
buttons.forEach(button => {
  button.addEventListener('click', async () => { // async keyword before function needed for sleep function to work

    // Stop after 5 wins
    if ((userWins < 5) && (computerWins < 5)) {
      result.textContent = playRound(button.textContent, computerPlay());
      userScore.textContent = userWins;
      computerScore.textContent = computerWins;

    // Declare winner after last round
      if ((userWins == 5) || (computerWins == 5)) {
        await sleep(2000); // Wait 2 seconds before declaring winner
        if (userWins > computerWins) {
          winner = 'User';
        } else {
          winner = 'Computer';
        }
        result.textContent = `Game over. ${winner} wins!`;
        results.insertBefore(restartDiv, scores)
      }
    }
  });
});

