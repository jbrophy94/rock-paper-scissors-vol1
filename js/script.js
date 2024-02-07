'use strict'

//The only global variable in this game is the winCounts object.
//Only 2 functions are actually called in the global context of this script. They are:
  //alert (see directly below)
  //playRockPaperScissors
  //functions and the scopes in which they are called are:
    //getComputerChoice--scope called: playSingleRound (as input to checkWinner function)
    //checkWinner--scope called: playSingleRound (to determine the winner of the round)
    //playSingleRound--scope called: playSeries (playSeries adds input functionality for playerSelection and calls getComputerChoice for computerSelection)
    //playSeries--scope called: playRockPaperScissors (loops until best of 5 series is completed)
    //playRockPaperScissors--scope: global (calls playSeries until user opts out of playing again)

//Welcome the user to the game by printing to the console
alert("Welcome to Rock Paper Scissors! This is a simple console game so please open up the developer tools!")

//create object with 2 properties: playerWinCount and computer winCount
const winCounts = {player:0, computer:0}

//Create getComputerChoice function
  //Create array of choices
  //return a random choice from the array
function getComputerChoice(){
  const choiceArray = ["rock","paper","scissors"]
  return choiceArray[Math.floor(Math.random()*3)]
}

//Create checkWinner function
  //This will take 2 parameters: playerChoice and computerChoice
  //both choices will be stored in an array, with the playerChoice at index 0
  //and the computerChoice at index 1
  //Create the following array: playersArray = ["player", "computer"]--We will allocate victory using this array
  //Create an if else tree to check each possible combination of choices (order should not matter, use the
  //includes method)
  //For same element combinations, we can't use include. We will check both indexes instead
  //In the event of a tie, the function will simply return "tie" and our game handling function will 
  //know not to increment either win count in the winCounts object.
    //Combinations:
      // scissors, rock
      // scissors, paper
      // rock, paper
      // choicesArray[0]===choicesArray[1] return "tie"

    //For each if, the statement should be winningChoice = string
    //Then, since our indexes of our choice array is analogous to the indexes of the 
    //players array, we can say:
      //winner = playersArray[choicesArray.indexOf[winningChoice]]
    //return winner

  
function checkWinner(playerChoice, computerChoice){
  const choicesArray = [playerChoice, computerChoice]
  const playersArray = ["player","computer"]

  let winningChoice;
  if(choicesArray.includes("scissors") && choicesArray.includes("rock")) winningChoice = "rock";
  else if(choicesArray.includes("scissors") && choicesArray.includes("paper")) winningChoice = "scissors";
  else if (choicesArray.includes("rock")&&choicesArray.includes("paper")) winningChoice = "paper";
  else if (choicesArray[0] === choicesArray[1]) return "tie"
  
  const winner = playersArray[choicesArray.indexOf(winningChoice)]

  return winner;

}

//Create singleRoundFunction that will return the winner of the game
  //Ask for user input to store inside playerSelection
    //Make user input lowercase wtih toLowerCase() method
    //validate user input
  //Use getComputerChoice to store in computerSelection
  //return checkWinner(playerSelection, computerSelection)

function playSingleRound(){
  let validInput = false;
  let playerSelection;
  //This input validation works but for some reason the console.log() message still runs even
  //When I wouldn't expect the loop for input validation top have exited.
  do{
    playerSelection = prompt("What is your move (rock, paper, scissors)?").toLowerCase();
    if(playerSelection === "rock"||playerSelection === "paper"||playerSelection === "scissors"){
      validInput = true;
    } else{
      alert("Invalid input")
    }
    } while (validInput === false)

  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection)
  if(winner !== "tie") {
    console.log(`${checkWinner(playerSelection, computerSelection)} wins. Computer selected ${computerSelection}`);
  } else{
    console.log(`Tie. You and the computer both chose ${playerSelection}.`);
  }
  return winner;
}

//Create game loop that will track wins in winCounts object
//While neither player has won 3 games yet
  //store playSingleRound() in winner variable
  //if winner is "player" then increment winCounts.player
  //if winner is "computer" then increment winCounts.computer
//End while loop
//If player has won 3 games, print "You win the Series!"
//If the computer haswon 3 games, print "The computer has won the series"
//Set both win counts in the winCounts object back to 0. 

function playSeries(){
  while(winCounts.player < 3 && winCounts.computer < 3){
    let winner = playSingleRound();
    if (winner === "player") ++winCounts.player
    if (winner === "computer") ++winCounts.computer
    console.log(`\nplayer: ${winCounts.player}\ncomputer: ${winCounts.computer}`);
  }
  if (winCounts.player === 3) console.log(`You win the series ${winCounts.player} to ${winCounts.computer}!`);
  else if (winCounts.computer ===3) console.log(`The computer wins the series ${winCounts.computer} to ${winCounts.player}`);
  winCounts.player = winCounts.computer = 0;
}

//Create a function that runs playSeries in a while loop, where the condition to exit is a variable
//that tracks whether the player wants to play again. Implementation notes below:
//While keepGoing === true
  //playSeries()
  //ask the user if they want to play again
  //Validate the user input
  //if they want to play again, keep keepGoing as true
  //if they don't want to play again, exit loop and say good bye. 

function playRockPaperScissors(){
  let keepGoing = true;
  while(keepGoing === true){
    playSeries()
    let validInput = false;
    while(validInput === false){
      let playAgain = prompt("Play aganin (y/n)?").toLowerCase();
      if (playAgain === "n"){
          validInput = true;
          keepGoing = false;
      } else if(playAgain === "y"){
        validInput = true; 
        console.clear()
      }
    }
  }
  alert("Thanks for playing! Goodbye!")
}

//This is the only function that will actually run in the global scope as all other functions are lower order compared to playRockPaperScissors().
playRockPaperScissors()


