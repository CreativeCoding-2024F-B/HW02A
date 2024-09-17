function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 120, 220); 
  rect(100, 100, 200, 100, 10);
  ellipse(200, 300, 40);

  let rectX = 300;
  let rectY = 300; 
  let rectW = 200;

  rect(rectX, rectY, rectW);
  ellipse(rectX + rectW/2, rectY + rectW/2, 100);

  ellipse(width /2, height /2, 100);
}

function draw() {
}
