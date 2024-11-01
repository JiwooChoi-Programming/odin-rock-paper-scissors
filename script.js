function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice = '';
    
    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        computerChoice = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        computerChoice = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        computerChoice = "scissors";
    }

    console.log(`Computer: ${computerChoice}`);

    return computerChoice;
}

function getHumanChoice() {
    let message = prompt("Choose the following: rock, paper, scissors", "rock").toLowerCase();
    let humanChoice = '';

    if (message === "rock") {
        humanChoice = "rock";
    } else if (message === "paper") {
        humanChoice = "paper";
    } else if (message === "scissors") {
        humanChoice = "scissors";
    }

    console.log(`Human: ${humanChoice}`);

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        console.log(
            `You lose! Human ${humanChoice} Computer: ${computerChoice}`
        );
        console.log(`Computer score: ${++computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "rock" && computerChoice === "scissors"
    ) {
        console.log(
            `You win! Human: ${humanChoice} Computer: ${computerChoice}`
        );
        console.log(`Human score: ${++humanScore}`);
    } else if (humanChoice === computerChoice) {
        console.log(`Draw! Human: ${humanChoice} Computer: ${computerChoice}`);
    }
}

function playGame() {
    console.log("Human");
    console.log("Computer");

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log(
            `
            Human: ${humanScore} Computer: ${computerScore}
            Human wins!
            `
        )
    } else if (humanScore === computerScore) {
        console.log(
            `
            Human: ${humanScore} Computer: ${computerScore}
            Draw!
            `
        )
    }else {
        console.log(
            `
            Human: ${humanScore} Computer: ${computerScore}
            Computer wins!
            `
        )
    }
}

playGame();