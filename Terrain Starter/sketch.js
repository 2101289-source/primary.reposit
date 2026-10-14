//Perlin Noise Project
//Sophia
//Date Start: Oct. 2 2026
//Date finish:


//Global variables
let rectWidth = 20;
let xTime = 5; let xSpeed = 0.02;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); //TEMPORARY
            //keep until panning feature
            // noLoop causes to loop one time.
}


function keyPressed(){
  rectWidth++;
  // what happens to generate terrain if width = 0
  background(220);
  generateTerrain();
  
}
function generateTerrain(){
  fill("black");
  //using many skinny rectangles 
  //to generate random terrain 
  for(let x = 0; x<width; x += rectWidth){
    //first generate [random] height
    let h = noise(xTime);
    //will bwcome something like let h = "" noise
    //BUT change this to use NOISE
    //draw rectangle now that you have height
    x = map(x,0,10,width);
    rect(x,height,rectWidth, -h);

  }
}

function draw() {
  background(220);
  generateTerrain();
}
