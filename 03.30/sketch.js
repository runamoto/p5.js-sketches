//declate variables
let font;
let points;
let bounds;
let colors = [
  color(227, 109, 182),
  color(109, 170, 227),
  color(109, 140, 227),
  color(227, 109, 121),
];

function preload() {
  font = loadFont("Imprima-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  points = font.textToPoints("J", 0, 0, 200, {
    sampleFactor: 1,
    simplifyThreshold: 0,
  });

  bounds = font.textBounds("J", 0, 0, 200); //calculates the bounds of the "J" shape

  cursor(CROSS); //sets the cursor to a crosshair
  frameRate(20);
}

function draw() {
  background(0);

  let centerDist = dist(mouseX, mouseY, width / 2, height / 2);
  //calculates the distance between the mouse cursor and the center of the canvas

  let r = random(255);
  let g = random(255);
  let b = random(255);
  let rainbowColor = color(r, g, b);

  let transparency = map(centerDist, 0, width / 2, 200, 50);
  transparency = constrain(transparency, 50, 200);
  fill(rainbowColor);
  //maps the distace to a range of transparency values, and uses this transparency value to fill the "J" shape
  let jiggle = map(centerDist, 0, width, 1, 300);
  //calculates a "jiggle" value based on the distance from the center of the canvas, which is used to randomly offset the position of each point that makes up the "J" shape.
  translate((width - abs(bounds.w)) / 2, (height + abs(bounds.h)) / 2);

  // 	stroke(255, 0, 0);
  //   rect(bounds.x, bounds.y, bounds.w, bounds.h);

  //   console.log("x: " + bounds.x
  //               + ", y: " + bounds.y
  //               + ", w: " + bounds.w
  //               + ", h: " + bounds.h);

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    ellipse(
      p.x + jiggle * randomGaussian(),
      p.y + jiggle * randomGaussian(),
      5,
      5
    );
  }

  function keyPressed() {
    if (key === "s") {
      saveCanvas("day10", "png");
    }
  }
}
