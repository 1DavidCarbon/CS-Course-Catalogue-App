//==================Mad Lib APP======================//
var verb;
var song;
var verb2;
var noun;
var adj;
//Reset APP
var verbR = "";
var songR = "";
var verb2R = "";
var nounR = "";
var adjR = "";
var madliptextR = (((("Waking up in the morning can be a difficult task!\n 1. Make sure to wake up on time and "+verbR)+" everyday!\n 2. While in the shower, put on some ")+songR+"and make sure to "+verb2R+".\n 3. Eat two ")+nounR+" and quickly make your way out.\n 4. Make your way to ")+adjR+" school/work!";

onEvent("nextButton", "click", function(){
setScreen("madlipScreen_APP");
var verb = getText("verbInput");
var song = getText("songInput");
var verb2 = getText("verbInput2");
var noun = getText("nounInput");
var adj = getText("adjInput");
var madliptext = (((("Waking up in the morning can be a difficult task!\n 1. Make sure to wake up on time and "+verb)+" everyday!\n 2. While in the shower, put on some ")+song+"and make sure to "+verb2+".\n 3. Eat two ")+noun+" and quickly make your way out.\n 4. Make your way to ")+adj+" school/work!";
setText("madlip", madliptext);
});
onEvent("backButton", "click", playMadAgain);
function playMadAgain(){
  setText("verbInput", verbR);
  setText("songInput", songR);
  setText("verbInput2", verb2R);
  setText("nounInput", nounR);
  setText("adjInput", adjR);
  setText("madlip", madliptextR);
  setScreen("madlibInput_APP");
}
//==================END Mad Lib APP======================//
