// https://studio.code.org/projects/applab/fBtxMbaTvfVUV1oQ70RQYP2Xkp6QYMaepMuTw0P2S9k
//Welcome to my phone app

//==================On Screen Home======================//
//=============Apps Selection==========//
//ANIME HEAVEN SELECTION
onEvent("anime_label_APP", "click", function(event) {
  setScreen("homeScreen");
  console.log("anime_label_APP clicked!");
});
onEvent("anime_APP", "click", function(event) {
  setScreen("homeScreen");
  console.log("anime_label_APP clicked!");
});

//TURTLE GAME SELECTION
onEvent("turtle_APP", "click", function(event) {
  setScreen("turtle_game_APP");
  console.log("turtle_game_APP clicked!");
});
onEvent("turtle_label_APP", "click", function(event) {
  setScreen("turtle_game_APP");
  console.log("turtle_game_APP clicked!");
});

//CLICKER GAME SELECTION
onEvent("clicker_game_APP", "click", function(event) {
  setScreen("welcome_screen_Clicker_APP");
  console.log("welcome_screen_Clicker_APP clicked!");
});
onEvent("clicker_game_label_APP", "click", function(event) {
  setScreen("welcome_screen_Clicker_APP");
  console.log("welcome_screen_Clicker_APP clicked!");
});

//COLOR SLEUTH SELECTION
onEvent("color_Sleuth_APP", "click", function(event) {
  setScreen("welcomeScreen_Color_APP");
  console.log("welcomeScreen_Color_APP clicked!");
});
onEvent("color_Sleuth_label_APP", "click", function(event) {
  setScreen("welcomeScreen_Color_APP");
  console.log("welcomeScreen_Color_APP clicked!");
});

//RETURN TO APP SCREEN
onEvent("homeButton", "click", return2Home);
onEvent("homeTurtleButton", "click", return2Home);
onEvent("NavigationBarAnimeIcon", "click", return2Home);
onEvent("NavigationBarAnimeIcon2", "click", return2Home);
onEvent("homeButton2", "click", return2Home);
onEvent("homeButton3", "click", return2Home);

//CALL BACK FUNCTIONS
function return2Home(){
  setScreen("|=AppSelection=|");
}


//==========End of Apps Selection======//

//============ Clock Time =============//
// Counters for the clock (Time)
var seconds;
var minutes;
var hours;


// Can be edited with manual modification,
// by setting this variable
// inorder to stop the timed increment
var stop = 0;

// Sets the current time
clears();

// Displays the clock time
updates();


// @ each time interval of 1000 milliseconds,
// Increase the time by 1 second
timedLoop(1000, function() {
  // If conditional: stop is > 0, it means the count
  // The time is live and continues to increases the clock time
  if (stop==0) {
    increase();
  } else {
     // If conditional: stop is > 0, it means the count
     // time "count" is temporarily deactivated for stop seconds
     // decrements stop, when stop it reaches zero then it allows time to continue again
    stop--;
  }
});


// Increase the time by 1 second
// Update display clock
function increase() {
  seconds++;
  if(seconds>59) {
    // If conditional: exceeds 59 seconds, increase amount of minutes
    seconds=0;
    minutes++;
    if(minutes>59) {
      // If conditional: exceeds 59 minutes, increase amount of hours
      minutes=0;
      hours++;
      if(hours>23) {
        // If conditional: exceeds 23 hours, reset hours
        hours=0;
      }
    }
  }
  updates();
}

// Decreasing time by 1 second
// Update display clock
function decreases() {
  seconds--;
  if (seconds<0) {
    // If conditional: if seconds becomes negative,
    // Decrease the amount of minutes
    seconds = 59;
    minutes--;
    if (minutes<0) {
      // If Conditional: if minutes becomes negative,
      // Decrease the amount of hours
      minutes = 59;
      hours--;
      if (hours<0) {
        // If conditional: if hours becomes negative
        // Reset again to 23:59:59
        hours = 23;
      }
    }
  }
  updates();
}

// Updating the display with current time
function updates() {
  
  // Setting the color on the label
  if(stop>0) {
    setProperty("clock","text-color","gray");
  } else {
    setProperty("clock","text-color","black");
  }
  
  // Write to label in the format hours: minutes: seconds
  setText("clock", format(hours) + 
                    ":" + 
                    format(minutes) + 
                    ":" + 
                    format(seconds) 
  );
}


// Setting the current time
function clears() {
  var currentdate = new Date(); 
  seconds = currentdate.getSeconds();
  minutes = currentdate.getMinutes();
  hours = currentdate.getHours();
  updates();
}

// Formating the number "n" by adding before needed a zero
function format(n) {
  if(n<10) {
    return "0"+String(n);
  } else {
    return String(n);
  }
  
}
//============END Clock Time =============//

//==================END On Screen Home======================//

//==================Anime Heaven APP======================//
//What a Sad Day
//Now onwards to doing Calulus Homework away!
//If I can't submit this than I will RAGE
//Video Page
onEvent("pageSlimeDattaKen", "click", function(event) {
  setScreen("iSlimeDattaKen");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iSlimeDattaKen/We-Took-Each-Others-Hand.mp3", false);
  console.log("Loading Slime Datta Ken from Dark Theme!");
});
onEvent("pageSlimeDattaKen_2", "click", function(event) {
  setScreen("iSlimeDattaKen-W");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iSlimeDattaKen/We-Took-Each-Others-Hand.mp3", false);
  console.log("Loading Slime Datta Ken from Light Theme!");
});
//Home Button
onEvent("iSlimeDattaKen-Button", "click", function(event) {
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iSlimeDattaKen/We-Took-Each-Others-Hand.mp3", false);
  setScreen("homeScreenWhite");
  console.log("Returning to Home Light Theme!");
});
onEvent("iSlimeDattaKen-Button-W", "click", function(event) {
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iSlimeDattaKen/We-Took-Each-Others-Hand.mp3", false);
  setScreen("homeScreen");
  console.log("Returning to Home Dark Theme!");
});
//Video Page
onEvent("pageKodomowoUndekure", "click", function(event) {
  setScreen("iKodomowoUndekure");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iKodomowoUndekure/Watashi-Tachi-wa-Koko-ni-Imasu-Friend-Shitai-Gekichuu-BGM.mp3", false);
  console.log("Loading Kodomo wo Undekure from Dark Theme!");
});
onEvent("pageKodomowoUndekure_2", "click", function(event) {
  setScreen("iKodomowoUndekure-W");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iKodomowoUndekure/Watashi-Tachi-wa-Koko-ni-Imasu-Friend-Shitai-Gekichuu-BGM.mp3", false);
  console.log("Loading Kodomo wo Undekure from Light Theme!");
});
//Home Button
onEvent("iKodomowoUndekure-Button", "click", function(event) {
  setScreen("homeScreen");
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iKodomowoUndekure/Watashi-Tachi-wa-Koko-ni-Imasu-Friend-Shitai-Gekichuu-BGM.mp3", false);
  console.log("Returning to Home Light Theme!");
});
onEvent("iKodomowoUndekure-Button-W", "click", function(event) {
  setScreen("homeScreenWhite");
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iKodomowoUndekure/Watashi-Tachi-wa-Koko-ni-Imasu-Friend-Shitai-Gekichuu-BGM.mp3", false);
  console.log("Returning to Home Light Theme!");
});
//Video Page
onEvent("pageTokyoGhoul", "click", function(event) {
  setScreen("iTokyoGhoul");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iTokyoGhoul/To-light.mp3", false);
  console.log("Loading Tokyo Ghoul from Dark Theme!");
});
onEvent("pageTokyoGhoul_2", "click", function(event) {
  setScreen("iTokyoGhoul-W");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iTokyoGhoul/To-light.mp3", false);
  console.log("Loading Tokyo Ghoul from Light Theme!");
});
//Home Button
onEvent("iTokyoGhoul-Button", "click", function(event) {
  setScreen("homeScreen");
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iTokyoGhoul/To-light.mp3", false);
  console.log("Returning to Home Dark Theme!");
});
onEvent("iTokyoGhoul-Button-W", "click", function(event) {
  setScreen("homeScreenWhite");
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iTokyoGhoul/To-light.mp3", false);
  console.log("Returning to Home Light Theme!");
});
//Video Page
onEvent("pageJingai-san", "click", function(event) {
  setScreen("iJingai-san-W");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iJingai-san/Wonder-Carte.mp3", false);
  console.log("Loading Jingai-san from Dark Theme!");
});
onEvent("pageJingai-san_2", "click", function(event) {
  setScreen("iJingai-san");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iJingai-san/Wonder-Carte.mp3", false);
  console.log("Loading Jingai-san from Light Theme!");
});
//Home Button
onEvent("iJingai-san-Button", "click", function(event) {
  setScreen("homeScreenWhite");
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iJingai-san/Wonder-Carte.mp3", false);
  console.log("Returning to Home Light Theme!");
});
onEvent("iJingai-san-Button-W", "click", function(event) {
  setScreen("homeScreen");
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iJingai-san/Wonder-Carte.mp3", false);
  console.log("Returning to Home Dark Theme!");
});
//Different Home Page Visuals
onEvent("iHomeScreenWhite", "click", function(event) {
  setScreen("homeScreenWhite");
  console.log("Loading Home White Background!");
});
onEvent("iHomeScreen", "click", function(event) {
  setScreen("homeScreen");
  console.log("Loading Home Dark Background!");
});
//Home Page Video Buttons that leads to a 404 Page
onEvent("page_black_clover_w", "mouseup", function(event) {
  setScreen("404-W");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/404/Snap.mp3",false);
  console.log("Loading 404!");
});
onEvent("page_black_clover_d", "mouseup", function(event) {
  setScreen("404");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/404/Snap.mp3",false);
  console.log("Loading 404!");
});
//Returns After 404
onEvent("home_Button_5", "click", function(event) {
  setScreen("homeScreen");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/404/Snap.mp3",false);
  console.log("Returning to Home!");
});
onEvent("yikes_Button", "click", function(event) {
  setScreen("homeScreenWhite");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/404/Snap.mp3",false);
  console.log("Returning to Home!");
});
//Easter Egg 
onEvent("pet", "click", function(event) {
  setPosition("pet",randomNumber(0,250),randomNumber(15,350) , 100, 100);
  console.log("Pet Moved!");
});
//Title Screen of Game
onEvent("home_button_e2", "click", function(event) {
  setScreen("EasterEgg");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Main-Menu.mp3", false);
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Pet-Game.mp3", false);
  console.log("I'm Back to 1985!");
});
//Return to main pafe "saddness"
onEvent("home_button_e1", "click", function(event) {
  setScreen("homeScreenWhite");
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Main-Menu.mp3", false);
  console.log("Back to the Time Machine!");
});
//Lets to clicker game begin! Que the epic music!!
onEvent("easter_egg_button", "click", function(event) {
  setScreen("EasterEgg2");
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Main-Menu.mp3", false);
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Pet-Game.mp3", false);
  console.log("Oh Snap!!");
});
//Returns to Easter Egg Main Menu
onEvent("Easter_Egg_Page", "click", function(event) {
  setScreen("EasterEgg");
  //stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Pet-Game.mp3", false);
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Main-Menu.mp3", false);
  console.log("This is too much 4 me!");
});
//Scrapped Search Box :( Limited on Data Base Code
onEvent("text_area_search", "change", function(event) {
  setScreen("homeScreen");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/search-box/nicememewebsite.mp3", false);
  console.log("text_area_search entered text: " + getText("text_area_search"));
});
onEvent("text_area_search_2", "change", function(event) {
  setScreen("homeScreen");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/search-box/nicememewebsite.mp3", false);
  console.log("text_area_search entered text: " + getText("text_area_search"));
});
//Another Easter Egg WOW! Except its one the main page, LoL
onEvent("Easter_Egg_Page_2", "click", function(event) {
  setScreen("search_box");
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/search-box/Eye-Catcher.mp3", false);
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/search-box/nice-meme-website.mp3", false);
  console.log("Wait...What?");
});
//Scrapped Search Box :()
onEvent("search_box", "click", function(event) {
  setScreen("homeScreen");
  console.log("Nice Meme Website!");
});
//Hidden Button that leads to home page
onEvent("submit_button", "click", function(event) {
  setScreen("homeScreen");
  console.log("Did you collect my information?!");
});
//Welcome Screen
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/alert/announcer_alert.mp3", false);
//Check Boxes With Sounds
onEvent("checkbox", "change", function(event) {
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/alert/medic_yes.mp3", false);
  showElement("submit_button");
  console.log("checkbox checked? " + getChecked("checkbox"));
});
onEvent("checkbox2", "change", function(event) {
  //playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/alert/engineer_boo.mp3", false);
  showElement("submit_button");
  console.log("checkbox checked? " + getChecked("checkbox"));
});
//You have reached the end of my code!
//I had fun making this! :D Funny or not this was a mistake from the last lesson
//since I did something completely different.
//Hopefully I will be able to return to this again!
//Maybe adding live data charts or something :)
//Oh the site does exit on your screen check it out below.
//(UPDATE)I forgot I have made the repository private :cri:

//==================END Anime Heaven APP======================//

//=====================Turtle Code================================\\
function updateColor(){
  var r = getNumber("red");
  var g = getNumber("green");
  var b = getNumber("blue");
  setProperty("colorNew","background-color",rgb(r,g,b));
    penRGB(r,g,b,1);

}
//takes user to and from turtle screen
onEvent("turtle", "click", function(){
  setScreen("turtle_game_APP");
  show();
});

onEvent("colorAdjust", "click", function(){
  setScreen("rgb_APP");
  hide();
});

onEvent("colorNew","click", function(){
  setScreen("turtle_game_APP");
  show();
});

//updates the color via the slider
onEvent("red", "change", function() {
  updateColor();
  
});

onEvent("green", "change", function() {
  updateColor();
  
});

onEvent("blue", "change", function() {
  updateColor();
  
});

//turtle screen's code
onEvent("arrowUp","click",function(){
  turnTo(0);
  moveForward(25);
});
 
onEvent("arrowDown","click",function(){
  turnTo(180);
  moveForward(25);
});
 
onEvent("arrowRight","click",function(){
   turnTo(90);
   moveForward(25);
});

 onEvent("arrowLeft","click",function(){
   turnTo(270);
   moveForward(25);
 });
//returns to home screen
onEvent("home1","click",function(){
  setScreen("|=AppSelection=|");
});

onEvent("home2", "click",function(){
  setScreen("|=AppSelection=|");
});

//resets the turtle drawing
onEvent("erase","click",function(){
  moveTo(160,240);
  penRGB(255,255,255,1);
  dot(1000);
 updateColor();
 turnTo(0);
});
//===========================END of Turtle Code===============================\\

//==================Aliens Catcher APP======================//
//Promts user for quit confirmation for the clicker
onEvent("finish", "click",function(){
  showElement("confirm");
  showElement("confirmN");
  showElement("confirmY");
  showElement("confirmL");
});

onEvent("confirmY","click",function(){
  setScreen("welcome_screen_Clicker_APP");
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
  setScreen("welcome_screen_Clicker_APP");
});

var lives = 3;
var score = 0;
var winScore = (randomNumber(20,30));
onEvent("start_button", "click", function() {
  setScreen("game_screen_Clicker_APP");
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
  setScreen("win_screen_Clicker_APP");
  
}
});
onEvent("background", "click", function() {
  lives = lives - 1;
  setText("number_lives",lives);
 if (lives == 0) {
  setScreen("lose_screen_Clicker_APP");
 }
  
});
onEvent("playAgain_button", "click", function() {
  setScreen("welcome_screen_Clicker_APP");
  
});
onEvent("tryAgain_button", "click", function() {
  setScreen("welcome_screen_Clicker_APP");
});
//==================END Aliens Catcher APP======================//

//==================Color Sleuth APP======================//
//Sets Global Varables for Player Score and TO Track Current Player
var randomButtonId;
var randButtonId = "button"+randomNumber(1,4);
var currentPlayer = 1;
var p1Score = 0;
var p2Score = 0;
//Starts The Game and Excutes Functions
onEvent("welcomeScreen_start_Color_APP", "click", function(){
  setScreen("gamePlay_screen_Color_APP");
  setBoard();
});
//Simlair to the code above except its from a function
onEvent("replay_btn", "click", playAgain);
//Checks a player has a certain amount of points to determine a win or lose display
function checkGameover(){
  if ((p1Score >= 16)) {
    setScreen("gameOver_screen_Color_APP");
    showElement("player1Win_label");
  } else if ((p1Score <= -16)) {
      setScreen("gameOver_screen_Color_APP");
      showElement("player2Win_label");
  } else if ((p2Score >= 16)) {
    setScreen("gameOver_screen_Color_APP");
    showElement("player2Win_label");
  } else if ((p2Score <= -16)) {
      setScreen("gameOver_screen_Color_APP");
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
  setScreen("gamePlay_screen_Color_APP");
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
//==================END Color Sleuth APP======================//
