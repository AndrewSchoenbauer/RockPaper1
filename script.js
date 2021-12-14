console.log("working");
var comOptions = ["R", "P", "S"];
var wins = 0;
var losses = 0;
var ties = 0;
function game() {
    var userInput = prompt("Please enter R,P or S");
    if (userInput==="")
        game();
    // console.log(userInput);
    alert("You entered " + userInput);
    var randNum = Math.floor(Math.random() * comOptions.length);
    var compChoice = comOptions[randNum];
    alert("computer pick " + compChoice);
    if (compChoice === userInput.toUpperCase()) {
        console.log("Tie");
        ties++;
    } else if (
        (userInput.toUpperCase() === "S" && compChoice === "P") ||
        (userInput.toUpperCase() === "R" && compChoice === "S") ||
        (userInput.toUpperCase() === "P" && compChoice === "R")
    ) {
        console.log("user win");
        wins++;
    } else {
        console.log("Computer win");
        losses++;
    }
    var stats = alert("wins: "+wins+" Losses: "+losses+ " ties: "+ties )
    var playAgain = confirm("want to play again?");
    console.log(playAgain);
    if (playAgain) {
        game() //recursive functions
    }
}
//need a loop to run the game mutiple times
//need to tell the user if they won or not
game();