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

getComputerChoice();