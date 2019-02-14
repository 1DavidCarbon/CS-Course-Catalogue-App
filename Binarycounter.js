// https://studio.code.org/projects/applab/If5-TBDI7wwr9elYaIYvd_NlYnXioT0iGJlpilNkzpM/view
var onezero = 0;
onEvent("MinecraftStart2", "click", function() {
  setScreen("screen2");
});
onEvent("MinecraftStart1","click", function() {
  setScreen("MinecraftGameScreen");
});

onEvent("MinecraftButtonOnOff", "click", function() {

  if (onezero== 0) {
    showElement("MinecraftLighton");
    hideElement("MinecraftLightOff");
    onezero=1;
  } else {
    hideElement("MinecraftLighton");
    showElement("MinecraftLightOff");
    onezero=0;
  }
  
  
});

onEvent("Minecraftnextpage", "click", function() {
  setScreen("MinecraftHomeScreen");
});
