//Interactive Scene Assignment!
//Sophia Eruero
//Date Start: 09/21/26
//Date Finish: 10/04/26

//An interactive scene where user
//can change the backgrounds,
//change the colour of the sun,
//and control the movment of a character.

// --------------INSTRUCTIONS---------------------
// Drag mouse to sun and click on sun with LEFT mouse button to trigger a colour switch
//Use left and right arrow keys to move bunny
//Click CENTER mouse button to switch between backgrounds.



// GLOBAL VARIABLES
let bunnyX = 200;
let sunColour = "yellow";
let currentBack = 0;


// -----------------------SETUPS AND CONTROL----------------------------------
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
                    
  if(mouseButton.center){ //center click trigger
    currentBack = (currentBack +1) % 4; //loops and restraints to 3
  }

  else if(mouseButton.left){
  let d = dist(mouseX, mouseY, 0, 0);

  if(d < 250){ //if mouse is within the suns radius, you may switch its colour.
    if(sunColour === "yellow"){
      sunColour = "gold"; // meant for the golden hour background
     }
    else if(sunColour === "gold"){
      sunColour = "orange"; //meant for the sunset background
  }
    else{
      sunColour = "yellow"; //meant for the main backround
    }
  } //three sun colour options for
  //three different backrounds.
  // A moon is automatically drawn with mouseButton.center() in the nightSky switch.

}
}

// -------------- MAIN DRAWING ----------------
function draw() {

  if(currentBack === 0){
    background("skyblue");
  }
  else if(currentBack === 1){
    goldenHour();
  }
  else if(currentBack === 2){
    sunSet();
  }
  else if (currentBack === 3){
    nightSky() ; 
  }

  drawSun();
  drawGrass();
  drawClouds();
  bunnyMove();
  drawBunny();
  drawName();
}

// -------------- MAIN CODE AND FUNCTIONS ------------------

//SUN PORTION
function drawSun(){

  if(currentBack === 3){ //will be a moon for the nightSky bg switch
    stroke("grey");
    fill("linen");
    circle(0,0,500);
    strokeWeight(5)
    arc(50, 50, 60, 60, 0, PI);
    arc(150, 50, 60, 60, 0, PI);
    fill("grey");
    noStroke();
    circle(100,120,20);
  }

  else{ // will be a sun for the other 3 bg switches
  fill(sunColour);
  stroke("black");
  strokeWeight(1);
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
}

//GRASS PORTION
function drawGrass(){
  fill("green");
  noStroke();
  rect(0, height -100 ,width, 100); //allows grass to adjust to different screen sizes

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

}

// BUNNY CHARACTER PORTION
function drawBunny(){
  let bY = height - 120; //bY = bunnyY
                        //allows bunny to adjust to different screen sizes

  //ears
  strokeWeight(1); // gets rid of strokeWeight(5) bug during nightsky switch
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

// --------------------------THE GOLDEN HOUR
function goldenHour(){
  noStroke();
  //two main colours
  let colourTop = color(255,220,0);
  let colourBottom = color(255,102,13);
//four lerp colours
  let interA = lerpColor(colourTop, colourBottom, 0.33);
  let interB = lerpColor(colourTop, colourBottom,0.44);
  let interC = lerpColor(colourTop, colourBottom,0.66);
  let interD = lerpColor(colourTop, colourBottom, 0.88)

  let h = height / 6.5; //allows rectangles to be manipulated
  fill(colourTop);
  rect(0,0,width,h);

  fill(interA);
  rect(0,h,width,h);

  fill(interB);
  rect(0,h*2,width,h);

  fill(interC);
  rect(0,h*3,width,h);

  fill(interD);
  rect(0,h*4,width,h);

  fill(colourBottom);
  rect(0,h*5,width,h);
  }

// --------------------------------THE SUNSET
  function sunSet(){
  noStroke();
  //two main colours
  let colourTop = color(255,37,135);
  let colourBottom = color(255,109,15);
//four lerp colours
  let interA = lerpColor(colourTop, colourBottom, 0.33);
  let interB = lerpColor(colourTop, colourBottom,0.44);
  let interC = lerpColor(colourTop, colourBottom,0.66);
  let interD = lerpColor(colourTop, colourBottom, 0.88)

  let h = height / 6.5; 
  fill(colourTop);
  rect(0,0,width,h);

  fill(interA);
  rect(0,h,width,h);

  fill(interB);
  rect(0,h*2,width,h);

  fill(interC);
  rect(0,h*3,width,h);

  fill(interD);
  rect(0,h*4,width,h);

  fill(colourBottom);
  rect(0,h*5,width,h);
  }

  // ------------------------THE NIGHT SKY
function nightSky(){
  noStroke();
  //two main colours
  let colourTop = color(5,1,122);
  let colourBottom = color(129,33,145);
//four lerp colours
  let interA = lerpColor(colourTop, colourBottom, 0.33);
  let interB = lerpColor(colourTop, colourBottom,0.44);
  let interC = lerpColor(colourTop, colourBottom,0.66);
  let interD = lerpColor(colourTop, colourBottom, 0.88)

  let h = height / 6.5; 
  fill(colourTop);
  rect(0,0,width,h);

  fill(interA);
  rect(0,h,width,h);

  fill(interB);
  rect(0,h*2,width,h);

  fill(interC);
  rect(0,h*3,width,h);

  fill(interD);
  rect(0,h*4,width,h);

  fill(colourBottom);
  rect(0,h*5,width,h);

}
// ---------------end of main-------------------

//SIGNATURE PORTION
function drawName(){
  fill("black");
  textSize(15);
  textAlign(LEFT, BOTTOM);
  text("Sophia! <3", 30, height-15);
}
// WE DID IT YAY!!  
