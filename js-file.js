let playerScore = 0;
let computerScore = 0; 
let resultMessage;


function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function updateMoveChoiceText(playerSelection, computerSelection) {
    moveChoiceContainer.textContent = `You chose ${playerSelection}, Your opponent chose ${computerSelection}`
}

function updateScoreBoard() {
        scoreBoard.textContent = "You: "+ playerScore +" Opponent: "+ computerScore;
    }

function updateResultMessage() {
    resultMessageContainer.textContent = resultMessage;

}

function jokenpoRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
         resultMessage = "It's a tie!"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        resultMessage = "You win, rock beats scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerScore;
        resultMessage = "You win, paper beats rock"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
        resultMessage =  "You win, scissors beats paper"; 
        return;
    } else {   
        computerScore++;
        resultMessage = "You lose, " + computerSelection + " beats " + playerSelection;
    }
    updateMoveChoiceText(playerSelection, computerSelection);
    updateScoreBoard();
    updateResultMessage();
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    scoreBoard.textContent = "You: "+ playerScore +" Opponent: "+ computerScore;
    
}


function gameOver() {
        if (playerScore === 5) {
            gameOverContainer.textContent = "You won the match!";
        } else if (computerScore === 5) {
            gameOverContainer.textContent = "You lost the match!";
        }
        if (playerScore === 5 || computerScore === 5 ) {
            const playAgainButton = document.createElement('button');
            playAgainButton.classList.add('playAgainButton');
            playAgainButton.textContent ='Play Again';

            const bodyContainer = document.querySelector('body');
            bodyContainer.appendChild(playAgainButton);
            
            document.querySelector('.playAgainButton').addEventListener('click', resetScore());
        }
    }
    

const buttons = document.querySelectorAll('#choiceButton');

buttons.forEach(button => {
    button.addEventListener('click', () => {
            jokenpoRound(button.className, computerPlay());
            gameOver();
            });
});

/*if (playerScore === 5 || computerScore === 5 ) {
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('playAgainButton');
    playAgainButton.textContent ='Play Again';
    const bodyContainer = document.querySelector('body');
    bodyContainer.appendChild(playAgainButton);
    

    buttons.forEach(button => {
        button.removeEventListener('click', () => {
            jokenpoRound(button.className, computerPlay());
            gameOver();
        })
})
} */



    
const currentScore = document.querySelector('.currentScore');
const scoreBoard = document.createElement('div');
scoreBoard.classList.add('scoreboard');
scoreBoard.textContent = "You: "+ playerScore +" Opponent: "+ computerScore;
currentScore.appendChild(scoreBoard);

const moveChoiceContainer = document.querySelector('.moveChoice');
moveChoiceContainer.textContent = "";

const resultMessageContainer = document.querySelector('.resultMessage');
resultMessageContainer.textContent = "";

const gameOverContainer = document.querySelector('.gameOver');
gameOverContainer.textContent = "";


    