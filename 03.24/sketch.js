// code referenced from Aaryan Pashine AKA caizoryan on Github
let font;
let masterPoints = [];
let index = 0;
let text = "J ";
let disturbance = 20; // higher more anxiety
let complexity = 0.01; //higher is more complexity
let apple = "apple";
let operator = "add";

function preload() {
  font = loadFont("chikki.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  setInterval(() => {
    if (disturbance === 40) operator = "subtract";
    else if (disturbance === 10) operator = "add";
    if (operator === "add") disturbance++;
    else disturbance--;
  }, 100);
  masterPoints = font.textToPoints(text, 200, 400, 400, {
    sampleFactor: complexity,
  });
  stroke(170, 208, 185);
}

function draw() {
  background(0, 10);
  console.log(apple);
  for (let i = 0; i < masterPoints.length; i++) {
    if (i + 2 > masterPoints.length) break;
    line(
      masterPoints[i].x + random(disturbance),
      masterPoints[i].y + random(disturbance),
      masterPoints[i + 1].x + random(disturbance),
      masterPoints[i + 1].y + random(disturbance)
    );
  }
}

function mousePressed() {
  saveCanvas("day4", "png");
}
