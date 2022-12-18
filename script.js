//Establish choices for game
const playHand = ['rock', 'paper', 'scissors'];

//Get player's choice:
function getPlayerChoice() {
    //Prompt player for selection
    let playerChoice= prompt('What will you choose: rock, paper or scissors?');
    //Store result
    return(playerChoice.toLowerCase());
}

//Get computer's choice:
function getComputerChoice() {
    //Randomize selection
    let computerChoice = playHand[Math.floor(Math.random() * playHand.length)];
    //Store result
    return(computerChoice);
}

//Declare parameters for playRound function
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

//Round result values
let roundResult = '';
playerPoints = 0;
cpuPoints = 0;

function playRound(playerSelection, computerSelection) {
    //Display player's round result:
    //"You win!!!" (how they won e.g. Paper beats Rock)
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        roundResult ='You win!!! Rock beats Scissors';
        playerPoints += 1;
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        roundResult ='Congratulations!!! Paper beats Rock';
        playerPoints += 1;
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        roundResult ='Boo-ya!!! Scissors beats Paper';
        playerPoints += 1;
    
    //else "You lose :(" (how they lost)
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        roundResult ='You lose :( Paper beats Rock';
        cpuPoints += 1;
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        roundResult ='Bad luck :\'( Scissors beats paper';
        cpuPoints += 1;
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        roundResult ='Sorry -_- Rock beats Scissors';
        cpuPoints += 1;

    //else if tie "Round is a tie."
    } else if(playerSelection === computerSelection) {
        roundResult ='Round is a tie...';
    } else {
        roundResult ='something went wrong';
    }
    console.log('You played ' + playerSelection);
    console.log('The computer played ' + computerSelection);
    console.log(roundResult);
    console.log('Score: computer ' + cpuPoints + ' wins, You ' + playerPoints + ' wins.')
}
let gameResult = '';
//Repeat round 5 times
function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        playRound(playerSelection, computerSelection);    
    }
    if(playerPoints > cpuPoints){
        gameResult ='You won the game!!!';
    }else if(playerPoints < cpuPoints){
        gameResult ='You lose';
    }else{
        gameResult ='It\'s a tie game through and through';
    }
    return(gameResult);

}
//console.log('You played ' + playerSelection);
//console.log('The computer played ' + computerSelection);
//console.log(playRound(playerSelection, computerSelection));



//After 5 rounds:
    //Display player and cpu points
    //If either has more points declare winner
        //else if tie game display tie game

//Ask if player wants to play again