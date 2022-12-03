let playerScore = 0;
let computerScore = 0;
const options = ['rock','paper','scissor'];

function game() {
  console.log("Welcome to the game!");
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Choose Rock, Paper, or Scissor").toLowerCase();
    if (options.includes(playerSelection)) {
      console.log(`Your choice: ${playerSelection} and Computer choice: ${computerSelection}`);
      console.log(playRound(playerSelection, computerSelection)); 
    }
    else {
      alert("Invalid input!");
    }   
  }
  console.log(`The overall score is: ${playerScore}:${computerScore}`)
  if (playerScore > computerScore) {
    console.log("You won the game!");
  }
  else if (computerScore > playerScore) {
    console.log("You lost the game.");
  }
  else {
    console.log("It's a tie!");
  }
}

function computerPlay() {
  return options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  }
  else if (playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "scissor" ||
    playerSelection== "scissor" && computerSelection == "rock"
    ) {
    computerScore++;
    return "You lose this round!";
  }
  else {
    playerScore++;
    return "You win this round!";
  }
}

game();