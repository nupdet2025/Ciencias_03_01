gdjs.Introdu_231_227o_9503Code = {};
gdjs.Introdu_231_227o_9503Code.localVariables = [];
gdjs.Introdu_231_227o_9503Code.GDbackgroundObjects1= [];
gdjs.Introdu_231_227o_9503Code.GDbackgroundObjects2= [];
gdjs.Introdu_231_227o_9503Code.GDPainelObjects1= [];
gdjs.Introdu_231_227o_9503Code.GDPainelObjects2= [];
gdjs.Introdu_231_227o_9503Code.GDbtn_9595nextObjects1= [];
gdjs.Introdu_231_227o_9503Code.GDbtn_9595nextObjects2= [];
gdjs.Introdu_231_227o_9503Code.GDCursorObjects1= [];
gdjs.Introdu_231_227o_9503Code.GDCursorObjects2= [];
gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects1= [];
gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects2= [];
gdjs.Introdu_231_227o_9503Code.GDAcertoObjects1= [];
gdjs.Introdu_231_227o_9503Code.GDAcertoObjects2= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto2Objects1= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto2Objects2= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto3Objects1= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto3Objects2= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto4Objects1= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto4Objects2= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto5Objects1= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto5Objects2= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto6Objects1= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto6Objects2= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto7Objects1= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto7Objects2= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto8Objects1= [];
gdjs.Introdu_231_227o_9503Code.GDAcerto8Objects2= [];


gdjs.Introdu_231_227o_9503Code.asyncCallback16421068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Introdu_231_227o_9503Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_02", false);
}gdjs.Introdu_231_227o_9503Code.localVariables.length = 0;
}
gdjs.Introdu_231_227o_9503Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Introdu_231_227o_9503Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Introdu_231_227o_9503Code.asyncCallback16421068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Introdu_231_227o_9503Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Introdu_231_227o_9503Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Introdu_231_227o_9503Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227o_9503Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Introdu_231_227o_9503Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Introdu_231_227o_9503Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227o_9503Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Introdu_231_227o_9503Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Introdu_231_227o_9503Code.GDCursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects1[k] = gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Introdu_231_227o_9503Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Introdu_231_227o_9503Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Introdu_231_227o_9503Code.GDbackgroundObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDbackgroundObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDPainelObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDPainelObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDCursorObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDCursorObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcertoObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcertoObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto2Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto2Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto3Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto3Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto4Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto4Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto5Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto5Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto6Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto6Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto7Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto7Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto8Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto8Objects2.length = 0;

gdjs.Introdu_231_227o_9503Code.eventsList1(runtimeScene);
gdjs.Introdu_231_227o_9503Code.GDbackgroundObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDbackgroundObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDPainelObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDPainelObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDCursorObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDCursorObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcertoObjects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcertoObjects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto2Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto2Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto3Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto3Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto4Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto4Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto5Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto5Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto6Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto6Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto7Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto7Objects2.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto8Objects1.length = 0;
gdjs.Introdu_231_227o_9503Code.GDAcerto8Objects2.length = 0;


return;

}

gdjs['Introdu_231_227o_9503Code'] = gdjs.Introdu_231_227o_9503Code;
