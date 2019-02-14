var currentPlayer = 1;
var randButtonId;
var p1Score = 0;
var p2Score = 0;

onEvent("welcomeScreen_start", "click", function() {
  setScreen("gamePlay_screen");
  setBoard();
});
function setBoard(){
var R = randomNumber(0,235);
var G = randomNumber(0,235);
var B = randomNumber(0,235);
var color = rgb(R, G, B);
//generate random color
setProperty("button1", "background-color", color);
setProperty("button2", "background-color", color);
setProperty("button3", "background-color", color);
setProperty("button4", "background-color", color);
// make all buttons have the same color
R = R+20;
G = G+20;
B = B+20;
var diffColor = rgb(R, G, B);
randButtonId = "button"+randomNumber(1,4);
//pick a random button Id
setProperty(randButtonId, "background-color", diffColor);
console.log("correct one is: "+ randButtonId);
}
function checkCorrect(buttonId){
  console.log("Checking: "+buttonId);
  if (buttonId == randButtonId) {
    console.log("RIGHT");
    updateScoreBy(1);
  } else {
    console.log("WRONG");
    updateScoreBy(-3);
  }
  checkGameOver();
  setBoard();
  switchPlayer();
}
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
function switchPlayer() {
  if (currentPlayer==1) {
    currentPlayer = 2;
    showElement("player2_highlight");
    hideElement("player1_highlight");
  } else {
    currentPlayer = 1;
    showElement("player1_highlight");
    hideElement("player2_highlight");
  }
  console.log("Current player is:"+currentPlayer);
}
function updateScoreBy(amt) {
  if(currentPlayer == 1){
         p1Score = p1Score + amt;
     } else {
         p2Score = p2Score + amt;
     }
  console.log("P1 score: " + p1Score);
  console.log("P2 score: " + p2Score);
  setText("score1_label", p1Score);
  setText("score2_label", p2Score);
}
function checkGameOver() {
  if (p1Score == 20) {
    setScreen("gameOver_screen");
    showElement("player1Win_label");
    hideElement("player2Win_label");
  } else {
    if (p2Score == 20) {
      setScreen("gameOver_screen");
      showElement("player2Win_label");
      hideElement("player1Win_label");
    }
  }
}
onEvent("gameOver_again", "click", function() {
  p1Score = 0;
  p2Score = 0;
  setText("score1_label", p1Score);
  setText("score2_label", p2Score);
  if (currentPlayer == 2) {
    currentPlayer = 1;
  }
  showElement("player1_highlight");
  hideElement("player2_highlight");
  setScreen("welcomeScreen");
});
