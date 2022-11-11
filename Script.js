/*
1. the win round messages need to be fixed
2. Style it
3. fix the noodles code
*/


const playerChoice = document.querySelector('#playerChoice');
const compChoice = document.querySelector('#compChoice');
const playerBoard = document.querySelector('#playerScore');
const compBoard = document.querySelector('#compScore');
const winStatus = document.querySelector('#winStatus');


let player;
let Computer;
let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll(`.choicesBtn`);
buttons.forEach(button => button.addEventListener('click', () => {
    player = button.id.toUpperCase();
    computer = getComputerChoice();
    playGame(player, computer);
    playerBoard.textContent = playerScore;
    compBoard.textContent = compScore;
    playerChoice.textContent = button.id;
    compChoice.textContent = computer;
    winnerCheck();    
}))


function getComputerChoice(){
    let randomNumbers = Math.floor(Math.random() * 3);
    let choice;
    if(randomNumbers == 0){
        choice = "Scissors";
    }
    else if(randomNumbers == 1){
        choice = "Paper";
    }
    else{
        choice = "Rock";
    }
    return choice.toUpperCase();
} // this one Done

function playGame(player, comp){
    if (player == "ROCK" && comp == "SCISSORS"){
        //winStatus.textContent = "You Win || Rock beat Scissors";
        playerScore ++;
    }
    else if(player == "PAPER" && comp == "ROCK"){
        //winStatus.textContent = "You Win || Paper beat Rock";
        playerScore ++;
    }
    else if(player == "SCISSORS" && comp == "PAPER"){
        //winStatus.textContent = "You Win || Scissors beat Paper";
        playerScore ++;
    }
    else if(player == "ROCK" && comp == "PAPER"){
        //winStatus.textContent = "You Lose || Paper beat Rock";
        compScore ++;  
    }
    else if(player == "PAPER" && comp == "SCISSORS"){
        //winStatus.textContent = "You Lose || Scissors beat Paper";
        compScore ++;
    }
    else if(player == "SCISSORS" && comp == "ROCK"){
        //winStatus.textContent = "You Lose || Rock Beat Scissors";
        compScore ++;
    }
;
}

function winnerCheck(){
    if(playerScore >= 3){
        winStatus.textContent = `YOU WIN!`;
        stopGame();
    }
    else if(compScore >= 3){
        winStatus.textContent = `YOU LOSE!`;
        stopGame();   
    }
}

function stopGame(){
    document.querySelector(`#Rock`).disabled = true;
    document.querySelector(`#Paper`).disabled = true;
    document.querySelector(`#Scissors`).disabled = true;

}