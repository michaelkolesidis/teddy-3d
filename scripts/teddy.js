let teddy;
let teddyColor;
let colored = false;

function preload() {
  // Load model with normalise parameter set to true
  teddy = loadModel("./assets/teddy.obj", false);
}

function setup() {
  createCanvas(window.innerWidth - 5, window.innerHeight - 5, WEBGL);
}

function draw() {
  background(0);

  smooth();

  // Scaled to make model fit into canvas
  scale(window.innerHeight / 450);

  noStroke();

  ambientLight(108, 108, 108);
  directionalLight(128, 128, 128, 0, 0, -1);

  normalMaterial();

  if (colored) {
    fill(teddyColor);
  }

  rotateX(PI / 1.2 + frameCount * 0.01);
  rotateY(PI / 1.2 + frameCount * 0.01);

  model(teddy);
}

function colorize() {
  teddyColor = color(random(40, 255), random(40, 255), random(40, 255));
  colored = true;
}

function mousePressed() {
  colorize();
}

function keyPressed() {
  colorize();
}
