function computerPlay() {
    let compChoice = ['rock','paper','scissors']
       return compChoice[Math.floor(Math.random() * compChoice.length)]
}

function playerPlay() {
    let playerInput = prompt("rock, paper, or scissors? Best three out of five wins!");
    playerInput = playerInput.toLowerCase();
    return playerInput;
}

let losses = 0;
let wins = 0;

function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay(); 
    return  ((playerSelection === 'rock' && computerSelection === 'paper' ) ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) 
        ? `${computerSelection} beats ${playerSelection}! You've lost this round! wins: ${wins}, losses: ${++losses}`
        :((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) 
        ? `${playerSelection} beats ${computerSelection}! You've won this round! wins: ${++wins}, losses: ${losses}`
        : (playerSelection === computerSelection)
        ? `it's a tie! wins: ${wins}, losses: ${losses}`
        : `Something went wrong! Try Again` 
}

function matchResults() {
    return (wins === 3) 
    ? `You have won this match!` 
    : (losses === 3) 
    ? `You have lost this match!`
    : `Let's go again!`;
}

for (; (wins < 3 && losses < 3);) {
    console.log(playRound());
    console.log(matchResults());
    }