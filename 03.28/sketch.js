let video; // to store the webcam video stream
let ascii = ""; // to store the ASCII art

function setup() {
  createCanvas(windowWidth, windowHeight); // create a canvas to display the video stream
  video = createCapture(VIDEO); // capture the video from the webcam
  video.size(width, height); // set the size of the video stream to match the canvas
  video.hide(); // hide the original video stream
  textSize(14); // set the font size for the ASCII art
  textFont("monospace");
}

function draw() {
  translate(0, height);
  scale(1, -1);

  background(0); // set the background color to black
  // display the video stream on the canvas
  video.loadPixels();
  // convert the video stream into ASCII art
  ascii = "";
  for (let y = 0; y < height; y += 8) {
    for (let x = 0; x < width; x += 6) {
      // get the color of the pixel at (x, y)
      let i = (x + y * video.width) * 4;
      let c = video.pixels[i];

      // calculate the brightness of the pixel
      let brightness = (red(c) + green(c) + blue(c)) / 3;

      // map the brightness to a character
      let character = " ";
      if (brightness < 50) {
        character = "#";
      } else if (brightness < 100) {
        character = "@";
      } else if (brightness < 150) {
        character = "x";
      } else if (brightness < 200) {
        character = "-";
      } else if (brightness < 255) {
        character = ".";
      }

      // add the character to the ASCII art string
      ascii += character;
    }
    ascii += "\n"; // add a line break at the end of each row
  }

  // display the ASCII art on the canvas
  fill(255);
  noStroke();
  text(ascii, 0, -100);
}
function mousePressed() {
  takeSelfie();
}

function takeSelfie() {
  saveCanvas("day8", "png");
}
