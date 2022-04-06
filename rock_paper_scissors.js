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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

  if (computerSelection === 'Rock') {
    switch (playerSelection) {
      case 'Rock':
        return 'You draw!';
      case 'Paper':
        return 'You win! Paper beats rock';
      case 'Scissors':
        return 'You lose! Rock beats scissors';
    }
  }

  if (computerSelection === 'Paper') {
    switch (playerSelection) {
      case 'Rock':
        return 'You lose! Paper beats rock';
      case 'Paper':
        return 'You draw!';
      case 'Scissors':
        return 'You win! Scissors beat paper';
    }
  }

  if (computerSelection === 'Scissors') {
    switch (playerSelection) {
      case 'Rock':
        return 'You win! Rock beats scissors';
      case 'Paper':
        return 'You lose! Scissors beat paper';
      case 'Scissors':
        return 'You draw!';
    }
  }
}

function game() {
  let playerSelection = ''
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt('Rock, paper or scissors?');
    console.log(playRound(playerSelection, computerPlay()));
  }
}

game();