console.log("yo");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(choice);
}

function checkWinner(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return "Tie";
  } else if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper")
  ) {
    return "User";
  } else{
    return "Computer";
  }
}

function playRound(userChoice, computerChoice) {
  const result = checkWinner(userChoice, computerChoice);

  if (result == "Tie") {
    return "Its a tie";
  } else if (result == "User") {
    return `You won ${userChoice} beats ${computerChoice}`;
  } else return `You lost ${computerChoice} beats ${userChoice}`;
}

const userChoice = "rock";
const computerChoice = getComputerChoice();
console.log(playRound(userChoice, computerChoice));
