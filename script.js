function getComputerChoice() {
    let result = Math.random();
    
    if (result >= 0 && result <= 1 / 3) {
        result = console.log("rock");
    } else if (result >= 1 / 3 && result <= 2 / 3) {
        result = console.log("paper");
    } else if (result >= 2 / 3 && result <= 1) {
        result = console.log("scissors");
    };

    return result;
}

function getHumanChoice() {
    let message = prompt("Choose the following: rock, paper, scissors", "rock");

    if (message === "rock") {
        console.log("rock");
    } else if (message === "paper") {
        console.log("paper");
    } else if (message === "scissors") {
        console.log("scissors");
    }
    
    return message;
}

getComputerChoice();
getHumanChoice();