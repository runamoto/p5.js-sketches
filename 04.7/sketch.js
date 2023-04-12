let font;
let points;

function preload() {
  font = loadFont("AAHA.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(100);
  textFont(font);
  points = font.textToPoints("J", 500, 600, 600); //right and left, up and down, scale
}

function draw() {
  background(255, 218, 193);
  stroke(255, 159, 167);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let offset = map(noise(p.x / 100, frameCount / 70), 0, 1, -11, 10); // here i am applying Perlin noise to the y-coordinate
    vertex(p.x, p.y + offset); // add offsetting to y-coordinate
  }
  endShape();
}
function keyPressed() {
  if (key === "s") {
    saveCanvas("day18", "png");
  }
}
