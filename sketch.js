//First assingment
//Sophia Eruero
// 09/21/26

//an interactive scene where user
//can change the backround 
//and interact with a character.



//VARIABLES

let bunnyX = 200;
let bunnyspeed = 5;

// -------- FUNCTION SETUPS -----------------

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

//plan- first bg will be a normal sunny day.
//second bg will be a golden hour gradient
//third bg will be a sunset gradient


// -------- MAIN DRAWING ---------

function draw() {
  background("skyblue");


//sun
  fill("yellow");
  stroke("black");
  circle(0,0,500,);


  //suns rays
  fill("yellow");
  stroke("black");
  triangle(250,1,305,40, 235,75);
  triangle(227,105, 260,180, 180,170);
  triangle(175,180, 200,265, 120,220);
  triangle(100,230, 100,315, 40,245);
  noStroke();

  //suns face
  fill("black");
  circle(40,80,35);
  circle(150,80,35);
  triangle(120,120, 90,160, 60,120);
  stroke("black");
  noStroke();

  //I plan on having the suns face move up and down in an idle

  //grass
  fill("green");
  noStroke();
  rect(0,870,windowWidth,300);


  // ------------- clouds!! --------------

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
  circle(620,215,60);
  circle(690, 200, 55);
  circle(720,220,60);
  circle(675,220, 60);

  //cloud 3
  circle(870,80,50);
  circle(850,100,60);
  circle(910, 80, 55);
  circle(935,105,60);
  circle(890,105,60);

  //cloud movement code goes here..?

  // ----------- bunny character!! --------------

  //ears
  fill("white");
  stroke("grey");
  ellipse(180,745,40,100);
  ellipse(220,745,40,100);
  noStroke();

  //body
  circle(200,780,80);
  stroke("grey");
  circle(159, 830,30); //this is the tail
  noStroke(); //thats why theres a noStroke() afterwards
  circle(200,835,70); //because its hiding behind the body

  //face
  fill("black");
  circle(185,775,15);
  circle(215,775,15);
  circle(200, 795,5);
  fill("hotpink");
  triangle(195,780, 200,790, 205,780);



//test comment here for third clone



  //character is gonna be a bunny that moves with the L and R arrows








}