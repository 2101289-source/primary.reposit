//Perlin Terrain Project

//Global variables
let rectWidth = 20;
let hTime = 5; let hSpeed = 0.02;
let hStart = hTime;
let panSpeed = 0.01;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    rectWidth = max(2,rectWidth - 2); //minimum value 2
                                      // rectWidth - 2 cannot be below 2
  }
  else if(keyCode === RIGHT_ARROW){
    rectWidth += 5;
  }
  
}
function generateTerrain(){
  //using many skinny rectangles 
  //to generate random terrain 
  for(let y = 0; y<width; y += rectWidth){
    //first generate [random] height
    let h = noise(hTime);
    h = map(h,0,1,0,height);
    hTime += hSpeed;
    //draw rectangle now that you have height
    rect(y,height,rectWidth, -h);

  }
}

function draw() {
  background(220);
  generateTerrain();
  hTime = hStart;
  hStart += panSpeed;
 
}


//im very lost.