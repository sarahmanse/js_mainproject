let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const computerOptions = ['Rock','Paper','Scissor'];
  const choiceNumber = Math.floor(Math.random()*3);
  const computerChoice = computerOptions[choiceNumber];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();

  if (playerChoice == computerChoice) {
    return "It's a tie!";
  }
  else if (playerChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  }
  else if (playerChoice == "rock" && computerChoice == "scissor") {
    playerScore++;
    return "You Win! Rock beats Scissor";
  }
  else if (playerChoice == "paper" && computerChoice == "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  }
  else if (playerChoice == "paper" && computerChoice == "scissor") {
    computerScore++;
    return "You Lose! Scissor beats Paper";
  }
  else if (playerChoice == "scissor" && computerChoice == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissor";
  }
  else if (playerChoice == "scissor" && computerChoice == "paper") {
    playerScore++;
    return "You Win! Scissor beats Paper";
  }
  else {
    return "Invalid input.";
  }
}

function game() {
  console.log("Welcome to the game!");
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Choose Rock, Paper, or Scissor");
    console.log(`Your choice: ${playerSelection} and Computer choice: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    //console.log("Your score is: " + playerScore);
    //console.log("Computer score is: " + computerScore);
  }
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

game();