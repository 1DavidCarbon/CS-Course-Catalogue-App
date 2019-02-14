//https://studio.code.org/projects/applab/3c-UW_nC5gEkuJ_UxZi8nrk2SE2MsSDwxjGPul899Jg
//Sets Global Varables for Player Score and TO Track Current Player
var randomButtonId;
var randButtonId = "button"+randomNumber(1,4);
var currentPlayer = 1;
var p1Score = 0;
var p2Score = 0;
//Starts The Game and Excutes Functions
onEvent("start_btn", "click", function(){
  setScreen("gamePlay_screen");
  setBoard();
});
//Simlair to the code above except its from a function
onEvent("replay_btn", "click", playAgain);
//Checks a player has a certain amount of points to determine a win or lose display
function checkGameover(){
  if ((p1Score >= 16)) {
    setScreen("gameOver_screen");
    showElement("player1Win_label");
  } else if ((p1Score <= -16)) {
      setScreen("gameOver_screen");
      showElement("player2Win_label");
  } else if ((p2Score >= 16)) {
    setScreen("gameOver_screen");
    showElement("player2Win_label");
  } else if ((p2Score <= -16)) {
      setScreen("gameOver_screen");
      showElement("player1Win_label");
  }
}
//Resets the game back to former 
function playAgain(){
  setBoard();
  p1Score = 0;
  p2Score = 0;
  currentPlayer = 1;
  showElement("player2_highlight");
  hideElement("player2_highlight");
  hideElement("player2Win_label");
  hideElement("player1Win_label");
  setText("score1_label", p1Score);
  setText("score2_label", p2Score);
  setScreen("gamePlay_screen");
}
//Updates the player score
function updateScoreBy(amt){
  if (currentPlayer == 1){
    p1Score = p1Score + amt;
  }
  else{
    p2Score = p2Score + amt;
  }
}
//switches player since excuted and keeps track of it
function switchPlayer(){
    if(currentPlayer==1){
       hideElement("player1_highlight");
       currentPlayer=2;
       showElement("player2_highlight");
    } else {
        hideElement("player2_highlight");
        currentPlayer=1;
        showElement("player1_highlight");
    }
    console.log("current player is: "+currentPlayer);
}
//Sets up the board game by randomly generating button color & random button id
function setBoard() {
  var R = randomNumber(0,235);
  var G = randomNumber(0,235);
  var B = randomNumber(0,235);
  var color = "rgb("+R+","+G+","+B+")";
  setProperty("button1", "background-color", color);
  setProperty("button2", "background-color", color);
  setProperty("button3", "background-color", color);
  setProperty("button4", "background-color", color);
  R = R +15;
  G = G +15;
  B = B +15;
  var diffcolor =("rgb("+R)+","+G+","+B+")";
  randButtonId = "button"+randomNumber(1,4);
  setProperty(randButtonId, "background-color", diffcolor);
  console.log("Correct one is: "+randButtonId);
}
//Gets random button id value and if true it will either give a point or take way a point
function checkCorrect(buttonId) {
  console.log("Checking: "+buttonId);
  console.log("Correct Button: "+randomButtonId);
  if (buttonId == randButtonId) {
    console.log("CORRECT");
    updateScoreBy(2);
  } else {
    updateScoreBy(-2);
    console.log("WRONG");
  }
  console.log("P1 Score : "+p1Score);
  console.log("P2 Score : "+p2Score);
  setText("score1_label",p1Score);
  setText("score2_label",p2Score);
  setBoard();
  switchPlayer();
  checkGameover();
}
//When a button is clicked it exuctes a function to check if the random buttton
onEvent("button1", "click", function(){
      checkCorrect("button1");
});
onEvent("button2", "click", function(){
      checkCorrect("button2");
});
onEvent("button3", "click", function(){
      checkCorrect("button3");
});
onEvent("button4", "click", function(){
      checkCorrect("button4");
});
//With barely 1 hour of sleep I declare this project compelte :yay: 
