function setup() {
  createCanvas(windowWidth, windowHeight);
  background("darkcyan");
}

// initiates the draw function on click
function mousePressed() {
  drawFlower(mouseX, mouseY);
}

// draws flowers <333
function drawFlower(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill("white");
  let numPetals = 9;
  for (let i = 0; i < numPetals; i++) {
    ellipse(0, 40, 20, 80);
    rotate(TWO_PI / numPetals);
  }
  fill("orange");
  ellipse(0, 0, 30, 30);
  pop();
}

// Instead of a mousePressed function here, im using a keypressed one since we already used mousePressed above for another function.
function keyPressed() {
  if (key === "s") {
    saveCanvas("day3", "png");
  }
}
