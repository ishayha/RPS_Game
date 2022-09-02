const playerSelection = `Rock`;
const computerSelection = getComputerChoice();

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
    return choice;
}

function PlayGame(playerSelection, computerSelection){
    let player = playerSelection.toUpperCase();
    let comp = computerSelection.toUpperCase();
    let Result;
    if (player == "ROCK" && comp == "SCISSORS"){
        Result = "You Win";
    }
    else if(player == "PAPER" && comp == "ROCK"){
        Result = "You Win";
    }
    else if(player == "SCISSORS" && comp == "PAPER"){
        Result = "You Win";
    }
    else if(player == "ROCK" && comp == "PAPER"){
        Result = "You Lose";
    }
    else if(player == "PAPER" && comp == "SCISSORS"){
        Result = "You Lose";
    }
    else{
        Result = "You Lose";
    }
    return Result;

}   