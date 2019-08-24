var letters =
{
  "A":[[5,3],[[[0,0],[0,3],[5,3],[5,2],[3,2],[3,1],[5,1],[5,0]],[1,2,3,4]], [[[1,1],[1,2],[2,2],[2,1]],[1,2]]],
  "B":[[5,3],[[[0,0],[0,2],[1,2],[1,3],[2,3],[2,2],[3,2],[3,3],[4,3],[4,2],[5,2],[5,0]],[1,2,3,4,5,6,7,8,9,10]], [[[1,1],[1,2],[2,2],[2,1]],[1,2]], [[[3,1],[3,2],[4,2],[4,1]],[1,2]]],
  "C":[[5,3],[[[0,0],[0,3],[2,3],[2,2],[1,2],[1,1],[4,1],[4,2],[3,2],[3,3],[5,3],[5,0]],[1,2,3,4,7,8,9,10]]],
  "D":[[5,3],[[[0,0],[0,2],[1,2],[1,3],[4,3],[4,2],[5,2],[5,0]],[1,2,3,4,5,6]],[[[1,1],[1,2],[4,2],[4,1]],[1,2]]],
  "E":[[5,3],[[[0,0],[0,3],[1,3],[1,1],[2,1],[2,3],[3,3],[3,1],[4,1],[4,3],[5,3],[5,0]],[1,2,5,6,9,10]]],
  "F":[[5,3],[[[0,0],[0,3],[1,3],[1,1],[2,1],[2,3],[3,3],[3,1],[5,1],[5,0]],[1,2,5,6]]],
  "G":[[5,3],[[[0,0],[0,3],[1,3],[1,1],[4,1],[4,2],[2,2],[2,3],[5,3],[5,0]],[1,2,5,6,7,8]]],
  "H":[[5,3],[[[0,0],[0,1],[2,1],[2,2],[0,2],[0,3],[5,3],[5,2],[3,2],[3,1],[5,1],[5,0]],[3,4,5,6,7,8]]],
  "I":[[5,3],[[[0,0],[0,3],[1,3],[1,2],[4,2],[4,3],[5,3],[5,0],[4,0],[4,1],[1,1],[1,0]],[1,2,5,6],[3,4,9,10]]],
  "J":[[5,3],[[[0,0],[0,3],[1,3],[1,2],[5,2],[5,0],[4,0],[4,1],[1,1],[1,0]],[1,2],[3,4,7,8]]],
  "K":[[5,3],[[[0,0],[0,1],[2,1],[2,2],[0,2],[0,3],[2,3],[2,2],[3,2],[3,3],[5,3],[5,2],[3,2],[3,1],[5,1],[5,0]],[3,4,5,6,7,8,9,10,11,12]]],
  "L":[[5,3],[[[0,0],[0,1],[4,1],[4,3],[5,3],[5,0]],[3,4]]],
  "M":[[5,5],[[[1,0],[1,1],[0,1],[0,2],[1,2],[1,3],[0,3],[0,4],[1,4],[1,5],[5,5],[5,4],[1,4],[1,3],[3,3],[3,2],[1,2],[1,1],[5,1],[5,0]],[7,8,9,10,11,12],[3,4,5,6,13,14,15,16]]],
  "N":[[5,3],[[[0,0],[0,3],[5,3],[5,2],[1,2],[1,1],[5,1],[5,0]],[1,2,3,4]]],
  "O":[[5,3],[[[0,0],[0,3],[5,3],[5,0]],[1,2]], [[[1,1],[1,2],[4,2],[4,1]],[1,2]]],
  "P":[[5,3],[[[0,0],[0,3],[3,3],[3,1],[5,1],[5,0]],[1,2]], [[[1,1],[1,2],[2,2],[2,1]],[1,2]]],
  "Q":[[5,3],[[[0,0],[0,3],[5,3],[5,2],[4,2],[4,0]],[1,2,3,4]], [[[1,1],[1,2],[3,2],[3,1]],[1,2]]],
  "R":[[5,3],[[[0,0],[0,2],[1,2],[1,3],[2,3],[2,2],[3,2],[3,3],[5,3],[5,2],[3,2],[3,1],[5,1],[5,0]],[1,2,3,4,5,6,7,8,9,10]], [[[1,1],[1,2],[2,2],[2,1]],[1,2]]],
  "S":[[5,3],[[[0,0],[0,3],[1,3],[1,1],[2,1],[2,3],[5,3],[5,0],[4,0],[4,2],[3,2],[3,0]],[1,2,5,6,9,10]]],
  "T":[[5,3],[[[0,0],[0,3],[1,3],[1,2],[5,2],[5,1],[1,1],[1,0]],[1,2],[3,4,5,6]]],
  "U":[[5,3],[[[0,0],[0,1],[4,1],[4,2],[0,2],[0,3],[5,3],[5,0]],[3,4,5,6]]],
  "V":[[5,3],[[[0,0],[0,1],[4,1],[4,2],[0,2],[0,3],[4,3],[4,2],[5,2],[5,1],[4,1],[4,0]],[3,4,5,6,7,8]]],
  "W":[[5,5],[[[0,0],[0,1],[4,1],[4,2],[2,2],[2,3],[4,3],[4,4],[0,4],[0,5],[4,5],[4,4],[5,4],[5,3],[4,3],[4,2],[5,2],[5,1],[4,1],[4,0]],[7,8,9,10,11,12],[3,4,5,6,13,14,15,16]]],
  "X":[[5,3],[[[0,0],[0,1],[2,1],[2,2],[0,2],[0,3],[2,3],[2,2],[3,2],[3,3],[5,3],[5,2],[3,2],[3,1],[5,1],[5,0],[3,0],[3,1],[2,1],[2,0]],[3,4,5,6,7,8,9,10,11,12]]],
  "Y":[[5,3],[[[0,0],[0,1],[2,1],[2,2],[0,2],[0,3],[5,3],[5,0],[4,0],[4,2],[3,2],[3,0]],[3,4,5,6,9,10]]],
  "Z":[[5,3],[[[0,0],[0,3],[2,3],[2,2],[3,2],[3,1],[4,1],[4,3],[5,3],[5,0],[3,0],[3,1],[2,1],[2,2],[1,2],[1,0]],[1,2,3,4,7,8,13,14]]]
};
var elong = 0;
var stretchFactor = 0.5;

var letterW, letterH;
var currentLetter;

var stretchVal;
var startX, startY;

var letterColor = 0;
var backgroundColor = 255;

var sizeMult = 10;
var spaceVal = 20;

var active;
var stopFlag;

var diff = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(backgroundColor);
  // noStroke();

  startX = 20;
  startY = 20;

  active = true;
  stopFlag = false;
  currentLetter = "";

}

function draw() {
  // console.log(millis());

  fill(255)
  noStroke();
  rect(0,0,90+diff,220);

  noFill();
  stroke(255,0,0);
  strokeWeight(10);

  translate(50,50);
  beginShape();

  vertex(0,160);
  vertex(0,10);
  bezierVertex(0,10,0,0,10,0);
  vertex(10,0);
  vertex(30 + diff,0);
  bezierVertex(30 + diff,0,40 + diff,0,40 + diff,10);
  vertex(40 + diff,10);
  vertex(40 + diff, 160);

  endShape();

  beginShape();
  vertex(0,80);
  vertex(40 + diff,80);
  endShape();

  if (keyIsPressed) {
    diff += 3;
  }

  //
  // if (active){
  //   if (keyIsPressed && keyCode > 96 && keyCode < 123) {
  //
  //   var let = key.toUpperCase();
  //   console.log(key);
  //   if (let == currentLetter || currentLetter == ""){currentLetter = let;}
  //   else {
  //     currentLetter = let;
  //     newLetter();
  //     console.log('new letter from multiple!');
  //   }
  //
  //   var activeLetter = letters[let];
  //
  //   fill(backgroundColor);
  //   letterW = activeLetter[0][1] * sizeMult + stretchVal;
  //   letterH = activeLetter[0][0] * sizeMult;
  //   rect(startX, startY, startX + letterW, startY + letterH); //new frame
  //
  //   if (width-startX < (activeLetter[0][1] * sizeMult)){
  //     newLine();
  //   }
  //
  //   for (i=1; i<activeLetter.length; i++) {
  //     if (i==1) {fill(letterColor);}
  //     else {fill(backgroundColor);}
  //     beginShape();
  //     for (j=0; j<activeLetter[i][0].length; j++) {
  //       stretchVal = elong / stretchFactor;
  //       if (activeLetter[i][1].includes(j)){
  //         var x = activeLetter[i][0][j][1] * sizeMult + stretchVal + startX;
  //         if (activeLetter.length == 2 && i == 1 && x > width-30){
  //           stopFlag = true;
  //         }
  //         else if (activeLetter.length > 2 && i == activeLetter.length-1 && x > width - 30 - sizeMult){
  //           stopFlag = true;
  //         }
  //       }
  //       else if (activeLetter[i].length == 3 && activeLetter[i][2].includes(j)){var x = activeLetter[i][0][j][1] * sizeMult + stretchVal/2 + startX;}
  //       else {var x = activeLetter[i][0][j][1] * sizeMult + startX;}
  //       var y = activeLetter[i][0][j][0] * sizeMult + startY;
  //       vertex(x, y);
  //     }
  //     endShape();
  //
  //     if (stopFlag){
  //       active = false;
  //       newLine();
  //     }
  //   }
  //   elong += 5;
  //   }
  //   else if (!keyIsPressed){
  //     currentLetter = "";
  //   }
  // }
}

function newLine(){
  startX = 20;
  startY += spaceVal + letterH;
  elong = 0;
  stopFlag = false;
}

function newLetter(){
  startX += spaceVal + letterW;
  elong = 0;
  active = true;
}

function keyReleased(){
  if (keyCode == 13){newLine();} //enter
  else if (keyCode == 32){startX += 40;}
  else if (keyCode == 49){save('myCanvas.png')}
  else if (key.toUpperCase() == currentLetter && active){
    console.log('new letter from release!');
    newLetter();
  }
  else if (!active){
    active = true;
  }
}
