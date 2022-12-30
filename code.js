


const options = document.querySelectorAll(".options");

options.forEach((option) => {
    option.addEventListener("click", function () {
        
        const getPlayerChoice = this.textContent;
        console.log(getPlayerChoice);

        var choices = ["rock", "paper", "scissors"];
        const getComputerChoice = choices[Math.floor(Math.random() * 3)];
        console.log(getComputerChoice);
        checkWinner(getPlayerChoice, getComputerChoice);

    });
});




function checkWinner(getPlayerChoice, getComputerChoice) {
    
    var playerScore = 0;
    var computerScore = 0;
    

    if (getPlayerChoice === getComputerChoice) {
        console.log("Tie!");
        return "Its a Tie";
    } else if (
        (getPlayerChoice === "rock" && getComputerChoice === "scissors") ||
            (getPlayerChoice === "paper" && getComputerChoice === "rock") ||
            (getPlayerChoice === "scissors" && getComputerChoice === "paper")
        ){  
            console.log("You Win!")
            playerScore++;
            document.getElementById("pScore").innerHTML = playerScore;
            return "Player";
            
        }
        else {
            console.log("You lose!")
            computerScore++;
            document.getElementById("cScore").innerHTML = computerScore;
            return "Computer";
            
        }

        
    }

function game() {

        while (resultOne || resultTwo < 5) {
            

            var resultOne = playerScore;
            var resultTwo = computerScore;
            checkWinner(getPlayerChoice, getComputerChoice);
        }
}