//Promts user for quit confirmation for the clicker
onEvent("finish", "click",function(){
  showElement("confirm");
  showElement("confirmN");
  showElement("confirmY");
  showElement("confirmL");
});

onEvent("confirmY","click",function(){
  setScreen("welcome_screen");
  hideElement("confirm");
  hideElement("confirmY");
  hideElement("confirmN");
  hideElement("confirmL");
});

onEvent("confirmN","click",function(){
  hideElement("confirm");
  hideElement("confirmY");
  hideElement("confirmN");
  hideElement("confirmL");
});

//Code for the clicker game
onEvent("clickerGame", "click",function(){
  setScreen("welcome_screen");
});

var lives = 3;
var score = 0;
var winScore = (randomNumber(20,30));
onEvent("start_button", "click", function() {
  setScreen("game_screen");
  score = 0;
  lives = 3;
  setText("number_lives", lives);
  setText("total_score", score);
  winScore = (randomNumber(20,30));
  //hides confirmation elements
  hideElement("confirm");
  hideElement("confirmY");
  hideElement("confirmN");
  hideElement("confirmL");
});
onEvent("apple", "click", function() {
  setPosition("apple", randomNumber(50,280), randomNumber(50, 350));
  score = score + 1;
  setText("total_score",score);
  if (score == winScore) {
  setText("numCaught", score);
  setText("numCaughtShadow", score);
  setScreen("win_screen");
  
}
});
onEvent("background", "click", function() {
  lives = lives - 1;
  setText("number_lives",lives);
 if (lives == 0) {
  setScreen("lose_screen");
 }
  
});
onEvent("playAgain_button", "click", function() {
  setScreen("welcome_screen");
  
});
onEvent("tryAgain_button", "click", function() {
  setScreen("welcome_screen");
});
