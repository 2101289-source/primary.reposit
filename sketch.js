//Interactive Scene Assignment!
//Sophia Eruero
//Date Start: 09/21/26
//Date Finish: 

//an interactive scene where user
//can change the backround 
//and the colour of the sun
//and interact with a character.





// --------------MAIN INSTRUCTIONS---------------------



// GLOBAL VARIABLES
let bunnyX = 200;
let sunColour = "yellow";
let currentBack = 0;

// ----------------------- FUNCTION SETUPS----------------------------------
 function setup() {
  createCanvas(windowWidth, windowHeight);
}
//plan- first bg will be a normal sunny day. (0)
//second bg will be a golden hour gradient (1)
//third bg will be a sunset gradient(2)
//fourth will be a nighttime gradient (3)
//sun can turn into moon maybe

function bunnyMove(){
  if (keyIsDown(RIGHT_ARROW)){
    bunnyX += 10;
  }

  if (keyIsDown(LEFT_ARROW)){
    bunnyX -= 10;
  }
  //WRAP AROUND
  if(bunnyX > width){
    bunnyX = 0;
  }

  if (bunnyX < 0){
    bunnyX = width;
  }

}

function mousePressed(){ //this will change the suns colour
                        //and the backroundz
                    
  if(mouseButton.center){
    currentBack = (currentBack +1) % 4;
  }

  else if(mouseButton.left){
  let d = dist(mouseX, mouseY, 0, 0);

  if(d < 250){
    if(sunColour === "yellow"){
      sunColour = "gold";
     }
    else if(sunColour === "gold"){
      sunColour = "orange";
  }
    else if(sunColour === "orange"){
      sunColour = "white";
        }
    else{
      sunColour = "yellow";
    }
  } //four sun colour options for
  //three different backrounds:
  //main, golden hour, sunset, and moon!

}
}


// -------------- MAIN DRAWING ----------------
function draw() {

  if(currentBack === 0){
    background("skyblue");
  }
  else if(currentBack === 1){
    background("goldenrod");
  }
  else if(currentBack === 2){
    background("pink");
  }
  else if (currentBack === 3){
    background("navy");
  }

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
  let bY = height - 120; //bY = bunnyY
  //ears
  fill("white");
  stroke("gray");
  ellipse(bunnyX - 20, bY - 35,40,100);
  ellipse(bunnyX + 20, bY - 35,40,100);
  noStroke();
  //body
  circle(bunnyX, bY, 80);
  stroke("black"); //to see it in the grass
  circle(bunnyX - 41, bY + 50,30); //this is the tail
  noStroke(); //thats why theres a noStroke() afterwards
  circle(bunnyX, bY + 55,70); //because its hiding behind the body
  //face
  fill("black");
  circle(bunnyX - 15, bY-5,15);
  circle(bunnyX + 15, bY-5,15);
  circle(bunnyX, bY + 15,5);
  fill("hotpink");
  triangle(bunnyX-5, bY, bunnyX, bY +10, bunnyX + 5, bY);
}

//-------------------BACKROUNDS------------------------

function goldenHour(){

  }






// BACKROUND SWITCH FUNCTION






//SIGNATURE PORTION
function drawName(){
  fill("black");
  textSize(15);
  textAlign(LEFT, BOTTOM);
  text("Sophia! <3", 30, height-15);
}

