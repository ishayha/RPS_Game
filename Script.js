function getPlayerChoice(){
    let choices = window.prompt("Pick Rock, Paper or Scissors");
    return choices.toUpperCase();
}

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
}

function PlayGame(playerSelection){
    const player = getPlayerChoice();
    const comp = getComputerChoice();
    let Result;
    if (player == "ROCK" && comp == "SCISSORS"){
        Result = "You Win || Rock beat Scissors";
        //playerScore ++;
    }
    else if(player == "PAPER" && comp == "ROCK"){
        Result = "You Win || Paper beat Rock";
       // playerScore ++;

    }
    else if(player == "SCISSORS" && comp == "PAPER"){
        Result = "You Win || Scissors beat Paper";
        //playerScore ++;
    }
    else if(player == "ROCK" && comp == "PAPER"){
        Result = "You Lose || Paper beat Rock";
        //compScore ++;
    }
    else if(player == "PAPER" && comp == "SCISSORS"){
        Result = "You Lose || Scissors beat Paper";
        //compScore ++;
    }
    else{
        Result = "You Lose || Rock Beat Scissors";
        //compScore ++;
    }
    console.log(Result);
    return Result;
}   

//5 Game
let playerScore = 0;
let compScore = 0;

function Game(){
    for (let i = 0; i < 5; i ++){
        let Score = PlayGame(playerSelection);
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
