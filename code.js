
const options = document.querySelectorAll(".options");

options.forEach((option) => {
    option.addEventListener("click", function () {
        const getPlayerChoice = this.textContent;
        console.log(getPlayerChoice);
        var choices = ["rock", "paper", "scissors"];
        const getComputerChoice = choices[Math.floor(Math.random() * 3)];
        console.log(getComputerChoice);
        checkWinner(getPlayerChoice, getComputerChoice)

    });
});



function checkWinner(getPlayerChoice, getComputerChoice) {
    if (getPlayerChoice === getComputerChoice) {
        console.log("Tie!");
        return "Its a Tie";
    } else if (
        (getPlayerChoice === "rock" && getComputerChoice === "scissors") ||
            (getPlayerChoice === "paper" && getComputerChoice === "rock") ||
            (getPlayerChoice === "scissors" && getComputerChoice === "paper")
        ){  
            console.log("Venceu!")
            return "Player";
            
        }
        else {
            console.log("Perdeu!")
            return "Computer";
            
        }
    
    }

   

   

   