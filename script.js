const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const restartButton = document.getElementById("restart")

rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorsButton.addEventListener("click", () => playRound("Scissors"));
restartButton.addEventListener("click", restartGame);

const roundResult = document.getElementById("round-result");
const scoreDisplay = document.getElementById("score");

let computerScore = 0;
let humanScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice;
    let num = getRandomInt(3);

    if (num == 0)
        computerChoice = "Rock";
    else if (num == 1)
        computerChoice = "Paper";
    else if (num == 2)
        computerChoice = "Scissors";

    return computerChoice;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let winner;

    if ( (humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock") ) {
        winner = "Computer";
        computerScore += 1;
        roundResult.textContent = winner + " won! Computer's " + computerChoice + " beats " + humanChoice;
    }
    else if ( (humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper") ) {
        winner = "You";
        humanScore += 1;
        roundResult.textContent = winner + " won! Your " + humanChoice + " beats " + computerChoice;
    }
    else if (humanChoice == computerChoice) {
        roundResult.textContent = "It's a tie!";
        winner = "Tie";
    }

    scoreDisplay.textContent = "You: " + humanScore + " Computer: " + computerScore;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            roundResult.textContent = "Congratulations! You won the game!";
        } else {
            roundResult.textContent = "Sorry, the computer won the game.";
        }

        // disbale buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        restartButton.style.display = "inline";
    }
}

function restartGame() {
    computerScore = 0; humanScore = 0;

    scoreDisplay.textContent = "You: " + humanScore + " Computer: " + computerScore;
    roundResult.textContent = "";
    
    // enable buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    restartButton.style.display = "none";
}
