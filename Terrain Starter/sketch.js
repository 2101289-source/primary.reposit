//Terain starter


//Global variables
let rectWidth = 20;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); //TEMPORARY
            //keep until panning feature
           // noLoop causes to loop one time.
}


function keyPressed(){
  rectWidth ++; //increases  rectangle size
  // what happens to generate terrain if width = 0
  background(220);
  generateTerrain();
  
}
function generateTerrain(){
  //using many skinny rectangles 
  //to generate random terrain 
  for(let x = 0; x<width; x += rectWidth){
    //first generate [random] height
    let h = random(0,height);
    //will bwcome something like let h = "" noise
    //BUT change this to use NOISE
    //draw rectangle now that you have height
    rect(x,height,rectWidth, -h);

  }
}

function draw() {
  background(220);
  generateTerrain();
}
