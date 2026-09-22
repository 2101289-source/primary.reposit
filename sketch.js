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
  fill("lightyellow")
  stroke("white");
  circle(0,0,500,);


  //grass
  fill("green");
  noStroke();
  rect(0,870,windowWidth,300);

  //suns face
  fill("yellow");
  stroke("gold")
  triangle(200,75, 160,20, 130,75);

  triangle(3,75, 40,20, 70,75);


  



}
