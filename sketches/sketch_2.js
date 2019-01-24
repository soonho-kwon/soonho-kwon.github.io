//made by soonho kwon for esther jeon

var active = true;
var mainFont = null;
var x, y;
var pointX, pointY;
var xhold;
var currentX = 0;
var stopCount = 0;
var stretchDict = {"A":[], "B":[2, 3, 4, 5, 6, 10, 11, 12, 16, 17, 18], "C":[], "D":[2, 3, 4, 6, 7, 8], "E":[0, 1, 4, 5, 8, 9], "F":[2, 3, 6, 7], "G":[], "H":[0, 1, 2, 3, 10, 11], "I":[], "J":[], "K":[], "L":[0, 1], "M":[], "N":[], "O":[], "P":[2, 3, 4, 6, 7, 8], "Q":[], "R":[0, 1, 2, 3, 4, 9, 13, 14, 15], "S":[], "T":[0, 1], "U":[], "V":[], "W":[], "X":[], "Y":[], "Z":[]};

var elong = 0;
var letters = [];
var letterWidth = 0;
var letterSize = 100;
var vertexpoints = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  noStroke();
  currentX = 10;
  x = 50;
  y = 100;

  opentype.load('../fonts/CircularStd-Book.otf', function(err, font) {
    if (err) {
        alert('Could not load font: ' + err);
    } else {
      mainFont = font;
    }
  });
}

function draw() {

  if (keyIsPressed && keyCode > 96 && keyCode < 123) {
    if (active){
      fill(255);
      rect(x + 9, y - letterSize + 28, letterWidth + 5, letterSize - 25);
      var let = key.toUpperCase();
      var name = mainFont.getPath(let, x, y, letterSize);

      var zCount = 0;
      var lBound = name.commands[0].x;
      var uBound = 0;

      fill(0);
      beginShape();
      for(var i = 0; i < name.commands.length; i++) {
        var cmd = name.commands[i];
        if (let in stretchDict){ //dragged
          if (stretchDict[let].includes(i)){
            if (cmd.type == "C"){
              bezierVertex(cmd.x1 + elong, cmd.y1, cmd.x2 + elong, cmd.y2, cmd.x + elong, cmd.y);
              if (cmd.x2 + elong > uBound){
                uBound = cmd.x2 + elong;
                currentX = uBound;
              }
            }
            else if (i > 0 && cmd.type == "M"){
              beginContour();
              vertex(cmd.x + elong, cmd.y);
            }
            else if (cmd.type == "Z"){
              if (zCount > 0){
                endContour();
              }
              zCount += 1;
            }
            else{
              pointX = cmd.x + elong;
              pointY = cmd.y;
              vertex(pointX, pointY);
              if (pointX > uBound){
                uBound = pointX;
                currentX = uBound;
              }
            }
          }

          else { //not dragged
            if (cmd.type == "C"){
              bezierVertex(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
              if (cmd.x2 > uBound){
                uBound = cmd.x2;
                currentX = uBound;
              }
              if (cmd.x2 < lBound){
                lBound = cmd.x2;
              }
            }
            else if (i > 0 && cmd.type == "M"){
              beginContour();
              vertex(cmd.x, cmd.y);
            }
            else if (cmd.type == "Z"){
              if (zCount > 0){
                endContour();
              }
              zCount += 1;
            }
            else{
              pointX = cmd.x;
              pointY = cmd.y;
              vertex(pointX, pointY);
              if (pointX < lBound){
                lBound = pointX;
              }
              if (pointX > uBound){
                uBound = pointX;
                currentX = uBound;
              }
            }
          }
          if (uBound > width - 10 && stopCount == 0){
            newLine();
            active = false;
            stopCount += 1;
          }
        }
      }
      endShape();
      elong += 5;
      letterWidth = uBound-lBound;
    }
  }

  else {
    elong = 0;
    letterWidth = 0;
    x = currentX;
    if (x > (width - 100)){
      newLine();
    }
  }
}

function newLine(){
  y += 90;
  currentX = 10;
}

function keyReleased(){
  if (keyCode == 13){
    newLine();
  }
  if (keyCode == 32){
    currentX += 40;
  }
  active = true;
  stopCount = 0;
}
