const choice = ["Rock" , "Paper" , "Scissors"];
const player = prompt("Choose between Rock, Paper or Scissors");
const computerSelection = getComputerChoice;
const playerSelection = player;

function getComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound (playerSelection, computerSelection){

    if (playerSelection === computerSelection) {
        return "Its a tie!";
    } else if (player === "Scissors" && getComputerChoice === "Paper") {
        return "Você ganhou!";
    } else if (player === "Rock" && getComputerChoice === "Scissors") {
        return "Você ganhou!";
    }else if (player === "Paper" && getComputerChoice === "Rock") {
        return "Você ganhou!";
    } else {
        return "Você perdeu!";
    }
        
    }

    console.log(playRound(playerSelection, computerSelection));



   
