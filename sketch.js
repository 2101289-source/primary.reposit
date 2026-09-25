//First assingment
//Sophia Eruero
// 09/21/26



async function setup() {
  createCanvas(windowWidth, windowHeight);
}

//plan- first bg will be a normal sunny day.
//second bg will be a sunset type thing 
//if i can do it
//third bg will be a night scene.
//maybe the sun turns into a moon??

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
  stroke("black");
  triangle(250,1,305,40, 235,75);
  triangle(227,105, 260,180, 180,170);
  triangle(175,180, 200,265, 120,220);
  triangle(100,230, 100,315, 40,245);
  noStroke()

  //suns face
  fill("black");
  circle(40,80,35);
  circle(150,80,35);
  triangle(120,120, 90,160, 60,120);

  //clouds

  //cloud 1
  fill("white");
  circle(500,80,50); 
  circle(480,100,60); //left edge
  circle(540, 80, 55);
  circle(575,105,60); //right edge
  circle(520,105, 60); // bottom center

  //this is the main cloud format.
  //x and y coordinates will
  //be changed in order to add more clouds
  //in different positions

  //cloud 2
  circle(655,195,50);
  circle(580,215,60);
  circle(540, 80, 55);
  circle(730,220,60);
  circle(675,220, 60);




}