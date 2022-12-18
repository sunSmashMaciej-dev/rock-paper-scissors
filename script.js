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
let roundResult = '';

function playRound(playerSelection, computerSelection) {
    //Display player's round result:
    //"You win!!!" (how they won e.g. Paper beats Rock)
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        roundResult ='You win!!! Rock beats Scissors';
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        roundResult ='Congratulations!!! Paper beats Rock';
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        roundResult ='Boo-ya!!! Scissors beats Paper';
    
    //else "You lose :(" (how they lost)
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        roundResult ='You lose :( Paper beats Rock';
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        roundResult ='Bad luck :\'( Scissors beats paper';
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        roundResult ='Sorry -_- Rock beats Scissors';

    //else if tie "Round is a tie."
    } else if(playerSelection === computerSelection) {
        roundResult ='Round is a tie...';
    } else {
        roundResult ='something went wrong';
    }
    console.log('You played ' + playerSelection);
    console.log('The computer played ' + computerSelection);
    return(roundResult);
}

//Repeat round 5 times
function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        playRound(playerSelection, computerSelection);
        
    }

}
console.log('You played ' + playerSelection);
console.log('The computer played ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));



//After 5 rounds:
    //Display player and cpu points
    //If either has more points declare winner
        //else if tie game display tie game

//Ask if player wants to play again