// Author: CAM (AMDG) 2/14/2021

var playerLevels = 50;

if (playerLevels >= 1 && playerLevel <= 9) {
    console.log("You are a beginner level");
} else if (playerLevels >= 10 && playerLevels <= 19 ){
    console.log("You are a low level");


}else if(playerLevels >= 20-29 ) {
    console.log("You are medium level");
}else if(playerLevels >= 30-39){
    console.log("You are high level");
}else if(playerLevels >= 40-50){
    console.log("You are expert level");
} else {
    console.log("You don't appear in our records.")
}
