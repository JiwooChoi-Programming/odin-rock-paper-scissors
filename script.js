const options = ["rock", "paper", "scissors"];

const buttonContainer = document.querySelector("#buttonContainer");
const buttonContent = document.querySelector("#buttonContent");

const resultElement = document.querySelector("#result");
const scoreElement = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(humanChoice, computerChoice) {
    const result = checkWinner(humanChoice, computerChoice);
    if (result === "Tie") {
        return `It's a Tie! Human: ${humanChoice} Computer: ${computerChoice}`;
    } else if (result === "Player") {
        return `You Win! Human: ${humanChoice} Computer: ${computerChoice}`;
    } else {
        return `You Lose! Human: ${humanChoice} Computer: ${computerChoice}`;
    }
}

function playGame(humanChoice) {
    const playerSelection = humanChoice;
    const computerSelection = getComputerChoice();
    resultElement.textContent = playRound(playerSelection, computerSelection);
    
    if (checkWinner(playerSelection, computerSelection) === "Player") {
        scoreElement.textContent = `Human: ${++playerScore} Computer: ${computerScore}`;
    } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
        scoreElement.textContent = `Human: ${playerScore} Computer: ${++computerScore}`;
    } else if (checkWinner(playerSelection, computerSelection) === "Tie") {
        scoreElement.textContent = `Human: ${playerScore} Computer: ${computerScore}`;
    }

    if (playerScore === 5) {
        scoreElement.textContent = `Human wins! Human: ${playerScore} Computer: ${computerScore}`;
        buttonContainer.removeChild(buttonContent);
    } else if (computerScore === 5) {
        scoreElement.textContent = `Computer wins! Human: ${playerScore} Computer: ${computerScore}`;
        buttonContainer.removeChild(buttonContent);
    } else if (playerScore === 4 && computerScore === 4) {
        scoreElement.textContent = `We have a Tie! Human: ${playerScore} Computer: ${computerScore}`;
        buttonContainer.removeChild(buttonContent);
    }
}

function selectButton() {
    buttonContent.addEventListener("click", (event) => {
        event = event.target;

        switch (event.id) {
            case "rock":
            playGame("rock");
            break;

            case "paper":
            playGame("paper");
            break;

            case "scissors":
            playGame("scissors");
            break;
        }
    });
}

selectButton();