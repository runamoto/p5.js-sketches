function setup() {
  createCanvas(800, 800);
  background(181, 224, 247);
}

function draw() {
  noStroke();
  fill(255);

  ellipse(480, 200, 150, 150);
  ellipse(480, 290, 150, 150);
  ellipse(480, 380, 150, 150);
  ellipse(480, 470, 150, 150);
  ellipse(480, 560, 150, 150);
  ellipse(400, 600, 150, 150);
  ellipse(310, 580, 150, 150);
  ellipse(290, 530, 150, 150);
}
function mousePressed() {
  saveCanvas("day2", "png");
}
