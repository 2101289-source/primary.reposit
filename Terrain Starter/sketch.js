//Perlin Terrain Project
//Sophia
//Date Start: Oct. 2 2026
//Date finish:


//Global variables
let rectWidth = 20;
let hTime = 5; let hSpeed = 0.02;
let hStart = hTime;
let panSpeed = 0.01;

  function setup() {
  createCanvas(windowWidth, windowHeight);
}



function generateTerrain(){
  //using many skinny rectangles 
  //to generate random terrain 
  fill("grey");
  for(let x = 0; x<width; x += rectWidth){
    //first generate [random] height
    let h = noise(hTime);
    h = map(h,0,1,0,height);
    hTime += hSpeed;
    //draw rectangle now that you have height
    rect(x,height,rectWidth, -h);

  }
}

function draw() {
  background(220);

  if(keyIsDown(LEFT_ARROW)){
    rectWidth = max(1, rectWidth - 0.1 ); //minimum value 1
                                      // rectWidth - 0.1 cannot be below 1
  }
  if(keyIsDown(RIGHT_ARROW)){
    rectWidth += 0.1; // slow increase
  }
  

  generateTerrain();
  hTime = hStart;
  hStart += panSpeed;

}

//i had to do a copy paste from the commits again *cries*