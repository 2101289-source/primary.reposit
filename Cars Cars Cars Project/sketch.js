// Cars Project!
// Sophia
//Date Start: 10/20/2026
//Date Finish: 11/11/2026


// GLOBAL Variables
let eastbound = [];
let westbound = [];
let trafficLight;

// ---------------- SETUP --------------------
async function setup() {
  createCanvas(windowWidth, windowHeight);
  myCar = new Vehicle(100,height/2 + 40, 0,1,2, 0);
  trafficLight = new TrafficLight(20,20);

  // SETUP variables
  let westLanes = [height * 0.30, height * 0.42];
  let eastLanes = [height * 0.56, height * 0.67];



  //WESTBOUND NEGATIVE SPEEDS
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(westLanes);
    let type = random([0,1]);
    westbound.push(new Vehicle(x, y, type, 0, random(-5,-2)));
  }

  //EASTBOUND POSITIVE SPEEDS
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(eastLanes);
    let type = random([0,1]);
    eastbound.push(new Vehicle(x, y,type, 1, random(2,5)));
  }

}

// ----------------------- DRAWING FUNCTIONS ----------------------
function draw() {
  background(220);
  drawRoad();
  trafficLight.display();


// --------VEIHCLE DISPLAY AND STOP/GO--------------

//eastbound
  for (let i = 0; i < westbound.length; i++) {
    if(trafficLight.state === "green"){
    westbound[i].action(); //move
    }
    else{
      westbound[i].display(); //freeze
    }
  }
//westbound
  for (let i = 0; i < eastbound.length; i++) {
    if(trafficLight.state === "green"){

    eastbound[i].action();//move
    }
    else{
      eastbound[i].display(); //freeze
    }
  }
}

function drawRoad(){
  fill("black");
  noStroke();
  rect(0,height/4,width,height/2);
  fill("gold");//gold is used for realism and
  stroke("gold"); // represents two way traffic
  strokeWeight(4);

  //lane dashes across width of the screen
  for(let i = 0; i < width; i++){
    rect(width/142 + (i * 80),height/2,40,2);
  }
}

//---------ADDING VEICLES FUNCTION----------
function mousePressed() {
  let westLanes = [height * 0.30, height * 0.42];
  let eastLanes = [height * 0.56, height * 0.67];

  // Pick random veichle
  let type = random([0, 1]);

  if (keyIsDown(SHIFT)) {
    // SHIFT + CLICK = Spawn Westbound car or truck
    let y = random(westLanes);
    let speed = random(-5, -2);
    let spawnX = width; // spawns at right edg of screen
    westbound.push(new Vehicle(spawnX, y, type, 0, speed));
  } else {
    // REGULAR CLICK = Spawn Eastbound car or truck
    let y = random(eastLanes);
    let speed = random(2, 5);
    let spawnX = -60; //spawns at left edge of screen
    eastbound.push(new Vehicle(spawnX, y, type, 1, speed));
  }
}


function keyPressed(){
  if(keyCode === 32){
    trafficLight.toggle();
  }
}

// ------------------ CLASS VEHICLE --------------------------------------

class Vehicle{

  constructor(x,y,type, direction,xSpeed,c ){
    this.x = x; this.y = y; this.c = c;
    this.type = type;
    this.direction = direction;
    this.xSpeed = xSpeed;
    this.c = c;
    this.changeColor();

  }    
  

  // ------ MAIN DISPLAY -----------
  display(){
    if (random(1) < 0.01){ //colour flash!
      this.changeColor();
    }
 // ----- CAR-------
    if(this.type === 0){
      //car body
      fill(this.c);
      noStroke();
      rect(this.x, this.y,60,30);

      //wheels
      fill("white");
      rect(this.x - 2, this.y +35 ,15,8);
      rect(this.x - 2, this.y -12 ,15,8);
      rect(this.x +40, this.y +35 ,15,8);
      rect(this.x +40, this.y -12 ,15,8);
    }

// --------- TRUCK ------------
    if(this.type === 1){ // truck display
      //truck body
      fill(this.c);
      noStroke();
      rect(this.x -10, this.y- 10, 60,30); 


    // ------FRONT OF TRUCK & DIRECTION CASES--
      //for eastbound
      if (this.direction === 1){
        rect(this.x +53, this.y- 15, 10,40);
      //first argument creates the small gap
      }
      //for westbound
      else{
        rect(this.x - 23, this.y - 15, 10,40);
      }
  
    }


  }

  changeColor(){
    this.c = color(random(100,255), random(60,255), random(100,255));
    //100,255 makes the colours more pastel hehe
  }

// ------------- MOVEMENT -----------------------

  move(){
    this.x += this.xSpeed; //update position by speed

    //wrap!
    if(this.x> width){
      this.x = -60;
    }
    else if(this.x < -60){
      this.x = width; //
    }


  }
  speedUp(){
    if (this.direction === 1) {
      this.xSpeed = min(10, this.xSpeed + 0.5);
    } else {
      this.xSpeed = max(-10, this.xSpeed - 0.5);
    }

  }

  speedDown(){
    if (this.direction === 1) {
      this.xSpeed = max(1, this.xSpeed - 0.5);
    } else {
      this.xSpeed = min(-1, this.xSpeed + 0.5);
    }

  }

  action(){
    this.move();


    // 1% chance per frame
    //allows vehicle speeds to shift randomly
    if (random(1) < 0.01) {
      this.speedUp();
    }
    if (random(1) < 0.01) {
      this.speedDown();
    }

    this.display();
  }
}


 class TrafficLight{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = "green"; // starts green
  }

  display() {
  //box thingy
   fill("black");
   noStroke();
   rect(this.x, this.y, 70, 120, 5);

//----------green light bulb------------
if(this.state === "green"){
  fill("lime"); //bright light (on)
}
else{
  fill("DarkGreen"); //dim light (off)
}
  circle(this.x + 35, this.y + 90, 40, 40);


//-----------red light bulb----------
if(this.state === "red"){
 fill("red"); //bright light (on)
}
else{
  fill("DarkRed") //dim light (off)
}
 circle(this.x + 35, this.y + 30, 40, 40);

}


// --------toggle switcher-----
toggle(){
  if(this.state === "green"){
    this.state = "red"
  }
  else{
    this.state = "green"
  }
 }
}

// ----------------------END OF CODE-----------------------
