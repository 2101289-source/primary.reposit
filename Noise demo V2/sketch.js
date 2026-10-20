//Tower
// Sophia
// 10/01/26
//


//global variables
let xTime = 5; let xSpeed = 0.01;
xStart = xTime;




async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  xTime = xStart;
  xStart += xSpeed;
  tower();
}

function tower(){
  //create a tower with circles of
  //different y positioning
  //x position will be randomly selected.
  for(let y = 0; y < height; y += 20){

    //perlin noise code (3 lines)
    let x = noise(xTime); // 0-1
    x = map(x,0,1, 0, width);

    circle(x,y,20);
  }

}

