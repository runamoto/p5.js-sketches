let jFont;
let jSize = 40;
let jYPositions = [];

function preload() {
  jFont = loadFont("Lineal.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(jSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(247, 220, 111);
  fill(144, 198, 149); //the fun part
  stroke(40);
  textSize(60);

  // Generate a new  j at a random x-coordinate
  if (frameCount % 5 === 0) {
    jYPositions.push({ x: random(width), y: random(-200, -50) });
  }

  // Update and display all js
  for (let i = 0; i < jYPositions.length; i++) {
    let jX = jYPositions[i].x;
    let jY = (jYPositions[i].y += random(1, 3));
    textFont(jFont);
    text("j", jX, jY);
    if (jY > height + jSize) {
      jYPositions.splice(i, 1);
      i--;
    }
  }
}
function mousePressed() {
  saveCanvas("day11", "png");
}
