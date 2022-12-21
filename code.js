const choice = ["Rock" , "Paper" , "Scissors"];
const player = prompt("Choose between Rock, Paper or Scissors");
const computerSelection = getComputerChoice;
const playerSelection = player;

function getComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound (playerSelection, computerSelection){

    if (player === "Rock" && getComputerChoice === "Paper") {
        console.log("Você perdeu!");
        
    } else if (player === "Rock" && getComputerChoice === "Scissors") {
        console.log("Você ganhou!");
    } else if (player === "Rock" && getComputerChoice === "Rock") {
        console.log ("Empate!");
    } else if (player === "Paper" && getComputerChoice === "Paper") {
        console.log ("Empate!");
    }else if (player === "Paper" && getComputerChoice === "Rock") {
        console.log ("Você ganhou!");
    } else if (player === "Paper" && getComputerChoice === "Scissors") {
        console.log ("Você perdeu!")
    }

}


   
