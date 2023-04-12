let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // this code uses the web graphics library wooo!!
}

function draw() {
  background(212, 227, 218);

  // center the letter "j" on the canvas
  translate(-50, -25);

  // rotate the entire scene around the x-axis
  rotateX(angle);

  // draw the letter "j"
  stroke(255, 159, 167);
  fill(255, 218, 193);
  beginShape();
  vertex(0, -50, 0);
  vertex(0, -100, 0);
  vertex(100, -100, 0);
  vertex(100, 100, 0);
  vertex(0, 100, 0);
  vertex(0, 50, 0);
  vertex(50, 50, 0);
  vertex(50, -50, 0);
  endShape(CLOSE);

  // increase the rotation angle
  angle += 0.01;
}
function keyPressed() {
  if (key === "s") {
    saveCanvas("day12", "png");
  }
}
