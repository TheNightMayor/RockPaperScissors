function computerPlay() {
  let compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}
let losses = 0;
let wins = 0;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let score = document.getElementById("score");
let game = document.getElementById("game");

function updateScore() {
  score.innerHTML =
    wins === 5
      ? `You have won this match!`
      : losses === 5
      ? `You have lost this match!`
      : `Let's go again!`;
}

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

function playRound(e) {
  let playerSelection = e.target.id;
  console.log(playerSelection);
  let computerSelection = computerPlay();
  console.log(computerSelection);
  (playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock")
    ? (game.innerHTML = `${computerSelection} beats ${playerSelection}! You've lost this round! wins: ${wins}, losses: ${++losses}`)
    : (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ? (game.innerHTML = `${playerSelection} beats ${computerSelection}! You've won this round! wins: ${++wins}, losses: ${losses}`)
    : playerSelection === computerSelection
    ? (game.innerHTML = `it's a tie! wins: ${wins}, losses: ${losses}`)
    : (game.innerHTML = `Something went wrong! Try Again`);
  updateScore();
}

// for (; (wins < 3 && losses < 3);) {
//     console.log(playRound());
//     console.log(matchResults());
//     }
