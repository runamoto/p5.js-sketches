let font;
let points;
let currentPointIndex = 0;
let totalPoints;
let gradient;

function preload() {
  font = loadFont("ABCLaicaAItalicVariable-Trial.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(100);
  textFont(font);
  points = font.textToPoints("J", 500, 500, 500);
  totalPoints = points.length;

  // Defining the gradient colors
  let c1 = color(255, 192, 203); // pastel pink
  let c2 = color(204, 204, 255); // pastel purple

  // Creating the gradient using lerpColor()
  gradient = [];
  for (let i = 0; i < totalPoints; i++) {
    let ratio = map(i, 0, totalPoints - 1, 0, 1);
    gradient.push(lerpColor(c1, c2, ratio));
  }
  // Set the frame rate to 30 frames per second
  frameRate(30);
}

function draw() {
  background(245, 238, 193);
  noFill();

  // Draw a line between each point up to the current point index, with a gradient stroke
  for (let i = 0; i <= currentPointIndex; i++) {
    let p = points[i];
    stroke(gradient[i]);
    strokeWeight(7);
    if (i > 0) {
      let prevP = points[i - 1];
      line(p.x, p.y, prevP.x, prevP.y);
    }
  }

  // if reached the end of the points array, reset the current point index to 0
  currentPointIndex++;
  if (currentPointIndex >= totalPoints) {
    currentPointIndex = 0;
  }
}
function keyPressed() {
  if (key === "s") {
    saveCanvas("day19", "png");
  }
}
