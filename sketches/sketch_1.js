var startX = {
  1:144,
  2:232,
  3:320,
  4:408,
  5:496,
  6:583,
  7:671,
  8:758,
  9:846,
  0:930,
  "a":217,
  "b":595,
  "c":435,
  "d":378,
  "e":363,
  "f":457,
  "g":451,
  "h":634,
  "i":782,
  "j":716,
  "k":801,
  "l":884,
  "m":753,
  "n":676,
  "o":868,
  "p":960,
  "q":193,
  "r":448,
  "s":296,
  "t":525,
  "u":699,
  "v":510,
  "w":283,
  "x":340,
  "y":604,
  "z":257
};

let letters = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  x = width / 2;
  y = height;
  textSize(15);
  // textFont('Courier New');
}

function draw() {
  background(255);
  for (var i = 0; i < letters.length; i++){
    fill(0, 0, 0, letters[i][3]);
    text(letters[i][0], letters[i][1], letters[i][2]);
    letters[i][2] -= 3;
    letters[i][3] = map(letters[i][2], height, 20, 255, 0);
  }
}

function keyReleased() {
  if (key in startX){
    letters.push([key, startX[key], y, 255]);
  }
}
