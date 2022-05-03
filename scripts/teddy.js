let teddy;

function preload() {
  // Load model with normalise parameter set to true
  teddy = loadModel("./assets/teddy.obj", false);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight - 5, WEBGL);
}

function draw() {
  background(0);

  smooth()

  scale(1.4); // Scaled to make model fit into canvas
  
  stroke(0);
  strokeWeight(0);

  rotateX(PI / 1.2 + frameCount * 0.01);
  rotateY(PI / 1.2 + frameCount * 0.01);

  normalMaterial();
  model(teddy);
}
