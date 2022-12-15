//Establish choices for game
const playHand = ['rock', 'paper', 'scissors'];

//Get player's choice:
    //Prompt player for selection
    //Store result
function getPlayerChoice() {
    let playerSelection = prompt('What will you choose: rock, paper or scissors?');
    return(playerSelection.toLowerCase());
}
console.log(getPlayerChoice())

//Get computer's choice:
    //Randomize selection
    //Store result
function getComputerChoice() {
    let computerSelection = playHand[Math.floor(Math.random() * playHand.length)];
    return(computerSelection);
}
console.log(getComputerChoice());

//Display player's round result
    //"You win!!!" (how they won e.g. Paper beats Rock)
        //else "You lose :(" (how they lost)
        //else if tie "Round is a tie."
    //Win gets 1 point, lose or tie gets none
    //Store result

//Repeat round 5 times

//After 5 rounds:
    //Display player and cpu points
    //If either has more points declare winner
        //else if tie game display tie game

//Ask if player wants to play again