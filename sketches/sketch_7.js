//WINDOW FITTER

var x,y,w,h,s,mw,mh;
var letters;

var startX, startY;
var margin;
var offset;
var aW, aH;
var scaleVal;

var displayed = [[]];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  margin = Math.min(width/10, height/10);

  // startX = 20;
  // startY = 20;
  offset = 50;

  s = 25;
  w = width;
  h = height;
  x = 0;
  y = 0;
  updateDict();

  noFill();
  stroke(0);
  scaleVal = Math.min(width/4, height/8)
  strokeWeight(Math.min(width/10, height/10));
}

function draw() {

  //reset each frame
  background(255);

  //this is just an example of a single letter, even this would be paramterized.
  // beginShape();
  //
  // vertex(aW, aH - (2 * scaleVal));
  // bezierVertex(aW, aH - (2 * scaleVal), aW, aH, aW - (2 * scaleVal), aH);
  // vertex(aW - (2 * scaleVal), aH);
  // vertex(startX + (2 * scaleVal), aH);
  // bezierVertex(startX + (2 * scaleVal), aH, startX, aH, startX, aH - (2 * scaleVal));
  // vertex(startX, aH - (2 * scaleVal));
  // vertex(startX, startY + (2 * scaleVal));
  // bezierVertex(startX, startY + (2 * scaleVal), startX, startY, startX + (2 * scaleVal), startY);
  // vertex(startX + (2 * scaleVal), startY);
  // vertex(aW - (2 * scaleVal), startY);
  // bezierVertex(aW - (2 * scaleVal), startY, aW, startY, aW, startY + (2 * scaleVal));
  //
  // endShape();

  for (i=0;i<displayed.length;i++){ //rows
    for (j=0;j<displayed[i].length;j++){ //columns (individual letters)
      var activeLetter = displayed[i][j];
      //setting the bounding box
      x = j * (width/displayed[i].length) + offset;
      y = i * (height/displayed.length) + offset;
      w = (j+1) * (width/displayed[i].length) - offset;
      h = (i+1) * (height/displayed.length) - offset;
      mw = (x+w)/2;
      mh = (y+h)/2;
      s = Math.min((w-x)/4, (h-y)/8);
      strokeWeight(Math.min((w-x)/15, (h-y)/15));

      //haven't figured out offset yet.
      // if (offset > 0){offset = 50-(2 * displayed[i].length);}
      // offset = 50/(displayed[i].length);

      updateDict();

      for (k=0;k<letters[activeLetter].length;k++){ //points in each letter

        // fill(random(0,255),random(0,255),random(0,255));
        // rect(x,y,w,h);

        var vertexList = letters[activeLetter][k];
        // console.log(vertexList[0]);

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

function keyPressed() {
  if (keyCode > 64 && keyCode < 91){
    var letter = key.toUpperCase();
    if (letter in letters){displayed[displayed.length-1].push(letter);}
    console.log(displayed);
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
    console.log(displayed);
  }


  else if (keyCode == 13){
    displayed.push([]);
  }
}

function newLetter(letter) {

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
  // aW = width - 55;
  // aH = height - 55;
  w = width;
  h = height;

  startX = margin;
  startY = margin
  aW = width - margin * 2;
  aH = height - margin * 2;
  scaleVal = Math.min(aW/4, aH/8);
  var newWeight = Math.min(aW/10, aH/10);
  strokeWeight(Math.min(aW/10, aH/10));
  margin = Math.min(width/10, height/10);
}
