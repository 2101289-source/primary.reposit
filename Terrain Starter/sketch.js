//Perlin Terrain Project
//Sophia
//Date Start: Oct. 2 2026
//Date finish:


//Global variables
let rectWidth = 20;
let hTime = 5; let hSpeed = 0.01;
let hStart = hTime;
let panSpeed = 0.01;

  function setup() {
  createCanvas(windowWidth, windowHeight);
}


function drawFlag(x,y){
  push()
  stroke(0);
  line(x,y,x,y-30);

  fill("black");
  triangle(x,y-30,x+15, y-22,x,y-15);
  pop();
}



function generateTerrain(){
  //using many skinny rectangles 
  //to generate random terrain 
  fill("grey");

  //flag height finding variables
  let highestX = 0; //stores horizontal positioning for the flag
  let highestY = height; //starts down, goes up

  for(let x = 0; x<width; x += rectWidth){
    let h = noise(hTime); //randomized hills and dips
    h = map(h,0,1,0,height); // sets rectangle height
    hTime += hSpeed;

 //flag placement code
    let currentTopY = height - h; //difference between top of screen(0)
                                  // and peak of rectangle

    if (currentTopY < highestY){ //if peak is higher than previously recorded value
      highestY = currentTopY; // record new height
      highestX = x + rectWidth/2; // centers flag on rectangle
    }
    //draw rectangle
    rect(x,height,rectWidth, -h);

  }
  //draw flag
  drawFlag(highestX, highestY);
}

function draw() {
  background(220);

  if(keyIsDown(LEFT_ARROW)){ //WE HAD TO USE KEYISDOWN THIS WHOLE TIME
    rectWidth = max(1, rectWidth - 0.1 ); //maximum value to decrease to = 1
                                      // rectWidth - 0.1 cannot be below 1
  }
  if(keyIsDown(RIGHT_ARROW)){
    rectWidth += 0.1; // slow increase
  }
  

  generateTerrain();
  hTime = hStart;
  hStart += panSpeed;

}

//WHATS LEFT
//calculate the average and  show it with a line