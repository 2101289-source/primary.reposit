// CLockface Challenge


async function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  drawClock();
  drawTicks();
}

function drawClock(){
  //clock body
  fill('white');
  circle(width/2, height/2, 300);
  
}

function drawTicks(){
  fill("black");
  push();
  strokeWeight(5);
  translate(width/2, height/2);
  for(let i = 0; i< 60; i++){
    push();
    rotate(i*6);
    if(i%5 === 0){
      strokeWeight(5);
    }
    else{
      strokeWeight(2);
      rect(0,80, 0, 40);

    }
    
    rect(0,80, 0, 65);
    // rotate(40);
    pop();
  }
    
  
  }


//

