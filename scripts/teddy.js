let teddy;
// let autoRotate = false;

function preload() {
  // Load model with normalise parameter set to true
  teddy = loadModel("./assets/teddy.obj", false);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight - 5, WEBGL);
  let button = createButton("auto rotate");
  // button.position(window.innerWidth - 85, 5);
  // button.mousePressed(toggleAutoRotate);
}

// function toggleAutoRotate() {
//   autoRotate = !autoRotate;
// }

function draw() {
  background(0);
  scale(1.4); // Scaled to make model fit into canvas

  rotateX(PI / 1.2)
  rotateY(PI / 1.2)
  // if (autoRotate) {
    rotateX(PI / 1.2 + frameCount * 0.01);
    rotateY(PI / 1.2 + frameCount * 0.01);
  // }

  normalMaterial(); // For effect

  model(teddy);
}
