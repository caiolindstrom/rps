let buttons = document.querySelectorAll('button');
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");


let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;



// Seleção aleatória do computador, funcionando
function computerPlay() {
    const myArray = ["rock" , "paper" , "scissors"];
    computerSelection = myArray[Math.floor(Math.random() * 3)];
    console.log(computerSelection);
    return computerSelection;
    
}


// Botões que pegam input do jogador, funcionando
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        playerSelection = this.textContent;
        console.log(playerSelection);
        
        
        playerText.textContent = `Player: ${playerSelection}`;
        computerText.textContent = `Computer: ${computerPlay()}`;
        resultText.textContent = `Result: ${playRound()}`;
        getResult();
        
        
        
        
        if (playerScore === 5 || computerScore === 5) {
            console.log("Fim de jogo")
            alert ("Fim de Jogo");
        }

    });
});

// Função de jogar o Round, junto com o Score
function playRound(getPlayerChoice, getComputerChoice) {

    getPlayerChoice = playerSelection;
    getComputerChoice = computerSelection;
    
    

    if (getPlayerChoice === getComputerChoice) {

        console.log("Its a Tie!")
        return "Draw!";
        
    } else if (
        (getPlayerChoice === "rock" && getComputerChoice === "scissors") ||
            (getPlayerChoice === "paper" && getComputerChoice === "rock") ||
            (getPlayerChoice === "scissors" && getComputerChoice === "paper")
        ){  
            
            playerScore = playerScore + 1;
            console.log("Player Wins");
            
            return "Player Wins";

        }
        else {
            
            computerScore = computerScore + 1;
            console.log("Computer Wins");  
            
            return "Computer Wins";
            

        }
    }

    //Função pra computar o resultado nas variáveis
function getResult(){
    document.getElementById('pScore').textContent = playerScore;
    document.getElementById('cScore').textContent = computerScore;
}
    