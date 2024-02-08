"use strict";

//The only global variable in this game is the winCounts object.
//The Only function that is actually called in the global context of this script is playRockPaperScissors.
//functions and the scopes in which they are called are:
//getComputerChoice--scope called: playSingleRound (as input to checkWinner function)
//checkWinner--scope called: playSingleRound (to determine the winner of the round)
//playSingleRound--scope called: playSeries (playSingleRound adds input functionality for playerSelection and calls getComputerChoice for computerSelection)
//playSeries--scope called: playRockPaperScissors (loops until best of 5 series is completed)
//playRockPaperScissors--scope: global (calls playSeries until user opts out of playing again)

//create object with 2 properties: playerWinCount and computer winCount
const winCounts = { player: 0, computer: 0 };
const btns = document.querySelector(".choice-container");
const newGame = document.querySelector(".new-game");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const seriesResults = document.querySelector(".series-results");
//Create getComputerChoice function
//Create array of choices
//return a random choice from the array
function getComputerChoice() {
  const choiceArray = ["rock", "paper", "scissors"];
  return choiceArray[Math.floor(Math.random() * 3)];
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

function checkWinner(playerChoice, computerChoice) {
  const choicesArray = [playerChoice, computerChoice];
  const playersArray = ["player", "computer"];

  let winningChoice;
  if (choicesArray.includes("scissors") && choicesArray.includes("rock"))
    winningChoice = "rock";
  else if (choicesArray.includes("scissors") && choicesArray.includes("paper"))
    winningChoice = "scissors";
  else if (choicesArray.includes("rock") && choicesArray.includes("paper"))
    winningChoice = "paper";
  else if (choicesArray[0] === choicesArray[1]) return "tie";

  const winner = playersArray[choicesArray.indexOf(winningChoice)];

  return winner;
}

function initialize() {
  winCounts.player = 0;
  winCounts.computer = 0;
  result.textContent = "";
  score.textContent = "";
  seriesResults.textContent = "";
}

//Create singleRoundFunction that will return the winner of the game
//Ask for user input to store inside playerSelection
//Make user input lowercase wtih toLowerCase() method
//validate user input
//Use getComputerChoice to store in computerSelection
//return checkWinner(playerSelection, computerSelection)

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);

  if (winCounts.player < 3 && winCounts.computer < 3) {
    if (winner !== "tie") {
      winCounts[winner] += 1;
      result.textContent = `${checkWinner(
        playerSelection,
        computerSelection
      )} wins. Computer selected ${computerSelection}.`;
      score.textContent = `Player: ${winCounts.player}\nComputer: ${winCounts.computer}`;
    } else {
      result.textContent = `Tie. You and the computer both chose ${playerSelection}.`;
    }
    if (winCounts.player === 3) {
      seriesResults.textContent = `You win the series ${winCounts.player} games to ${winCounts.computer}!!!`;
    } else if (winCounts.computer === 3) {
      seriesResults.textContent = `The computer wins the series ${winCounts.computer} games to ${winCounts.player}.`;
    }
  }
}

btns.addEventListener("click", function (e) {
  playRound(e.target.classList[0]);
});

newGame.addEventListener("click", initialize);
