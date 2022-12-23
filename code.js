function getComputerChoice(){
    options = ["Rock" , "Paper", "Scissors"];
    var result = options[Math.floor(Math.random() * 3)];
    console.log(result);
    return result;
      
}

function getPlayerChoice(){
    var choice = prompt("Choose between Rock, Paper and Scissors");
    console.log(choice);
    return choice;
}

function playRound (getPlayerChoice, getComputerChoice){
    
    
    const choice1 = getPlayerChoice;
    const choice2 = getComputerChoice;

    if (choice1 === choice2){
        return "É um empate";
    }
        if (choice1 === "Paper"){
            if (choice2 === "Rock") {
                return "Você ganhou!"
            } else {
                return "Você perdeu!"
            }
        }
        if (choice1 === "Rock") {
            if (choice2 === "Scissors") {
                return "Você ganhou!"
            }else{
                return "Você perdeu!"
                }
        }
        if (choice1 === "Scissors") {
            if (choice2 === "Paper") {
                return "Você ganhou!"
            }else{
                return "Você perdeu!"
            }
            }
        }              
        

function game() {
    const playerScore = 0;
    const computerScore = 0;
    
    const playerSelection = getPlayerChoice;
    const computerSelection = getComputerChoice;
    let roundResult = playRound(playerSelection, computerSelection);

    for (let i = 0; i < 5; i++){
        playRound();

        if (roundResult === "Você ganhou!") {
            ++playerScore;
        
        } else if (roundResult === "Você perdeu!") {
            ++computerScore;
        
    }
}

    if (playerScore > computerScore) {
        return "Você ganhou, parabéns!"; 
    } else if (playerScore < computerScore) {
        return "Você perdeu, tente novamente!";
    } else { 
        return "Empate!";
    }
}
   
game();

// console.log(playRound(getPlayerChoice(), getComputerChoice()));