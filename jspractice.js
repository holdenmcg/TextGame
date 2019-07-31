
var displayArea = document.getElementById('displayArea');
var arrayIndex;
var sceneArray;
const buttonString = 'button';
var buttonID;
var displayAreaSrc;
var firstParse=true;
var sceneArray;
var sceneToArray = new Map();
var pushedButton;
sceneToArray.set('openingScene.txt', ['North Door', 'East Door', 'South Door', 'West Door']);
sceneToArray.set('North Door.txt', ['Strange Chamber', 'Long Hallway']);
sceneToArray.set('Strange Chamber.txt', ['Console', 'Window', 'Storage']);
sceneToArray.set('Console.txt', ['Exit', 'Unlock']);
console.log(sceneToArray);
function clickFunction(elementID){
   //Set the display area, get the index of the scene array based on which button was pressed,
   //and get the scene array itself. Set display area to new scene text.
    var displayArea = document.getElementById('displayArea');
    arrayIndex = document.getElementById(elementID).id.slice(-1); //Determines which button got pressed.
    console.log(arrayIndex);
//    if(firstparse){
//        displayareasrc = displayarea.src.replace(/^.*[\\\/]/, '');
//        firstparse = false;
//    }  
        displayAreaSrc = document.getElementById(elementID).name;
    

    
    console.log("new source, aka button just clicked, = " + displayAreaSrc);
    sceneArray = sceneToArray.get(displayAreaSrc);//CHANIGING, POSSIBLE ERROR
    console.log(sceneArray);
    displayArea.src = displayAreaSrc;//sceneArray[arrayIndex] + '.txt';
    console.log("Accessing area: " + displayAreaSrc);

     //TODO: Iterate through buttons and set up new ones

     sceneArray = sceneToArray.get(displayAreaSrc);
     for(var i = 0; i < sceneArray.length; i++){
        console.log(sceneArray.length);
        buttonID = buttonString + '' + i;
        console.log(buttonID);
        document.getElementById(buttonID).style.display="block";
        document.getElementById(buttonID).name = sceneArray[i] + '.txt';
        document.getElementById(buttonID).textContent = sceneArray[i];
        console.log(sceneArray[i]);
     }

     for(var k = 3; k >= i; k--){
        buttonID = buttonString + '' + k;
        console.log(buttonID);
        document.getElementById(buttonID).style.display="none";
     }
}


 
