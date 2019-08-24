//WINDOW FITTER

var x,y,w,h,s,mw,mh;
var letters;
var functionalWidth,functionalHeight;
var marginX,marginY,marginW,marginH;
var letterW,letterH;
var letterScaleH,letterScaleW;
var gapW,gapH;

var displayed = [[]];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  marginX = 50;
  marginY = 50;
  marginW = 60;
  marginH = 60;
  letterScaleW = 0.8;
  letterScaleH = 0.8;
  functionalWidth = width-(marginX+marginW);
  functionalHeight = height-(marginY+marginH);

  // strokeVal = 10;

  updateDict();
}

function draw() {
  //reset each frame
  background(255);
  console.log(displayed[0].length);

  if (displayed[0].length == 0){//nothing on screen
    let s = "Start typing to begin"
    textSize(Math.min(width/30,height/30));
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    text(s, 0, 37, width, height);

    // console.log('???');
  }

  //drawing settings
  noFill();
  stroke(0);

  //strokeWeight
  strokeVal = Math.min((w-x),(h-y))/(displayed.length * mostInList(displayed));
  if(strokeVal > 75){strokeVal = 75;}
  else if (strokeVal < 10){strokeVal = 10;}
  strokeWeight(strokeVal);

  for (i=0;i<displayed.length;i++){ //rows
    for (j=0;j<displayed[i].length;j++){ //columns (individual letters)
      var activeLetter = displayed[i][j];
      //setting the bounding box
      letterW = ((width-(marginX+marginW))/displayed[i].length)*letterScaleW;
      letterH = ((height-(marginY+marginH))/displayed.length)*letterScaleH;
      gapW = (functionalWidth-(letterW*displayed[i].length))/(displayed[i].length-1);
      gapH = (functionalHeight-(letterH*displayed.length))/(displayed.length-1);

      x = j * (letterW+gapW)+marginX;
      y = i * (letterH+gapH)+marginY;
      w = (j+1) * (letterW+gapW)+marginX-gapW;
      h = (i+1) * (letterH+gapH)+marginY-gapH;

      if (j==0){ //first column
        x = marginX;
        if (i==0){
          y = marginY;
        }
        if (j==displayed[i].length-1){w = width - marginW;}
        if (i==displayed.length-1){h = height - marginH;}
      }
      else if (i==0){ //first row
        y = marginY;
        if (i==displayed.length-1){h = height - marginH;} //if only 1 row
        if (j==displayed[i].length-1){w = width - marginW;} //if last letter in first row
      }
      else if (j==displayed[i].length-1){ //last column
        w = width - marginW;
        if (i==displayed.length-1){h = height - marginH;} //if last element
      }
      else if (i==displayed.length-1){ //last row
        h = height - marginH;
      }

      mw = (x+w)/2;
      mh = (y+h)/2;
      s = Math.min((w-x)/4, (h-y)/8);
      // strokeWeight(Math.min((w-x), (h-y)) / (displayed.length * displayed[i].length));

      updateDict();
      if (activeLetter in letters){
        for (k=0;k<letters[activeLetter].length;k++){ //points in each letter
          var vertexList = letters[activeLetter][k];
          beginShape();
          for (l=0;l<vertexList.length;l++){
            if (vertexList[l][0] == 0){
              vertex(vertexList[l][1][0],vertexList[l][1][1]);
            }
            else if (vertexList[l][0] == 1){
              bezierVertex(vertexList[l][1][0],vertexList[l][1][1],vertexList[l][2][0],vertexList[l][2][1],vertexList[l][3][0],vertexList[l][3][1]);
            }
          }
          endShape();
        }
      }
    }
  }
}

function keyPressed() {
  if (keyCode > 64 && keyCode < 91){
    var letter = key.toUpperCase();
    if (letter in letters){displayed[displayed.length-1].push(letter);}
  }
}

function keyReleased(){
  if (keyCode == 8){
    if (displayed[displayed.length-1].length > 0){
      displayed[displayed.length-1].pop();
    }
    else if (displayed[displayed.length-1].length == 0 && displayed.length > 1){
      displayed.pop();
    }
  }
  else if (keyCode == 32  ){
    displayed[displayed.length-1].push(" ");
  }
  else if (keyCode == 13){displayed.push([]);}
  else if (keyCode == 49){save('myCanvas.png')}
}

function updateDict() {
  letters =
  {
    "A":[[[0,[x,h]],[0,[x,y+2*s]],[1,[x,y+2*s],[x,y],[x+2*s,y]],[0,[x+2*s,y]],[0,[w-2*s,y]],[1,[w-2*s,y],[w,y],[w,y+2*s]],[0,[w,y+2*s]],[0,[w,h]]],[[0,[x,mh]],[0,[w,mh]]]],
    "B":[[[0,[x,mh]],[0,[x,y]],[0,[w-2*s,y]],[1,[w-2*s,y],[w,y],[w,y+2*s]],[0,[w,y+2*s]],[0,[w,mh-2*s]],[1,[w,mh-2*s],[w,mh],[w-2*s,mh]],[0,[w-2*s,mh]],[0,[x,mh]],[0,[x,h]],[0,[w-2*s,h]],[1,[w-2*s,h],[w,h],[w,h-2*s]],[0,[w,mh+2*s]],[1,[w,mh+2*s],[w,mh],[w-2*s,mh]],[w-2*s,mh]]],
    "C":[[[0,[w,h-2*s]],[1,[w,h-2*s],[w,h],[w-2*s,h]],[0,[w-2*s,h]],[0,[x+2*s,h]],[1,[x+2*s,h],[x,h],[x,h-2*s]],[0,[x,h-2*s]],[0,[x,y+2*s]],[1,[x,y+2*s],[x,y],[x+2*s,y]],[0,[x+2*s,y]],[0,[w-2*s,y]],[1,[w-2*s,y],[w,y],[w,y+2*s]]]],
    "D":[[[0,[x,h]],[0,[x,y]],[0,[w-2*s,y]],[1,[w-2*s,y],[w,y],[w,y+2*s]],[0,[w,y+2*s]],[0,[w,h-2*s]],[1,[w,h-2*s],[w,h],[w-2*s,h]],[0,[w-2*s,h]],[0,[x,h]]]],
    "E":[[[0,[w,h]],[0,[x,h]],[0,[x,y]],[0,[w,y]]],[[0,[x,mh]],[0,[w,mh]]]],
    "F":[[[0,[x,h]],[0,[x,y]],[0,[w,y]]],[[0,[x,mh]],[0,[w,mh]]]],
    "G":[[[0,[w-2*s,mh]],[0,[w,mh]],[0,[w,h-2*s]],[1,[w,h-2*s],[w,h],[w-2*s,h]],[0,[w-2*s,h]],[0,[x+2*s,h]],[1,[x+2*s,h],[x,h],[x,h-2*s]],[0,[x,h-2*s]],[0,[x,y+2*s]],[1,[x,y+2*s],[x,y],[x+2*s,y]],[0,[x+2*s,y]],[0,[w-2*s,y]],[1,[w-2*s,y],[w,y],[w,y+2*s]]]],
    "H":[[[0,[x,h]],[0,[x,y]]],[[0,[w,h]],[0,[w,y]]],[[0,[x,mh]],[0,[w,mh]]]],
    "I":[[[0,[x,y]],[0,[w,y]]],[[0,[x,h]],[0,[w,h]]],[[0,[mw,y]],[0,[mw,h]]]],
    "J":[[[0,[x,y]],[0,[w,y]]],[[0,[mw,y]],[0,[mw,h-s]],[1,[mw,h-s],[mw,h],[mw-s,h]],[0,[mw-s,h]],[0,[x+s,h]],[1,[x+s,h],[x,h],[x,h-s]],[0,[x,h-s]]]],
    "K":[[[0,[x,y]],[0,[x,h]]],[[0,[x,mh]],[0,[w,h]]],[[0,[x,mh]],[0,[w,y]]]],
    "L":[[[0,[x,y]],[0,[x,h]],[0,[w,h]]]],
    "M":[[[0,[x,h]],[0,[x,y+s]],[1,[x,y+s],[x,y],[x+s,y]],[0,[x+s,y]],[0,[mw-s,y]],[1,[mw-s,y],[mw,y],[mw,y+s]],[0,[mw,y+s]],[0,[mw,h]]],[[0,[mw,y+s]],[1,[mw,y+s],[mw,y],[mw+s,y]],[0,[mw+s,y]],[0,[w-s,y]],[1,[w-s,y],[w,y],[w,y+s]],[0,[w,y+s]],[0,[w,h]]]],
    "N":[[[0,[x,h]],[0,[x,y]]],[[0,[x,y]],[0,[w,h]]],[[0,[w,h]],[0,[w,y]]]],
    "O":[[[0,[x,h-2*s]],[0,[x,y+2*s]],[1,[x,y+2*s],[x,y],[x+2*s,y]],[0,[x+2*s,y]],[0,[w-2*s,y]],[1,[w-2*s,y],[w,y],[w,y+2*s]],[0,[w,y+2*s]],[0,[w,h-2*s]],[1,[w,h-2*s],[w,h],[w-2*s,h]],[0,[w-2*s,h]],[0,[x+2*s,h]],[1,[x+2*s,h],[x,h],[x,h-2*s]],[0,[x,h-2*s]]]],
    "P":[[[0,[x,h]],[0,[x,y]],[0,[w-2*s,y]],[1,[w-2*s,y],[w,y],[w,y+2*s]],[0,[w,y+2*s]],[0,[w,mh-2*s]],[1,[w,mh-2*s],[w,mh],[w-2*s,mh]],[0,[w-2*s,mh]],[0,[x,mh]]]],
    "Q":[[[0,[x,h-2*s]],[0,[x,y+2*s]],[1,[x,y+2*s],[x,y],[x+2*s,y]],[0,[x+2*s,y]],[0,[w-2*s,y]],[1,[w-2*s,y],[w,y],[w,y+2*s]],[0,[w,y+2*s]],[0,[w,h-2*s]],[1,[w,h-2*s],[w,h],[w-2*s,h]],[0,[w-2*s,h]],[0,[x+2*s,h]],[1,[x+2*s,h],[x,h],[x,h-2*s]],[0,[x,h-2*s]]],[[0,[w-s,h-s]],[0,[w,h]]]],
    "R":[[[0,[x,h]],[0,[x,y]],[0,[w-2*s,y]],[1,[w-2*s,y],[w,y],[w,y+2*s]],[0,[w,y+2*s]],[0,[w,mh-2*s]],[1,[w,mh-2*s],[w,mh],[w-2*s,mh]],[0,[w-2*s,mh]],[0,[x,mh]]],[[0,[x+2*s,mh]],[0,[w,h]]]],
    "S":[[[0,[x,h-2*s]],[1,[x,h-2*s],[x,h],[x+2*s,h]],[0,[x+2*s,h]],[0,[w-2*s,h]],[1,[w-2*s,h],[w,h],[w,h-2*s]],[0,[w,h-2*s]],[0,[w,mh+2*s]],[1,[w,mh+2*s],[w,mh],[w-2*s,mh]],[0,[w-2*s,mh]],[0,[x+2*s,mh]],[1,[x+2*s,mh],[x,mh],[x,mh-2*s]],[0,[x,mh-2*s]],[0,[x,y+2*s]],[1,[x,y+2*s],[x,y],[x+2*s,y]],[0,[x+2*s,y]],[0,[w-2*s,y]],[1,[w-2*s,y],[w,y],[w,y+2*s]],[0,[w,y+2*s]]]],
    "T":[[[0,[x,y]],[0,[w,y]]],[[0,[mw,y]],[0,[mw,h]]]],
    "U":[[[0,[x,y]],[0,[x,h-2*s]],[1,[x,h-2*s],[x,h],[x+2*s,h]],[0,[x+2*s,h]],[0,[w-2*s,h]],[1,[w-2*s,h],[w,h],[w,h-2*s]],[0,[w,h-2*s]],[0,[w,y]]]],
    "V":[[[0,[x,y]],[0,[mw,h]]],[[0,[mw,h]],[0,[w,y]]]],
    "W":[[[0,[x,y]],[0,[x,h-s]],[1,[x,h-s],[x,h],[x+s,h]],[0,[x+s,h]],[0,[mw-s,h]],[1,[mw-s,h],[mw,h],[mw,h-s]],[0,[mw,h-s]],[0,[mw,y]]],[[0,[mw,h-s]],[1,[mw,h-s],[mw,h],[mw+s,h]],[0,[mw+s,h]],[0,[w-s,h]],[1,[w-s,h],[w,h],[w,h-s]],[0,[w,h-s]],[0,[w,y]]]],
    "X":[[[0,[x,y]],[0,[w,h]]],[[0,[w,y]],[0,[x,h]]]],
    "Y":[[[0,[x,y]],[0,[x,mh-2*s]],[1,[x,mh-2*s],[x,mh],[x+2*s,mh]],[0,[x+2*s,mh]],[0,[w-2*s,mh]],[1,[w-2*s,mh],[w,mh],[w,mh-2*s]],[0,[w,mh-2*s]],[0,[w,y]]],[[0,[w,mh-2*s]],[0,[w,h-2*s]],[1,[w,h-2*s],[w,h],[w-2*s,h]],[0,[w-2*s,h]],[0,[x+2*s,h]],[1,[x+2*s,h],[x,h],[x,h-2*s]],[0,[x,h-2*s]]]],
    "Z":[[[0,[x,y]],[0,[w,y]]],[[0,[w,y]],[0,[x,h]]],[[0,[x,h]],[0,[w,h]]]]
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  functionalWidth = width-(marginX+marginW);
  functionalHeight = height-(marginY+marginH);
}

function mostInList(list){
  var highest = 0;
  for (i=0;i<list.length;i++){
    if (list[i].length > highest) {highest=list[i].length;}
  }
  return highest;
}

function map(value,x1,y1,x2,y2){
  return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}
//
// function hideHelp(){
//   var frame = 0;
//   var finalFrame = 1000;
//   while (frame < finalFrame){
//   }
// }
