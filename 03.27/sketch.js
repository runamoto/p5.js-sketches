let img;
let cnv;
function preload() {
  img = loadImage("letssee.png");
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);
  //acsess pixel info of the img
  for (let col = 0; col < img.width; col += 1) {
    for (let row = 0; row < img.height; row += 1) {
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos, yPos);
      push();
      translate(xPos, yPos);
      noFill();
      strokeWeight(random(2));
      stroke(color(c));
      curve(
        xPos,
        yPos,
        sin(xPos) * random(60),
        cos(xPos) * sin(xPos),
        random(100),
        0,
        0,
        cos(yPos) * sin(xPos),
        random(140),
        cos(xPos) * sin(xPos) * 50
      );
      pop();
    }
  }
}

function mousePressed() {
  saveCanvas("day7", "png");
}
