const playerChoice = document.querySelector('#playerChoice');
const compChoice = document.querySelector('#computerChoice');
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
        winStatus.textContent = "You Win || Rock beat Scissors";
        playerScore ++;
    }
    else if(player == "PAPER" && comp == "ROCK"){
        winStatus.textContent = "You Win || Paper beat Rock";
        playerScore ++;

    }
    else if(player == "SCISSORS" && comp == "PAPER"){
        winStatus.textContent = "You Win || Scissors beat Paper";
        playerScore ++;
    }
    else if(player == "ROCK" && comp == "PAPER"){
        winStatus.textContent = "You Lose || Paper beat Rock";
        compScore ++;
    }
    else if(player == "PAPER" && comp == "SCISSORS"){
        winStatus.textContent = "You Lose || Scissors beat Paper";
        compScore ++;
    }
    else{
        winStatus.textContent = "You Lose || Rock Beat Scissors";
        compScore ++;
    }
;
}   


/*function Game(){
    for (let i = 0; i < 5; i ++){
        let Score = PlayGame();
        if (Score.slice(4, 7) == "Win"){
            playerScore ++;
        }
        else if(Score.slice(4, 8) == "Lose"){
            compScore ++;
        }
        let Total = `Your Score: ${playerScore}, Computer Score: ${compScore}`;
        console.log(Total);
    }

    let endGame = playerScore > compScore;
    if(endGame == true){
        console.log("You are The game Champion")
    }
    else{
        console.log("L")
    }
    return endGame;
}
console.log(Game());
*/