var lettersRaw = [
['We took a vow in summertime', 22],
['Now we find ourselves in late December', 25],
['I believe that New Year\'s Eve', 31],
['Will be the perfect time', 33],
['For their great surrender', 35],
['But they don\'t remember', 37],
['Anger wants a voice', 41],
['Voices wanna sing', 43],
['Singers harmonize', 46],
['Til they can\'t hear anything', 48],
['I thought that I was free', 50],
['From all that questioning', 53],
['But every time a problem ends', 56],
['Another one begins', 58],
['And the stone walls of Harmony Hall', 61],
['Bear witness', 62],
['Anybody with a worried mind', 64],
['Could never forgive the sight', 67],
['Of wicked snakes', 69],
['Inside a place', 71],
['You thought was dignified', 73],
['I don\'t wanna live like this', 75],
['But I don\'t wanna die', 76],
['I don\'t wanna live like this', 94],
['But I don\'t wanna die', 96],
['Within the halls of power lies', 105],
['A nervous heart that beats', 107],
['Like a Young Pretender\'s', 109],
['Beneath these velvet gloves I hide', 115],
['The shameful, crooked hands', 117],
['Of a moneylender', 118],
['Cuz I still remember', 120],
['Anger wants a voice', 124],
['Voices wanna sing', 126],
['Singers harmonize', 129],
['Til they can\'t hear anything', 131],
['I thought that I was free', 134],
['From all that questioning', 136],
['But every time a problem ends', 139],
['Another one begins', 141],
['And the stone walls of Harmony Hall', 144],
['Bear witness', 145],
['Anybody with a worried mind', 147],
['Could never forgive the sight', 150],
['Of wicked snakes', 153],
['Inside a place', 154],
['You thought was dignified', 156],
['I don\'t wanna live like this', 158],
['But I don\'t wanna die', 160],
['I don\'t wanna live like this', 178],
['But I don\'t wanna die', 180],
['And the stone walls of Harmony Hall', 203],
['Bear witness', 204],
['Anybody with a worried mind', 207],
['Could never forgive the sight', 209],
['Of wicked snakes', 212],
['Inside a place', 213],
['You thought was dignified', 215],
['I don\'t wanna live like this', 217],
['But I don\'t wanna die', 219],
['I don\'t wanna live like this', 256],
['But I don\'t wanna die', 258],
['And the stone walls of Harmony Hall', 262],
['Bear witness', 263],
['Anybody with a worried mind', 266],
['Could never forgive the sight', 268],
['Of wicked snakes', 270],
['Inside a place', 272],
['You thought was dignified', 273],
['I don\'t wanna live like this', 276],
['But I don\'t wanna die', 278],
['congrats on finishing ;)', 300]
];

var playing = false;
var song;
var letters = [];
var startingX;
var lineWidth = 0;
var i = 0;
var lyricIndex = 0;
var t = 0;

function preload() {
  song = loadSound('../assets/Harmony Hall.mp3');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  textAlign(LEFT, CENTER);
  textSize(30);
  // textFont('Courier New');
  // textStyle(ITALIC);

  startingX = 0;
  initializeString(0);
}

function draw() {

  if (song.currentTime() > t){
    t = song.currentTime();
  }

  if (t > lettersRaw[lyricIndex][1] && song.isPlaying()){
    song.pause();
    // print('boo');
  }
  else if (t < lettersRaw[lyricIndex][1] && song.isPaused()){
    song.play();
    // print('yoo');
  }

  background(255);
  var offset = (width / 2) - (lineWidth / 2)
  translate(offset, 0);
  for (var i = 0; i < letters.length; i++){
    fill(letters[i][2][0], letters[i][2][1], letters[i][2][2]);
    text(letters[i][0], letters[i][1], height/2);
  }
  push();
  fill(0);
  translate(-offset, 0);
  textAlign(CENTER, CENTER);
  textSize(15);
  text ("Harmony Hall - Vampire Weekend", width / 2, height - 50);
  pop();
}

function keyReleased(){

  if (!playing){
    playing = true;
    song.play();
  }
  background(255);
  var let = key.toUpperCase();
  if (i < letters.length){
    if (let == letters[i][0] || key == letters[i][0]){
      letters[i][2] = [94, 147, 107];
      i += 1;
    }
    else {
      letters[i][2] = [192, 87, 76];
    }
  }
  else {
    translate(-((width / 2) - (lineWidth / 2)), 0);
    lineWidth = 0;
    lyricIndex += 1;
    startingX = 0;
    i = 0;
    initializeString(lyricIndex);
  }
}

function initializeString(index){

  letters = lettersRaw[index][0].split("");

  for (var i = 0; i < letters.length; i++){
    var tWidth = textWidth(letters[i]);
    letters[i] = [letters[i], startingX, [0, 0, 0]];
    startingX = startingX + tWidth;
    lineWidth += tWidth;
  }
}
