//https://studio.code.org/projects/applab/IfzztFbVgUKnBy4Ug3tsqohw-oZUZJkDxSusNLdwhNI
var count = 0;
var lives = 3;
onEvent("start_button", "click", function() {
  setScreen("game_screen");
});
onEvent("apple", "click", function() {
  setPosition("apple", randomNumber(50,280), randomNumber(50, 350));
  count = count + 1;
  setText("total_score", count);
  if (count == 20) {
    setScreen("win_screen");
    //setText("finalScoreLabel", count);
  }
});
onEvent("background", "click", function() {
  lives = lives - 1;
  setText("number_lives", lives);
  if (lives == 0) {
  setScreen("lose_screen");
  //setText("finalScoreLabel", count);
  }
});
onEvent("playAgain_button", "click", function() {
  setScreen("welcome_screen");
    count = 0;
    lives = 3;
      setText("total_score", 0);
      setText("number_lives", 3);
});
onEvent("tryAgain_button", "click", function() {
  setScreen("welcome_screen");
    count = 0;
    lives = 3;
      setText("total_score", 0);
      setText("number_lives", 3);
});
//Reused Code
onEvent("main_APP", "click", function(event) {
  setScreen("welcomeScreen");
});
onEvent("main_GAME", "click", function(event) {
  setScreen("welcome_screen");
});
onEvent("clicker_GAME", "click", function(event) {
  setScreen("welcome_screen");
});
onEvent("clicker_GAME_W", "click", function(event) {
  setScreen("welcome_screen");
});
//Oh would you look @ that.
//It seems you saw through my easter egg! :D
//Well try to explore it if you like too.
onEvent("pageSlimeDattaKen", "click", function(event) {
  setScreen("iSlimeDattaKen");
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iSlimeDattaKen/We-Took-Each-Others-Hand.mp3", false);
  console.log("Loading Slime Datta Ken from Dark Theme!");
});
onEvent("pageSlimeDattaKen_2", "click", function(event) {
  setScreen("iSlimeDattaKen-W");
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iSlimeDattaKen/We-Took-Each-Others-Hand.mp3", false);
  console.log("Loading Slime Datta Ken from Light Theme!");
});
//Home Button
onEvent("iSlimeDattaKen-Button", "click", function(event) {
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iSlimeDattaKen/We-Took-Each-Others-Hand.mp3", false);
  setScreen("homeScreenWhite");
  console.log("Returning to Home Light Theme!");
});
onEvent("iSlimeDattaKen-Button-W", "click", function(event) {
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iSlimeDattaKen/We-Took-Each-Others-Hand.mp3", false);
  setScreen("homeScreen");
  console.log("Returning to Home Dark Theme!");
});
//Video Page
onEvent("pageKodomowoUndekure", "click", function(event) {
  setScreen("iKodomowoUndekure");
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iKodomowoUndekure/Watashi-Tachi-wa-Koko-ni-Imasu-Friend-Shitai-Gekichuu-BGM.mp3", false);
  console.log("Loading Kodomo wo Undekure from Dark Theme!");
});
onEvent("pageKodomowoUndekure_2", "click", function(event) {
  setScreen("iKodomowoUndekure-W");
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iKodomowoUndekure/Watashi-Tachi-wa-Koko-ni-Imasu-Friend-Shitai-Gekichuu-BGM.mp3", false);
  console.log("Loading Kodomo wo Undekure from Light Theme!");
});
//Home Button
onEvent("iKodomowoUndekure-Button", "click", function(event) {
  setScreen("homeScreen");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iKodomowoUndekure/Watashi-Tachi-wa-Koko-ni-Imasu-Friend-Shitai-Gekichuu-BGM.mp3", false);
  console.log("Returning to Home Light Theme!");
});
onEvent("iKodomowoUndekure-Button-W", "click", function(event) {
  setScreen("homeScreenWhite");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iKodomowoUndekure/Watashi-Tachi-wa-Koko-ni-Imasu-Friend-Shitai-Gekichuu-BGM.mp3", false);
  console.log("Returning to Home Light Theme!");
});
//Video Page
onEvent("pageTokyoGhoul", "click", function(event) {
setScreen("iTokyoGhoul");
playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iTokyoGhoul/To-light.mp3", false);
console.log("Loading Tokyo Ghoul from Dark Theme!");
});
onEvent("pageTokyoGhoul_2", "click", function(event) {
setScreen("iTokyoGhoul-W");
playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iTokyoGhoul/To-light.mp3", false);
console.log("Loading Tokyo Ghoul from Light Theme!");
});
//Home Button
onEvent("iTokyoGhoul-Button", "click", function(event) {
  setScreen("homeScreen");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iTokyoGhoul/To-light.mp3", false);
  console.log("Returning to Home Dark Theme!");
});
onEvent("iTokyoGhoul-Button-W", "click", function(event) {
  setScreen("homeScreenWhite");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iTokyoGhoul/To-light.mp3", false);
  console.log("Returning to Home Light Theme!");
});
//Video Page
onEvent("pageJingai-san", "click", function(event) {
  setScreen("iJingai-san-W");
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iJingai-san/Wonder-Carte.mp3", false);
  console.log("Loading Jingai-san from Dark Theme!");
});
onEvent("pageJingai-san_2", "click", function(event) {
  setScreen("iJingai-san");
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iJingai-san/Wonder-Carte.mp3", false);
  console.log("Loading Jingai-san from Light Theme!");
});
//Home Button
onEvent("iJingai-san-Button", "click", function(event) {
  setScreen("homeScreenWhite");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iJingai-san/Wonder-Carte.mp3", false);
  console.log("Returning to Home Light Theme!");
});
onEvent("iJingai-san-Button-W", "click", function(event) {
  setScreen("homeScreen");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/video-pages/iJingai-san/Wonder-Carte.mp3", false);
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
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/404/Snap.mp3",false);
  console.log("Loading 404!");
});
onEvent("page_black_clover_d", "mouseup", function(event) {
  setScreen("404");
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/404/Snap.mp3",false);
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
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Main-Menu.mp3", false);
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Pet-Game.mp3", false);
  console.log("I'm Back to 1985!");
});
//Return to main pafe "saddness"
onEvent("home_button_e1", "click", function(event) {
  setScreen("homeScreenWhite");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Main-Menu.mp3", false);
  console.log("Back to the Time Machine!");
});
//Lets to clicker game begin! Que the epic music!!
onEvent("easter_egg_button", "click", function(event) {
  setScreen("EasterEgg2");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Main-Menu.mp3", false);
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Pet-Game.mp3", false);
  console.log("Oh Snap!!");
});
//Returns to Easter Egg Main Menu
onEvent("Easter_Egg_Page", "click", function(event) {
  setScreen("EasterEgg");
  stopSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Pet-Game.mp3", false);
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/easter-egg-game/Main-Menu.mp3", false);
  console.log("This is too much 4 me!");
});
//Scrapped Search Box :( Limited on Data Base Code
onEvent("text_area_search", "change", function(event) {
  setScreen("homeScreen");
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/search-box/nicememewebsite.mp3", false);
  console.log("text_area_search entered text: " + getText("text_area_search"));
});
onEvent("text_area_search_2", "change", function(event) {
  setScreen("homeScreen");
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/search-box/nicememewebsite.mp3", false);
  console.log("text_area_search entered text: " + getText("text_area_search"));
});
//Another Easter Egg WOW! Except its one the main page, LoL
onEvent("Easter_Egg_Page_2", "click", function(event) {
  setScreen("search_box");
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/search-box/Eye-Catcher.mp3", false);
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/search-box/nice-meme-website.mp3", false);
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
playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/alert/announcer_alert.mp3", false);
//Check Boxes With Sounds
onEvent("checkbox", "change", function(event) {
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/alert/medic_yes.mp3", false);
  showElement("submit_button");
  console.log("checkbox checked? " + getChecked("checkbox"));
});
onEvent("checkbox2", "change", function(event) {
  playSound("https://davidcarbon.ml/my-Projects/code-org/Lesson-3-Building-an-App-Multi-Screen-App/alert/engineer_boo.mp3", false);
  showElement("submit_button");
  console.log("checkbox checked? " + getChecked("checkbox"));
});
