let img;
let cnv;
function preload() {
  img = loadImage("j2.png");
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);
  //acsess pixel info of the img
  for (let col = 0; col < img.width; col += 20) {
    for (let row = 0; row < img.height; row += 20) {
      let c = img.get(col, row);
      stroke(color(c));
      strokeWeight(20);
      point(col, row);
    }
  }
}

function mousePressed() {
  saveCanvas("day6", "png");
}
