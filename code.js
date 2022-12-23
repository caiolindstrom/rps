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
        

   


console.log(playRound(getPlayerChoice(), getComputerChoice()));