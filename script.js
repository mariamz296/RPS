console.log("Let's play Rock, Paper, Scissors!")


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice;
    let num = getRandomInt(3);
    /* console.log(num); */

    if (num == 0)
        computerChoice = "Rock";
    else if (num == 1)
        computerChoice = "Paper";
    else if (num == 2)
        computerChoice = "Scissors";
    console.log("Computer Choice: " + computerChoice);

    return computerChoice;
}

function getHumanChoice() {
    let str = prompt("Type Rock, Paper, or Scissors");
    let humanChoice = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    console.log("Your choice: " + humanChoice);

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let winner, loser;

    if ( (humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock") ) {
        winner = "Computer";
        console.log(winner + " won! Computer's " + computerChoice + " beats " + humanChoice);
    }
    else if ( (humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper") ) {
        winner = "You";
        console.log(winner + " won! Your " + humanChoice + " beats " + computerChoice);
    }
    else if (humanChoice == computerChoice) {
        console.log("It's a tie!");
        winner = "Tie";
    }

    return winner;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let winner;

    let i;
    for (i=1; i<=5; i++) {
        console.log("Round " + i);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        winner = playRound(humanSelection, computerSelection);
        if (winner === "You") {
            humanScore += 1;
        }
        else if (winner === "Computer") {
            computerScore += 1;
        }
    }

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}


playGame();