const choices = ["rock", "paper", "scissors"];
const p = document.createElement("p");
const h2 = document.createElement("h2");
var playerScore = 0;
var compScore = 0;

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function checkWinner(userChoice, computerChoice) {
  p.innerHTML = "";
  if (userChoice == computerChoice) {
    return "Tie";
  } else if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper")
  ) {
    playerScore += 1;
    return "User";
  } else {
    compScore += 1;
    return "Computer";
  }
}

function playRound(userChoice, computerChoice) {
  const result = checkWinner(userChoice, computerChoice);
  const results = document.querySelector(".results");

  results.appendChild(p);
  var msg = "";
  if (result == "Tie") {
    msg = "Its a tie";
  } else if (result == "User") {
    msg = `You won ${userChoice} beats ${computerChoice}`;
  } else msg = `You lost ${computerChoice} beats ${userChoice}`;
  p.innerText = msg;
  const currentResults = document.querySelector(".current-score");
  currentResults.appendChild(h2);
  h2.innerText = `Player Score is ${playerScore} and Computer Score is ${compScore}`;
}

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const playerChoice = "rock";
  playRound(playerChoice, computerChoice);
});

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const playerChoice = "paper";
  playRound(playerChoice, computerChoice);
});

const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const playerChoice = "scissors";
  playRound(playerChoice, computerChoice);
});
