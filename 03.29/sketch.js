//hmm... What do I wanna make today, I feel like I'm out of ideas..

let jSize = 100; //declares a variable and assigns it the value 100
let jPoints = [];

function setup() {
  createCanvas(400, 400);
  noStroke();

  // this part creates a series of random points to abstractly/roughly define the "J" shape
  for (let i = 0; i < 20; i++) {
    let x = random(width / 2, width);
    let y = random(height / 2);
    jPoints.push(createVector(x, y));
  }
  for (let i = 0; i < 20; i++) {
    let x = random(width / 2, width);
    let y = random(height / 2, height);
    jPoints.push(createVector(x, y));
  }
}

function draw() {
  background(255);

  // This part draws a "J" shape using a series of random points
  fill(0);
  beginShape();
  vertex(jPoints[0].x, jPoints[0].y);
  for (let i = 1; i < jPoints.length; i++) {
    let prevPoint = jPoints[i - 1];
    let currentPoint = jPoints[i];
    let midPoint = p5.Vector.lerp(prevPoint, currentPoint, 0.5);
    vertex(midPoint.x, midPoint.y);
  }
  endShape();
}
function mousePressed() {
  saveCanvas("day9", "png");
}
//its def not perfect. some resemble js more than others
