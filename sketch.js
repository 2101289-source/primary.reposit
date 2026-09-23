//First assingment
//Sophia Eruero
// 09/21/26



async function setup() {
  createCanvas(windowWidth, windowHeight);
}

//plan- the first world will be a normal world.
//the second  will be a sky world
//the third will be a candy wonderland 
function draw() {
  background("skyblue");
//sun
  fill("yellow")
  stroke("black");
  circle(0,0,500,);


  //grass
  fill("green");
  noStroke();
  rect(0,870,windowWidth,300);

  //suns rays
  fill("yellow");
  stroke("black")
  triangle(250,1, 305,40, 235,75);
  triangle(227,105, 260,180, 180,170);



  



}
