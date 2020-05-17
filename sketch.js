let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;

function setup() {//let set up starts and create canvas, strokeweight and stroke
  createCanvas(510, 400);
  strokeWeight(20.0);//let strokeweight change the establish one pixel of the line
  stroke(255, 100);//let stroke color the canvas
}

function draw() {// let draw the background and establish the functions inside
  background(255,0,0);

  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - cos(angle1) * segLength;//let cos calculate the anglemode of x
  y = mouseY - sin(angle1) * segLength;//let sin calculate the anglemode of y

  segment(x, y, angle1);
  ellipse(x, y, 20, 20);//let ellipse draw x,y,w, [h]
}

function segment(x, y, a) {//let function establish  the segment(x, y, a)
  push();
  translate(x, y);//let specifies 
  rotate(a);
  line(0, 0, segLength, 0);//let line to establish x1, y1, x2, y2
  pop();//let pop restores setting and provide more control
  fill(random(255), random(255),random(255));//let random return from 0 to 255
}

