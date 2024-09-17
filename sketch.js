function setup() {
  createCanvas(windowWidth, windowHeight);
  

  
  push();
  stroke(150, 75, 0);
  strokeWeight(10);
  ellipse(720, 260, 80);
  pop();

  fill(0, 0, 255);
  quad(130, 240, 250, 160, 480, 250, 300, 450);

  push();
  translate(300, 100); 
  rotate(45);
  fill(2);
  rect(-20, 100, 50, 200);
  pop();

  fill(2); 
  rect(500, 400, 200);
  fill(150, 75, 0);
  rect(760, 120, 90, 80);
  fill(250, 200, 3);
  rect(800, 200, 100, 200);

  
  //let rectX = 300;
  //let rectY = 300; 
  //let rectW = 200;

  //fill(200, 17, 3);
  //rect(rectX, rectY, rectW);
  //ellipse(rectX + rectW/2, rectY + rectW/2, 100);

  

  
}

function draw() {
}
