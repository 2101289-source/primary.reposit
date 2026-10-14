//Find the smallest circle
// // Your Sophia
// 10/05/26

const NUM_CIRCLES = 100; //constants do not change
let seed;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  //draw NUM_CIRCLES circles all over the screen
  //sizes are random, noFill() by default
  let smallDiameter = Infinity;
  let smallX =  -1; //placeholder
  let smallY = -1; //dummy value

  noFill();
  for(let i=0; i < NUM_CIRCLES; i++){
    let x = random(0,width);
    let y = random(0,height);
    let z = random(20,60);
    circle(x,y,z);

    //is this the new smallest circle?

    if(z < smallDiameter){
      smallDiameter = z;
      smallX =  x;
      smallY = y;
    }
  }
//draw/ colour in the smallest circle
  fill("hotpink");
  circle(smallX, smallY, smallDiameter);

}