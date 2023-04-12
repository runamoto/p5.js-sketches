function preload() {
  customFont = loadFont("assets/Zimra-Regular.otf");
}

function setup() {
  createCanvas(500, 500);
  textFont(customFont);
}

function draw() {
  background(220, 0, 80);
  textSize(400);
  text("j", 200, 350);
  fill(255);
}

function mousePressed() {
  saveCanvas("yoooo", "png");
}
