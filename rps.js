function game(){

    let computerScore = 0;
    let playerScore = 0;
    
    for(round = 1; round <= 5; round++){
        
        let check = false;
        while(check == false){
            const computerSelection = computerPlay();
            const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase(); //gets input from user and turns it lowercase
                
            //checks if the selection is one of the right options, if it isn't, it repeats the question.
                if ((playerSelection == "rock") || (playerSelection == "paper") || (playerSelection == "scissors")){
                    check = true; //once the selection is correct, it will break the loop
                    console.log("Computer: " + computerSelection + " You: " + playerSelection);
                    
                    //checks if player and computer selected the same thing    
                    if (playerSelection == computerSelection){
                        console.log("Tie! Play again.");
                        check = false;
                    }else{
                        if (playRound(playerSelection, computerSelection) == "computer"){
                            computerScore++;
                            if (computerScore == 3){
                                console.log("Computer: " + computerScore + " You: " + playerScore);
                                return "Computer wins!";
                            }
                        }else{
                            playerScore++;
                            if (playerScore == 3){
                                console.log("Computer: " + computerScore + " You: " + playerScore);
                                return "Player wins!";
                            }
                        }
                        console.log("Computer: " + computerScore + " You: " + playerScore);
                    }
                }else{
                    console.log("Incorrect choice; please select again.");
                }
        }
     

    }
}

function computerPlay(){
    var choice = Math.random(); //choose a random selections
    
    //return option
    if (choice < 0.33){
        return "rock";
    }else if ((choice >= 0.33) && (choice < 0.66)){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        return "player";
    }else{
        return "computer";
    }
}

console.log(game())