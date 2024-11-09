const options = ["rock", "paper", "scissors"];

function getHumanChoice() {
    let validatedInput = false;
    while (validatedInput === false) {
        const choice = prompt("Rock, Paper, Scissors");
        if (choice === null) {
            continue;
        }

        const choiceInLower = choice.toLowerCase();

        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

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
        return "It's a Tie!";
    } else if (result === "Player") {
        return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
        return `You Lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Welcome!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-----------");
        
        if (checkWinner(playerSelection, computerSelection) === "Player") {
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
            computerScore++;
        }
    }

    console.log("Game Over!");

    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("We have a Tie!");
    }
}

playGame();