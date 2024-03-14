//author: kinhQuoc
//2ndweek tech demo
//instruction to interact -
//when the mouse moves to the left - rotate counterclockwise
// when the mouse moves to the right - rotate closewise
let gap = 10;
let coreCirle = 20;
let numCircle = 40;
let angle = 0;
let numPoint = 300;
let sound;
let fft;
function preload () {
  sound = loadSound('sounds/MFDOOMS.mp3');
}
function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  fft.setInput(sound);
  angleMode(degrees);
}

function draw() {
  background('black');
  // a customized shape for Mouse
  noCursor();
  noStroke();
  fill('white');
  circle(mouseX, mouseY, 10);
  
  // let fucking do it boys
  push();
  translate(width/2, height/2);
  rotate(angle);
  let bins = fft.analyze();
  X = (bins.length-1, 0, bins.length, 0, width)
  angle = angle+map(X,0,width,-0.5,0.5);
  noFill();
  stroke('white');
  strokeWeight(1);
  if (sound.isPlaying()) {
    for (i = 0; i < numCircle; i++) {
   arc(0, 0, coreCirle + gap * i, coreCirle + gap * i, angle * i / 2, 360 - angle/2);
  }
  pop();
  
  //noise
  
  push();
  stroke('white');
  strokeWeight(1)
  for (i = 0; i < numPoint; i++) {
    point(random(width), random(height));
  }
  pop();
  
  //translate
  
  push();
  translate(width/2, height/2 + 250);
  textFont('Helvetica');
  textSize(15);
  textAlign(CENTER, CENTER);
  text('Rapp Snitch Knishes', 0, 0);
  pop();
}
  }
  

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}