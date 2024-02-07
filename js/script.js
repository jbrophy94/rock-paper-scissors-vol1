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
  if(choicesArray.includes("scissors")&&choicesArray.includes("rock")) winningChoice = "rock";
  else if(choicesArray.includes("scissors") && choicesArray.includes("paper")) winningChoice = "paper";
  else if (choicesArray.includes("rock")&&choicesArray.includes("paper")) winningChoice = "paper";
  else if (choicesArray[0] === choicesArray[1]) return "tie"
  
  const winner = playersArray[choicesArray.indexOf(winningChoice)]

  return winner;

}

//Create singleRoundFunction that will return the winner of the game
  //Ask for user input to store inside playerSelection
    //Make user input lowercase wtih toLowerCase() method
    //validate user input
  //Determine computer choice with getComputerChoice and store in computerSelection
  //store playerSelection and computerSelection in 2 element array.
    //The playerSelection should be index 0 and the computerSelecitoin index 1.

console.log(checkWinner("scissors","paper"));
  



