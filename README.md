# rock-paper-scissors-vol1
Console rock paper scissors game

This is a simple game to be played in the console. The game takes user input
for a typical rock paper scissors game and compares the user's choice to a random selection made by the computer, and then determines the appropriate winner.
This is set up as a best of 5 series (first to 3 wins). At the end of each series,
the program will prompt the user on whether they would like to play again or not. There is no GUI at all for this version of the game. The entire game is played using prompts, alerts, and the console (the console is where you will see the majority of output, including the results of games and series).

The only global variable in this game is the winCounts object.
The Only function that is actually called in the global context of this script is playRockPaperScissors.
  -functions and the scopes in which they are called are:
    -getComputerChoice--scope called: playSingleRound (as input to checkWinner function)
    -checkWinner--scope called: playSingleRound (to determine the winner of the round)
    -playSingleRound--scope called: playSeries (playSingleRound adds input functionality for playerSelection and calls getComputerChoice for computerSelection)
    -playSeries--scope called: playRockPaperScissors (loops until best of 5 series is completed)
    -playRockPaperScissors--scope: global (calls playSeries until user opts out of playing again)