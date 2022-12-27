


function getRock(){
    var choice = "rock";
    console.log(choice);
    return choice;
    
}

function getPaper(){
    var choice = "paper";
    console.log(choice);
    return choice;
}

function getScissors(){
    var choice = "scissors";
    console.log(choice);
    return choice;
}




function getComputerChoice(){
    choices = ["rock", "paper", "scissors"];
    var computer = choices[Math.floor(Math.random() * 3)];
    console.log(computer);
    return computer;
}



function checkWinner(getPlayerChoice, getComputerChoice) {
    if (getPlayerChoice === getComputerChoice) {
        return "Its a Tie";
    } else if (
        (getPlayerChoice === "rock" && getComputerChoice === "scissors") ||
            (getPlayerChoice === "paper" && getComputerChoice === "rock") ||
            (getPlayerChoice === "scissors" && getComputerChoice === "paper")
        ){
            return "Player";
        }
        else {
            return "Computer";
        }
    
    }

    function playRound(getPlayerChoice, getComputerChoice) {
        var result = checkWinner(getPlayerChoice, getComputerChoice);
        if (result === "Player"){
            return "You won this round!"
        }
        else if (result === "Computer") {
            return "You lost this round!"
        }
        else {
            return "It was a Tie!"
        }
    }

    document.getElementById("rock").addEventListener("click", getRock);
    document.getElementById("paper").addEventListener("click", getPaper);
    document.getElementById("scissors").addEventListener("click", getScissors);
    document.getElementById("rock").addEventListener("click", getComputerChoice);
    document.getElementById("paper").addEventListener("click", getComputerChoice);
    document.getElementById("scissors").addEventListener("click", getComputerChoice);
    document.getElementById("rock").addEventListener("click", playRound);
    document.getElementById("paper").addEventListener("click", playRound);
    document.getElementById("scissors").addEventListener("click", playRound);

    console.log(playRound(getPlayerChoice, getComputerChoice))