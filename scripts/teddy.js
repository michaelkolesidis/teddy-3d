let teddy; // The 3D model of the teddy bear;
let teddyColor; // The color of the teddy bear;
let colored = false;
let backgroundColor;

function preload() {
  // Load model with normalise parameter set to true
  teddy = loadModel("./assets/teddy.obj", false);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  backgroundColor = color(0, 0, 0);
}

function draw() {
  background(backgroundColor);

  // Anti-aliasing
  smooth();

  // Teddy orbit controlled with mouse along with its rotation
  orbitControl();

  // Scaled to make model fit into canvas
  scale(window.innerHeight / 450);

  // Lights
  ambientLight(108, 108, 108);
  directionalLight(128, 128, 128, 0, 0, -1);

  // Initial teddy color
  normalMaterial();

  if (colored) {
    fill(teddyColor);
  }

  // Teddy rotation
  rotateX(PI / 1.2 + frameCount * 0.01);
  rotateY(PI / 1.2 + frameCount * 0.01);

  // The 3D model of the teddy bear
  model(teddy);
}

function colorize() {
  teddyColor = color(random(40, 255), random(40, 255), random(40, 255));
  backgroundColor = color(random(40), random(40), random(40));

  console.log(
    `%cTeddy color: ${teddyColor}\nBackground color: ${backgroundColor}`,
    `color: ${teddyColor};
     background: ${backgroundColor};
     font-weight: 600;`
  );

  colored = true;
}

function mousePressed() {
  colorize();
}

function keyPressed() {
  colorize();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// Fullscreen mode
window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});
