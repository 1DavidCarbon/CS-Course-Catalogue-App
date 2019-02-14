//=====================This is the code for the turtle control section================================\\
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

//resets the turtle drawing
onEvent("erase","click",function(){
  moveTo(160,240);
  penRGB(255,255,255,1);
  dot(1000);
 updateColor();
 turnTo(0);
});
//===========================end of turtle code===============================\\
