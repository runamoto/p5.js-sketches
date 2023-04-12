let brushFill = "#000000"; // default brush fill color is black
let brushSize = 10; // default brush size is 10

function setup() {
  createCanvas(windowWidth, windowHeight); // set the canvas width and height to the full window width and height
  strokeWeight(brushSize); // set the thickness of the pen stroke to the current brush size
  createFillPicker(); // create a fill color picker input element
  createBrushSizePicker(); // create a brush size picker input element
  background(240); // set a light gray background color
}

function draw() {
  if (mouseIsPressed) {
    // check if the mouse is pressed down
    stroke(brushFill); // set the stroke color to the current brush fill color
    fill(brushFill); // set the fill color to the current brush fill color
    ellipse(mouseX, mouseY, brushSize, brushSize); // draw an ellipse with the current brush size at the current mouse position
  }
}

function createFillPicker() {
  let fillPicker = createInput();
  fillPicker.attribute("type", "color"); // set the type attribute to 'color'
  fillPicker.position(10, 10); // set the position of the fill picker in the top left corner
  fillPicker.input(function () {
    brushFill = fillPicker.value(); // update the brush fill color when the user selects a new color
  });
}

function createBrushSizePicker() {
  let brushSizePicker = createInput(brushSize.toString(), "number");
  brushSizePicker.position(130, 10); // set the position of the brush size picker to the right of the fill picker
  brushSizePicker.input(function () {
    brushSize = parseInt(brushSizePicker.value()); // update the brush size when the user selects a new size
    strokeWeight(brushSize); // update the stroke weight to match the new brush size
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // resize the canvas when the window is resized
  background(240); // redraw the background when the window is resized
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("day5", "png");
  }
} //using keyPressed here again for obvious reasons
