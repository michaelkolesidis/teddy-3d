//draw a spinning teddy
let teddy;

function preload() {
  // Load model with normalise parameter set to true
  teddy = loadModel('./assets/teddy.obj', false);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
  background(0);
  scale(1.2); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect


  model(teddy);
}