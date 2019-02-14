var verb;
var song;
var verb2;
var noun;
var adj;
onEvent("nextButton", "click", function(){
setScreen("madlipScreen");
var verb = getText("verbInput");
var song = getText("songInput");
var verb2 = getText("verbInput2");
var noun = getText("nounInput");
var adj = getText("adjInput");
var madliptext = (((("Waking up in the morning can be a difficult task!\n 1. Make sure to wake up on time and "+verb)+" everyday!\n 2. While in the shower, put on some ")+song+"and make sure to "+verb2+".\n 3. Eat two ")+noun+" and quickly make your way out.\n 4. Make your way to ")+adj+" school/work!";
setText("madlip", madliptext);
});
onEvent("backButton", "click", function(){
setScreen("madlibInput");
});
