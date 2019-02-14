//https://studio.code.org/projects/applab/FFmDepnXkfh1URrI1KmrUg8orMCixw1Dw35_NnoyW2A
//Welcome to my phone app

//==================On Screen Home======================//

//============ Clock Time =============//
//=========== Starts Here =============//
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
//============ Clock Time =============//
//============ Ends Here ==============//


//==================On Screen Home======================//


// This is the code for the turtle control section
function updateColor(){
  var r = getNumber("red");
  var g = getNumber("green");
  var b = getNumber("blue");
  setProperty("colorNew","background-color",rgb(r,g,b));
    penRGB(r,g,b,1);

}
//takes user to and from turtle screen
onEvent("turtle", "click", function(){
  setScreen("turtledrawing");
  show();
});

onEvent("colorAdjust", "click", function(){
  setScreen("RGBadj");
  hide();
});

onEvent("colorNew","click", function(){
  setScreen("turtledrawing");
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
  setScreen("home_screen");
});

onEvent("home2", "click",function(){
  setScreen("home_screen");
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

