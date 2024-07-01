gdjs.GameCode = {};
gdjs.GameCode.GDPoisonObjects1= [];
gdjs.GameCode.GDPoisonObjects2= [];
gdjs.GameCode.GDPoisonObjects3= [];
gdjs.GameCode.GDPoisonObjects4= [];
gdjs.GameCode.GDPoisonObjects5= [];
gdjs.GameCode.GDPoisonObjects6= [];
gdjs.GameCode.GDroadObjects1= [];
gdjs.GameCode.GDroadObjects2= [];
gdjs.GameCode.GDroadObjects3= [];
gdjs.GameCode.GDroadObjects4= [];
gdjs.GameCode.GDroadObjects5= [];
gdjs.GameCode.GDroadObjects6= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDScoreTextObjects5= [];
gdjs.GameCode.GDScoreTextObjects6= [];
gdjs.GameCode.GDHighScoreObjects1= [];
gdjs.GameCode.GDHighScoreObjects2= [];
gdjs.GameCode.GDHighScoreObjects3= [];
gdjs.GameCode.GDHighScoreObjects4= [];
gdjs.GameCode.GDHighScoreObjects5= [];
gdjs.GameCode.GDHighScoreObjects6= [];
gdjs.GameCode.GDpineObjects1= [];
gdjs.GameCode.GDpineObjects2= [];
gdjs.GameCode.GDpineObjects3= [];
gdjs.GameCode.GDpineObjects4= [];
gdjs.GameCode.GDpineObjects5= [];
gdjs.GameCode.GDpineObjects6= [];
gdjs.GameCode.GDSnailObjects1= [];
gdjs.GameCode.GDSnailObjects2= [];
gdjs.GameCode.GDSnailObjects3= [];
gdjs.GameCode.GDSnailObjects4= [];
gdjs.GameCode.GDSnailObjects5= [];
gdjs.GameCode.GDSnailObjects6= [];
gdjs.GameCode.GDTutorialTextObjects1= [];
gdjs.GameCode.GDTutorialTextObjects2= [];
gdjs.GameCode.GDTutorialTextObjects3= [];
gdjs.GameCode.GDTutorialTextObjects4= [];
gdjs.GameCode.GDTutorialTextObjects5= [];
gdjs.GameCode.GDTutorialTextObjects6= [];
gdjs.GameCode.GDWoodBackgroundObjects1= [];
gdjs.GameCode.GDWoodBackgroundObjects2= [];
gdjs.GameCode.GDWoodBackgroundObjects3= [];
gdjs.GameCode.GDWoodBackgroundObjects4= [];
gdjs.GameCode.GDWoodBackgroundObjects5= [];
gdjs.GameCode.GDWoodBackgroundObjects6= [];
gdjs.GameCode.GDForestBackgroundObjects1= [];
gdjs.GameCode.GDForestBackgroundObjects2= [];
gdjs.GameCode.GDForestBackgroundObjects3= [];
gdjs.GameCode.GDForestBackgroundObjects4= [];
gdjs.GameCode.GDForestBackgroundObjects5= [];
gdjs.GameCode.GDForestBackgroundObjects6= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setString("Touch anywhere On screen to jump/start");
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setTextAlignment("center");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Highscore", "Highscore");
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDHighScoreObjects1 */
{gdjs.evtTools.storage.readNumberFromJSONFile("Highscore", "Highscore", runtimeScene, runtimeScene.getScene().getVariables().get("TempSaveValue"));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("TempSaveValue")));
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects1[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects2);
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Playing");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDSnailObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSnailObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Preparing";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSnailObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDSnailObjects4[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSnailObjects4[k] = gdjs.GameCode.GDSnailObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDSnailObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10185860);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.mp3", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10187068);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects3);
{for(var i = 0, len = gdjs.GameCode.GDSnailObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSnailObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSnailObjects3Objects = Hashtable.newFrom({"Snail": gdjs.GameCode.GDSnailObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDpineObjects3Objects = Hashtable.newFrom({"pine": gdjs.GameCode.GDpineObjects3});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).add(Math.round(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 100));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects3);
gdjs.copyArray(runtimeScene.getObjects("pine"), gdjs.GameCode.GDpineObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSnailObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDpineObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDpineObjects3 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(500);
}{for(var i = 0, len = gdjs.GameCode.GDpineObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDpineObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Bonus.mp3", false, 100, 0.5);
}}

}


};gdjs.GameCode.mapOfEmptyGDWoodBackgroundObjects = Hashtable.newFrom({"WoodBackground": []});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWoodBackgroundObjects4Objects = Hashtable.newFrom({"WoodBackground": gdjs.GameCode.GDWoodBackgroundObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWoodBackgroundObjects4Objects = Hashtable.newFrom({"WoodBackground": gdjs.GameCode.GDWoodBackgroundObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects4Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDroadObjects4Objects = Hashtable.newFrom({"road": gdjs.GameCode.GDroadObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDpineObjects5Objects = Hashtable.newFrom({"pine": gdjs.GameCode.GDpineObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDpineObjects4Objects = Hashtable.newFrom({"pine": gdjs.GameCode.GDpineObjects4});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDroadObjects4, gdjs.GameCode.GDroadObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDroadObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDroadObjects5[i].getVariableNumber(gdjs.GameCode.GDroadObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDroadObjects5[k] = gdjs.GameCode.GDroadObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDroadObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDroadObjects5 */
gdjs.GameCode.GDpineObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDpineObjects5Objects, (( gdjs.GameCode.GDroadObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDroadObjects5[0].getPointX("RewardUp")), (( gdjs.GameCode.GDroadObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDroadObjects5[0].getPointY("RewardUp")), "");
}{for(var i = 0, len = gdjs.GameCode.GDpineObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDpineObjects5[i].setScale(gdjs.GameCode.GDpineObjects5[i].getScaleMean() * (60 / (Math.max((gdjs.GameCode.GDpineObjects5[i].getWidth()), (gdjs.GameCode.GDpineObjects5[i].getHeight())))));
}
}}

}


{

/* Reuse gdjs.GameCode.GDroadObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDroadObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDroadObjects4[i].getVariableNumber(gdjs.GameCode.GDroadObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDroadObjects4[k] = gdjs.GameCode.GDroadObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDroadObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDroadObjects4 */
gdjs.GameCode.GDpineObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDpineObjects4Objects, (( gdjs.GameCode.GDroadObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDroadObjects4[0].getPointX("RewardDown")), (( gdjs.GameCode.GDroadObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDroadObjects4[0].getPointY("RewardDown")), "");
}{for(var i = 0, len = gdjs.GameCode.GDpineObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDpineObjects4[i].setScale(gdjs.GameCode.GDpineObjects4[i].getScaleMean() * (60 / (Math.max((gdjs.GameCode.GDpineObjects4[i].getWidth()), (gdjs.GameCode.GDpineObjects4[i].getHeight())))));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects5Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects5});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects5);
gdjs.copyArray(runtimeScene.getObjects("WoodBackground"), gdjs.GameCode.GDWoodBackgroundObjects5);
gdjs.GameCode.GDPoisonObjects5.length = 0;

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("SpawneddangerInField")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("dangerInField"));
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects5Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDSnailObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDSnailObjects5[0].getPointX("")), (( gdjs.GameCode.GDWoodBackgroundObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDWoodBackgroundObjects5[0].getAABBTop()), "");
}{runtimeScene.getScene().getVariables().get("SpawneddangerInField").add(1);
}{for(var i = 0, len = gdjs.GameCode.GDPoisonObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPoisonObjects5[i].setScale(gdjs.GameCode.GDPoisonObjects5[i].getScaleMean() * (100 / (Math.max((gdjs.GameCode.GDPoisonObjects5[i].getWidth()), (gdjs.GameCode.GDPoisonObjects5[i].getHeight())))));
}
}
{ //Subevents: 
gdjs.GameCode.eventsList8(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("SpawneddangerInField").setNumber(0);
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects4);
gdjs.copyArray(runtimeScene.getObjects("WoodBackground"), gdjs.GameCode.GDWoodBackgroundObjects4);
gdjs.GameCode.GDPoisonObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects4Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDSnailObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDSnailObjects4[0].getPointX("")), (( gdjs.GameCode.GDWoodBackgroundObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDWoodBackgroundObjects4[0].getAABBTop()), "");
}{for(var i = 0, len = gdjs.GameCode.GDPoisonObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPoisonObjects4[i].setScale(gdjs.GameCode.GDPoisonObjects4[i].getScaleMean() * (100 / (Math.max((gdjs.GameCode.GDPoisonObjects4[i].getWidth()), (gdjs.GameCode.GDPoisonObjects4[i].getHeight())))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects4);
gdjs.copyArray(runtimeScene.getObjects("WoodBackground"), gdjs.GameCode.GDWoodBackgroundObjects4);
gdjs.GameCode.GDroadObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDroadObjects4Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDSnailObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDSnailObjects4[0].getPointX("")), (( gdjs.GameCode.GDWoodBackgroundObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDWoodBackgroundObjects4[0].getAABBTop()) - 64, "");
}{for(var i = 0, len = gdjs.GameCode.GDroadObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDroadObjects4[i].returnVariable(gdjs.GameCode.GDroadObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(0, 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDroadObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDroadObjects4[i].setScale(gdjs.GameCode.GDroadObjects4[i].getScaleMean() * (125 / (Math.max((gdjs.GameCode.GDroadObjects4[i].getWidth()), (gdjs.GameCode.GDroadObjects4[i].getHeight())))));
}
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("dangerInField").setNumber(gdjs.randomInRange(1, 1 + Math.round(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 3000, 0, 4))));
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSnailObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDSnailObjects4[i].getBehavior("PlatformerObject").getMaxSpeed() < 800 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSnailObjects4[k] = gdjs.GameCode.GDSnailObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDSnailObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDSnailObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDSnailObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDSnailObjects4[i].getBehavior("PlatformerObject").setMaxSpeed((gdjs.GameCode.GDSnailObjects4[i].getBehavior("PlatformerObject").getMaxSpeed()) + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 6);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 0.7;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 30);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects4);
gdjs.copyArray(runtimeScene.getObjects("WoodBackground"), gdjs.GameCode.GDWoodBackgroundObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWoodBackgroundObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDWoodBackgroundObjects4[i].getX() < (( gdjs.GameCode.GDSnailObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDSnailObjects4[0].getPointX("")) - (gdjs.GameCode.GDWoodBackgroundObjects4[i].getWidth()) - 100 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWoodBackgroundObjects4[k] = gdjs.GameCode.GDWoodBackgroundObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDWoodBackgroundObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDWoodBackgroundObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDWoodBackgroundObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDWoodBackgroundObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WoodBackground"), gdjs.GameCode.GDWoodBackgroundObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDWoodBackgroundObjects) < 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWoodBackgroundObjects4Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDWoodBackgroundObjects4 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWoodBackgroundObjects4Objects, (( gdjs.GameCode.GDWoodBackgroundObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDWoodBackgroundObjects4[0].getX()) + (( gdjs.GameCode.GDWoodBackgroundObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDWoodBackgroundObjects4[0].getWidth()), (( gdjs.GameCode.GDWoodBackgroundObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDWoodBackgroundObjects4[0].getY()), "");
}{for(var i = 0, len = gdjs.GameCode.GDWoodBackgroundObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDWoodBackgroundObjects4[i].setWidth(1280);
}
}{for(var i = 0, len = gdjs.GameCode.GDWoodBackgroundObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDWoodBackgroundObjects4[i].setHeight(224);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "obstacle_spawn") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 2));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}
{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSnailObjects2Objects = Hashtable.newFrom({"Snail": gdjs.GameCode.GDSnailObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2ObjectsGDgdjs_9546GameCode_9546GDroadObjects2ObjectsGDgdjs_9546GameCode_9546GDpineObjects2Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects2, "road": gdjs.GameCode.GDroadObjects2, "pine": gdjs.GameCode.GDpineObjects2});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Poison"), gdjs.GameCode.GDPoisonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSnailObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPoisonObjects2 */
/* Reuse gdjs.GameCode.GDSnailObjects2 */
gdjs.copyArray(runtimeScene.getObjects("pine"), gdjs.GameCode.GDpineObjects2);
gdjs.copyArray(runtimeScene.getObjects("road"), gdjs.GameCode.GDroadObjects2);
{for(var i = 0, len = gdjs.GameCode.GDSnailObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSnailObjects2[i].getBehavior("PlatformerObject").abortJump();
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Dead");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "obstacle_spawn");
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2ObjectsGDgdjs_9546GameCode_9546GDroadObjects2ObjectsGDgdjs_9546GameCode_9546GDpineObjects2Objects);
}{for(var i = 0, len = gdjs.GameCode.GDPoisonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoisonObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDroadObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDroadObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDpineObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDpineObjects2[i].clearForces();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 80, 1);
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ForestBackground"), gdjs.GameCode.GDForestBackgroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects3);
{for(var i = 0, len = gdjs.GameCode.GDForestBackgroundObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDForestBackgroundObjects3[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 4);
}
}{for(var i = 0, len = gdjs.GameCode.GDSnailObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSnailObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Playing";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDTutorialTextObjects2, gdjs.GameCode.GDTutorialTextObjects3);

{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects3[i].setString("Touch anywhere On screen to restart");
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDTutorialTextObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setTextAlignment("center");
}
}}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10205300);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setString("Press any key to restart the game");
}
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects2[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Highscore", "Highscore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Dead";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ForestBackground"), gdjs.GameCode.GDForestBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Snail"), gdjs.GameCode.GDSnailObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects1[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDForestBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDForestBackgroundObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 4);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDSnailObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSnailObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPoisonObjects1.length = 0;
gdjs.GameCode.GDPoisonObjects2.length = 0;
gdjs.GameCode.GDPoisonObjects3.length = 0;
gdjs.GameCode.GDPoisonObjects4.length = 0;
gdjs.GameCode.GDPoisonObjects5.length = 0;
gdjs.GameCode.GDPoisonObjects6.length = 0;
gdjs.GameCode.GDroadObjects1.length = 0;
gdjs.GameCode.GDroadObjects2.length = 0;
gdjs.GameCode.GDroadObjects3.length = 0;
gdjs.GameCode.GDroadObjects4.length = 0;
gdjs.GameCode.GDroadObjects5.length = 0;
gdjs.GameCode.GDroadObjects6.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects5.length = 0;
gdjs.GameCode.GDScoreTextObjects6.length = 0;
gdjs.GameCode.GDHighScoreObjects1.length = 0;
gdjs.GameCode.GDHighScoreObjects2.length = 0;
gdjs.GameCode.GDHighScoreObjects3.length = 0;
gdjs.GameCode.GDHighScoreObjects4.length = 0;
gdjs.GameCode.GDHighScoreObjects5.length = 0;
gdjs.GameCode.GDHighScoreObjects6.length = 0;
gdjs.GameCode.GDpineObjects1.length = 0;
gdjs.GameCode.GDpineObjects2.length = 0;
gdjs.GameCode.GDpineObjects3.length = 0;
gdjs.GameCode.GDpineObjects4.length = 0;
gdjs.GameCode.GDpineObjects5.length = 0;
gdjs.GameCode.GDpineObjects6.length = 0;
gdjs.GameCode.GDSnailObjects1.length = 0;
gdjs.GameCode.GDSnailObjects2.length = 0;
gdjs.GameCode.GDSnailObjects3.length = 0;
gdjs.GameCode.GDSnailObjects4.length = 0;
gdjs.GameCode.GDSnailObjects5.length = 0;
gdjs.GameCode.GDSnailObjects6.length = 0;
gdjs.GameCode.GDTutorialTextObjects1.length = 0;
gdjs.GameCode.GDTutorialTextObjects2.length = 0;
gdjs.GameCode.GDTutorialTextObjects3.length = 0;
gdjs.GameCode.GDTutorialTextObjects4.length = 0;
gdjs.GameCode.GDTutorialTextObjects5.length = 0;
gdjs.GameCode.GDTutorialTextObjects6.length = 0;
gdjs.GameCode.GDWoodBackgroundObjects1.length = 0;
gdjs.GameCode.GDWoodBackgroundObjects2.length = 0;
gdjs.GameCode.GDWoodBackgroundObjects3.length = 0;
gdjs.GameCode.GDWoodBackgroundObjects4.length = 0;
gdjs.GameCode.GDWoodBackgroundObjects5.length = 0;
gdjs.GameCode.GDWoodBackgroundObjects6.length = 0;
gdjs.GameCode.GDForestBackgroundObjects1.length = 0;
gdjs.GameCode.GDForestBackgroundObjects2.length = 0;
gdjs.GameCode.GDForestBackgroundObjects3.length = 0;
gdjs.GameCode.GDForestBackgroundObjects4.length = 0;
gdjs.GameCode.GDForestBackgroundObjects5.length = 0;
gdjs.GameCode.GDForestBackgroundObjects6.length = 0;

gdjs.GameCode.eventsList19(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
