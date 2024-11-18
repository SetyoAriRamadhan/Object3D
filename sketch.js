let angle = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(0);
  noStroke();

  // Matahari
  push();
  fill(255, 204, 0);
  sphere(50); 
  pop();

  // Bumi
  push();
  rotateY(angle); 
  translate(150, 0, 0); 
  fill(0, 102, 255); 
  sphere(30); 

  // Bulan
  push();
  rotateY(angle * 2); 
  translate(60, 0, 0); 
  fill(200); 
  sphere(10); 
  pop();

  pop();

  angle += 0.02;
}
