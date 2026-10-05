//Interactive Scene Assignment!
//Sophia Eruero
//Date Start: 09/21/26
//Date Finish: 

//an interactive scene where user
//can change the backround 
//and the colour of the sun
//and interact with a character.


// GLOBAL VARIABLES
let bunnyX = 200;
let sunColour = "yellow";

// ----------------------- FUNCTION SETUPS----------------------------------
 function setup() {
  createCanvas(windowWidth, windowHeight);
}
//plan- first bg will be a normal sunny day.
//second bg will be a golden hour gradient
//third bg will be a sunset gradient

function bunnyMove(){
  if (keyIsDown(RIGHT_ARROW)){
    bunnyX += 5;
  }

  if (keyIsDown(LEFT_ARROW)){
    bunnyX -= 5;
  }
  //WRAP AROUND
  if(bunnyX > width){
    bunnyX = 0;
  }

  if (bunnyX < 0){
    bunnyX = width;
  }

}

function mousePressed(){
  if(mouseButton === LEFT){
    if(sunColour === "yellow"){
      sunColour = "gold";
     }
    else if(sunColour === "gold"){
      sunColour = "orange";
  }
    else{
      sunColour = "yellow";
  }

}
}


// -------------- MAIN DRAWING ----------------
function draw() {
  background("skyblue");
  drawSun();
  drawGrass();
  drawClouds();
  bunnyMove();
  drawBunny();
  drawName();
}

// -------------- MAIN  DRAW FUNCTIONS ------------------

//SUN PORTION
function drawSun(){
  fill(sunColour);
  stroke("black");
  circle(0,0,500);
  //suns rays
  fill(sunColour);
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
}


//GRASS PORTION
function drawGrass(){
  fill("green");
  noStroke();
  rect(0, height -100 ,width, 100);

}

// CLOUD PORTION
function drawClouds(){
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
  circle(620,215,60); //left edge will be used to reference movement
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
  //once again out of time, clouds will stay stationary
}

// BUNNY CHARACTER PORTION
function drawBunny(){
  //ears
  fill("white");
  stroke("grey");
  ellipse(bunnyX - 20, 745,40,100);
  ellipse(bunnyX + 20, 745,40,100);
  noStroke();
  //body
  circle(bunnyX, 780, 80);
  stroke("grey");
  circle(bunnyX - 41,830,30); //this is the tail
  noStroke(); //thats why theres a noStroke() afterwards
  circle(bunnyX, 835,70); //because its hiding behind the body
  //face
  fill("black");
  circle(bunnyX - 15, 775,15);
  circle(bunnyX + 15, 775,15);
  circle(bunnyX, 795,5);
  fill("hotpink");
  triangle(bunnyX-5, 780, bunnyX, 790, bunnyX + 5, 780);
}


//BACKROUND DRAWING CHARACTERISTICS (i cant spell)


//SIGNATURE PORTION
function drawName(){
  fill("black");
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Sophia", width/2, height/2);
}

// IT WAS WORKING BEFORE WAAAAH

// I HAD TWO DIFFERENT SKETCHES WHAT
//COPY PASTED FROM OTHER SKETCH