let font;
let pointsList = [];
let currentPointIndexList = [];
let totalPointsList = [];
let gradientList = [];
let noiseOffsetList = [];

function preload() {
  font = loadFont("ABCLaicaAItalicVariable-Trial.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(100);
  textFont(font);

  let jCount = 3; // number of J's
  let jSpacing = 400; // distance between J's

  // create points, gradients, noise offsets for each J
  for (let i = 0; i < jCount; i++) {
    pointsList[i] = font.textToPoints("J", i * jSpacing + 200, 500, 500);
    currentPointIndexList[i] = 0;
    totalPointsList[i] = pointsList[i].length;

    let c1 = color(255, 192, 203); // pastel pink
    let c2 = color(204, 204, 255); // pastel purple
    gradientList[i] = [];
    for (let j = 0; j < totalPointsList[i]; j++) {
      let ratio = map(j, 0, totalPointsList[i] - 1, 0, 1);
      gradientList[i].push(lerpColor(c1, c2, ratio));
    }

    noiseOffsetList[i] = 0;
  }

  strokeWeight(10); // set the stroke weight to 10
  frameRate(30); // set the frame rate to 30 frames per second
}

function draw() {
  background(245, 238, 193);
  noFill();

  // Draw each J separately
  for (let i = 0; i < pointsList.length; i++) {
    let points = pointsList[i];
    let currentPointIndex = currentPointIndexList[i];
    let totalPoints = totalPointsList[i];
    let gradient = gradientList[i];
    let noiseOffset = noiseOffsetList[i];

    // Draw a line between each point up to the current point index, with a gradient stroke
    for (let j = 0; j <= currentPointIndex; j++) {
      let p = points[j];
      let lineWeight = map(random(), 0, 1, 1, 4); // random line weight
      let lineColor = gradient[j]; // use the gradient color

      stroke(lineColor);
      strokeWeight(lineWeight);

      if (j > 0) {
        let prevP = points[j - 1];
        let noiseFactor = map(noise(j * 0.01, noiseOffset), 0, 1, -30, 5); // add noise to the line position making it wavyy
        line(
          p.x + noiseFactor,
          p.y + noiseFactor,
          prevP.x + noiseFactor,
          prevP.y + noiseFactor
        );
      }
    }

    // Increment the current point index for this J
    currentPointIndex++;

    // If we've reached the end of the points array, reset the current point index to 0
    if (currentPointIndex >= totalPoints) {
      currentPointIndex = 0;
    }

    // Update the current point index and noise offset for this J
    currentPointIndexList[i] = currentPointIndex;
    noiseOffsetList[i] += 0.05;
  }
}
function keyPressed() {
  if (key === "s") {
    saveCanvas("day20", "gif");
  }
}
