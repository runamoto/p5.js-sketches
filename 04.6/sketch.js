let bubbles = [];
let numBubbles = 100;
let font;

let colors = [
  [255, 159, 167],
  [255, 218, 193],
  [212, 227, 218],
  [247, 220, 111],
  [196, 214, 0],
  [144, 198, 149],
  [0, 184, 148],
  [0, 166, 255],
  [151, 129, 198],
  [233, 79, 55],
];

function preload() {
  font = loadFont("./font.ttf");
}

function setup() {
  let points = font.textToPoints("J", 400, 600, 600);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < points.length; i += 2) {
    let size = random(10, 50);
    let x = random(width);
    let y = random(height);
    let targetX = points[i].x;
    let targetY = points[i].y;
    let speed = random(0.01, 0.03); // reduce the speed of the bubbles
    let color = colors[floor(random(colors.length))];
    bubbles.push(new BubbleText(x, y, targetX, targetY, size, speed, color));
  }
  for (let i = 0; i < points.length; i++) {
    let size = random(6, 14);
    let x = random(width);
    let y = random(height);
    let targetX = points[i].x;
    let targetY = points[i].y;
    let speed = random(0.03, 0.05); // reduce the speed of the bubbles
    let color = [0];
    bubbles.push(new Bubble(x, y, targetX, targetY, size, speed, color));
  }
}

function draw() {
  background(255);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

class Bubble {
  constructor(x, y, targetX, targetY, size, speed, c) {
    this.x = x;
    this.y = y;
    this.targetX = targetX; // set the target positions to the initial positions
    this.targetY = targetY;
    this.size = size;
    this.speed = speed;
    this.color = color(c);
    this.white = color(...c, 0);
    this.reset = false;
    this.tempX = targetX;
    this.tempY = targetY;
  }

  move() {
    // gradually move the bubbles towards their target positions
    this.x = lerp(this.x, this.targetX, this.speed);
    this.y = lerp(this.y, this.targetY, this.speed);

    // if the bubble is close enough to its target position, set a new target
    if (dist(this.x, this.y, this.targetX, this.targetY) < 1) {
      if (this.reset) {
        this.targetX = this.tempX;
        this.targetY = this.tempY;
        this.reset = false;
      } else {
        this.reset = true;
        this.targetX = random(width);
        this.targetY = random(height);
      }
    }
  }

  display() {
    noStroke();
    let progress = map(
      dist(this.x, this.y, this.tempX, this.tempY),
      width / 3,
      0,
      0,
      1
    );
    console.log(progress);
    fill(lerpColor(this.white, this.color, progress));
    ellipse(this.x, this.y, this.size);
  }
}

class BubbleText {
  constructor(x, y, targetX, targetY, size, speed, c) {
    this.x = x;
    this.y = y;
    this.targetX = targetX; // set the target positions to the initial positions
    this.targetY = targetY;
    this.size = size;
    this.speed = speed;
    this.color = color(c);
    this.white = color(...c, 0);
    this.reset = false;
    this.tempX = targetX;
    this.tempY = targetY;
  }

  move() {
    // gradually move the bubbles towards their target positions
    this.x = lerp(this.x, this.targetX, this.speed);
    this.y = lerp(this.y, this.targetY, this.speed);

    // if the bubble is close enough to its target position, set a new target
    if (dist(this.x, this.y, this.targetX, this.targetY) < 1) {
      if (this.reset) {
        this.targetX = this.tempX;
        this.targetY = this.tempY;
        this.reset = false;
      } else {
        this.reset = true;
        this.targetX = random(width);
        this.targetY = random(height);
      }
    }
  }

  display() {
    // stroke(this.color);
    // noFill();
    let progress = map(
      dist(this.x, this.y, this.tempX, this.tempY),
      width / 3,
      0,
      0,
      1
    );
    // console.log(progress);
    // strokeWeight(progress * 10);
    fill(lerpColor(this.white, this.color, progress));
    textSize(map(progress, 0, 1, 10, this.size * 2));
    text("j", this.x, this.y);
  }
}
function keyPressed() {
  if (key === "s") {
    saveCanvas("day17", "png");
  }
}
