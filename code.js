


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

document.getElementById("rock").addEventListener("click", getRock);
document.getElementById("paper").addEventListener("click", getPaper);
document.getElementById("scissors").addEventListener("click", getScissors);


function getComputerChoice(){
    choices = ["rock", "paper", "scissors"];
    var computer = choices[Math.floor(Math.random() * 3)];
    console.log(computer);
    return computer;
}



function checkWinner() {
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

