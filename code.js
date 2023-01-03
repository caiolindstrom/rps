let buttons = document.querySelectorAll('button');
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;



// Seleção aleatória do computador, funcionando
function computerPlay() {
    const myArray = ["rock" , "paper" , "scissors"];
    randomComputer = myArray[Math.floor(Math.random() * 3)];
    console.log(randomComputer);
    return randomComputer;
    
}


// Botões que pegam input do jogador, funcionando
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        playerSelection = this.textContent;
        console.log(playerSelection);
      
        
        playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
            console.log("Fim de jogo")
        }

    });
});

// Função de jogar o Round, junto com o Score
function playRound(getPlayerChoice, getComputerChoice) {

    getPlayerChoice = playerSelection;
    getComputerChoice = computerPlay();
    
    

    if (getPlayerChoice === getComputerChoice) {

        console.log("Its a Tie!")
        return "tie";
        
    } else if (
        (getPlayerChoice === "rock" && getComputerChoice === "scissors") ||
            (getPlayerChoice === "paper" && getComputerChoice === "rock") ||
            (getPlayerChoice === "scissors" && getComputerChoice === "paper")
        ){  
            
            playerScore = playerScore + 1;
            console.log("Player Wins");
            
            
            
            
            

        }
        else {
            
            computerScore = computerScore + 1;
            console.log("Computer Wins");
            

            
            
            
            

        }
        
        document.getElementById('pScore').textContent = playerScore;
        document.getElementById('cScore').textContent = computerScore;
       
        
        
    }

    

    