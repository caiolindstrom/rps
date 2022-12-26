function getComputerChoice(){
    options = ["rock" , "paper", "scissors"];
    var result = options[Math.floor(Math.random() * 3)];
    console.log(result);
    return result;
      
}

function getPlayerChoice(){
    var choice = prompt("Choose between Rock, Paper and Scissors").toLowerCase();
    console.log(choice);
    return choice;
}

function checkWinner (getPlayerChoice, getComputerChoice){
    if(getPlayerChoice === getComputerChoice) {
        return "Tie";
    }
    else if (
        (getPlayerChoice === "rock" && getComputerChoice === "scissors") ||
        (getPlayerChoice === "paper" && getComputerChoice === "rock") ||
        (getPlayerChoice === "scissors" && getComputerChoice === "paper")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
    
             
}
    function playRound (getPlayerChoice, getComputerChoice) {
        let roundResult = checkWinner(getPlayerChoice, getComputerChoice);

        if (roundResult === "Player") {
            return "You won this round!"
             
        } else if (roundResult === "Computer") {
            return "You lost this round!"
            
        
    } else {
        return "It was a Tie!";
    }
 }
        

function game() {
    console.log("Game Start!");
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-------")
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }   
     else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore++;
    
        }
    }
    console.log("Game Over")
    if (playerScore > computerScore){
        console.log ("Player Wins");
    }
    else if (playerScore < computerScore) {
        console.log ("Computer WIns");
    }
    else{
        console.log("Tie!");
    }
 }


   game();


