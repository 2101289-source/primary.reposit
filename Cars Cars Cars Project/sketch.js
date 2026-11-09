// Cars Project!
// Sophia
//Date Start: 10/20/2026
//Date Finish:


//Variables

let eastbound = [];
let wesbound = [];
let trafficLight;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  myCar = new Vehicle(100,height/2 + 40, 0,1,2, 0);

  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height / 4 + 20, height / 2 - 40);
    westbound.push(new Vehicle(x, y, floor(random(2)), 0, random(-5, -1)));
  }


  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height / 2 + 20, height * 0.75 - 40);
    eastbound.push(new Vehicle(x, y, floor(random(2)), 1, random(1, 5)));
  }

  }


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
  for(let i = 0; i < width; i++){ //dashes will be drawn
    //until they reach width of the screen
    rect(width/142 + (i * 80),height/2,40,2);
  }
}


class Vehicle{

  constructor(x,y,type, direction,xSpeed,c ){
    this.x = x; this.y = y; this.c = c;
    this.type = type;
    this.direction = direction;
    this.xSpeed = xSpeed;
    this.c = c;
    //the 150,255 makes them pastel hehehe

    this.changeColor();

  }    
  
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
    }


  }

  move(){

    this.x += this.xSpeed; //update position by speed

    //wrap
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
    this.c = color(random(150, 255), random(150,255), random(150,255));


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
//define the contructors of the viehcle class
