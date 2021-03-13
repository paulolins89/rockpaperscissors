const inputs = document.querySelectorAll('input');
const gamelog = document.querySelector('.gamelog');

inputs.forEach((input) => {
    input.addEventListener('click', e => {
        const choice = e.target.id;
        const computerChoice = computerPlay();
        const content = document.createElement('p');
        content.textContent = 'You selected ' + choice + '. Computer selected ' + computerChoice + '.';
        gamelog.appendChild(content);
        playRound(choice, pcChoice);
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
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        changeScore('player');
    }else{
        changeScore('computer');
    }
}

function changeScore(winner){
    const content = document.createElement('p');
    if (winner == 'player'){
        const playerText = document.querySelector('#playerScore');
        const text = document.getElementById('playerScore').textContent;
        let score = parseInt(text.slice(-1));
        score++;
        playerText.textContent = "You: " + score;
        if (score == 5){
            content.textContent = "You win!";
        }else{
            content.textContent = 'You win this round!';
        }
    }else{
        const computerText = document.querySelector('#computerScore');
        const text = document.getElementById('computerScore').textContent;
        let score = parseInt(text.slice(-1));
        score++;
        computerText.textContent = "Computer: " + score;
        if (score == 5){
            content.textContent = 'Computer wins';
        }else{
            content.textContent = 'Computer wins this round!';
        }
    }
    gamelog.appendChild(content);
}