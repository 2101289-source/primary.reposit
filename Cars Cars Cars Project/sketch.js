// Cars Project!
// Sophia
//Date Start: 10/20/2026
//Date Finish:


// GLOBAL Variables
let eastbound = [];
let westbound = [];
let trafficLight;

// ------------- SETUP --------------------
async function setup() {
  createCanvas(windowWidth, windowHeight);
  myCar = new Vehicle(100,height/2 + 40, 0,1,2, 0);

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
  for (let i = 0; i < westbound.length; i++) {
    westbound[i].action();
  }

  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].action();
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

// ------------- CLASS VEHICLE --------------------------------------

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

    if(this.type === 0){ //car display
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


    if(this.type === 1){
      //truck body
      fill(this.c);
      noStroke();
      rect(this.x -10, this.y- 10, 60,30); 


      //FRONT OF TRUCK & DIRECTION CASES
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
      this.xSpeed = min(15, this.xSpeed + 0.5);
    } else {
      this.xSpeed = max(-15, this.xSpeed - 0.5);
    }

  }
  speedDown(){
    if (this.direction === 1) {
      this.xSpeed = max(0, this.xSpeed - 0.5);
    } else {
      this.xSpeed = min(0, this.xSpeed + 0.5);
    }

  }
  changeColor(){
    this.c = color(random(100,255), random(60,255), random(100,255));
    //100,255 makes the colours more pastel hehe

  }
  action(){
    this.move();

    // 1% chance per frame (random(1) < 0.01)
    if (random(1) < 0.01) {
      this.speedUp();
    }
    if (random(1) < 0.01) {
      this.speedDown();
    }
    if (random(1) < 0.01) {
      this.changeColor();
    }

    this.display();
  }

}


class TrafficLight{


}


//to do list:
// speed detection
//traffic light feature only we are so tired.