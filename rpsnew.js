const inputs = document.querySelectorAll('input');
const gamelog = document.querySelector('.gamelog');
const scores = document.querySelector('.scores');

inputs.forEach((input) => {
    input.addEventListener('click', e => {
        const choice = e.target.id;
        const computerChoice = computerPlay();
        const content = document.createElement('li');
        if (getScore() == false){
            content.textContent = 'You selected ' + choice + '. Computer selected ' + computerChoice + '.';
            gamelog.insertBefore(content, gamelog.firstElementChild);
            playRound(choice, computerChoice);
        }else{
            //does nothing...
        }
    });
});

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
    if (playerSelection == computerSelection){
        document.getElementsByTagName("li")[0].textContent += " Tie!";
    }else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        changeScore('player');
    }else{
        changeScore('computer');
    }
}

function getScore(){
    const playerText = document.querySelector('#playerScore');
    const computerText = document.querySelector('#computerScore');
    let playerScore = parseInt(document.getElementById('playerScore').textContent.slice(-1));
    let computerScore = parseInt(document.getElementById('computerScore').textContent.slice(-1));
    if ((playerScore == 5) || (computerScore == 5)){
        return true;
    }else{
        return false;
    }
}

function changeScore(winner){
    if (winner == 'player'){
        const playerText = document.querySelector('#playerScore');
        let score = parseInt(document.getElementById('playerScore').textContent.slice(-1));
        score++;
        playerText.textContent = "You: " + score;
        if (score == 5){
            document.getElementsByTagName("li")[0].textContent += ' You win!!!';
            playAgain('player');
        }else{
            document.getElementsByTagName("li")[0].textContent += ' You win this round!';
        }
    }else{
        const computerText = document.querySelector('#computerScore');
        let score = parseInt(document.getElementById('computerScore').textContent.slice(-1));
        score++;
        computerText.textContent = "Computer: " + score;
        if (score == 5){
            document.getElementsByTagName("li")[0].textContent += ' Computer wins!!!';
            playAgain('computer');
        }else{
            document.getElementsByTagName("li")[0].textContent += ' Computer wins this round!';
        }
    }
}

function playAgain(winner){
    const playAgain = document.createElement('button');
    playAgain.setAttribute("onClick","window.location.reload()")
    if (winner == 'player'){
        playAgain.textContent = 'Click here to beat it again!';
    }else{
        playAgain.textContent = 'Click here to get your revenge!';
    }
    
    scores.appendChild(playAgain);
}