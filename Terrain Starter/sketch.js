//Perlin Terrain Project

//Global variables
let rectWidth = 20;
let hTime = 3; let hSpeed = 0.01;
let hStart = hTime;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); //TEMPORARY
            //keep until panning feature
           // noLoop causes to loop one time.
}


function keyPressed(){
  rectWidth ++; //increases  rectangle size when any key is pressed
  // what happens to generate terrain if width = 0
  background(220);
  hTime = hStart;
  hStart = hSpeed;
  generateTerrain();
  
}
function generateTerrain(){
  //using many skinny rectangles 
  //to generate random terrain 
  for(let y = 0; y<height; y += 30){
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
}


//im very lost.