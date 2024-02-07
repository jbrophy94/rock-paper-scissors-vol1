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
  const playerSelection = prompt("What is your move (rock, paper, scissors)?").toLowerCase();
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

playSeries()


