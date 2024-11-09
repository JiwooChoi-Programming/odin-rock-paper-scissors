const options = ["rock", "paper", "scissors"];
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
    console.log("Welcome!");
    const playerSelection = humanChoice;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    
    if (checkWinner(playerSelection, computerSelection) === "Player") {
        playerScore++;
    } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
        computerScore++;
    }

    console.log("Game Over!");

    if (playerScore > computerScore) {
        console.log(`Human wins! Human: ${playerScore} Computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Computer wins! Human: ${playerScore} Computer: ${computerScore}`);
    } else {
        console.log(`We have a Tie! Human: ${playerScore} Computer: ${computerScore}`);
    }
}

function selectButton() {
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    rockButton.addEventListener("click", () => {
        playGame("rock");
    });

    paperButton.addEventListener("click", () => {
        playGame("paper");
    });

    scissorsButton.addEventListener("click", () => {
        playGame("scissors");
    })
}

selectButton();