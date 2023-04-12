function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(24);

  p = createP("This mimics a variable font 'J' ");
}

function draw() {
  background("184, 222, 177");

  let posX = 0;
  let posY = height / 8;

  let fts = 160;

  let pfat = constrain(map(mouseX, 0, width, 1, 999), 1, 999);

  p.style("font-size", fts + "px");
  p.style("font-weight", pfat);
  p.style("align", "center");
  p.position(posX, posY);
}
