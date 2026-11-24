// Recursive Imagery
// Sophia
// 11/24/25


async function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function concentric(x,y,d){
  circle(x,y,d);
  if(d>10){ // recursive case
    concentric(x,y, d/2);

  }

  //implicit base case
  //if d =< 10, end and unravel.

}

function draw() {
  background(220);
  circleFractal(width/2, height/2, width/2);

}
function circleFractal(x,y,d){
  circle(x,y,d);
  if (d>1){
    circleFractal(x - d/2, y, d/2);
    circleFractal(x + d/2, y, d/2);
    circleFractal(x, y - d/2, d/2);
  }
}