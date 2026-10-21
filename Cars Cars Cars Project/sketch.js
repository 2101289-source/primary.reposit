// Cars Project!
// Sophia
//Date Start: 10/20/2026
//Date Finish:


//Variables

let eastbound = [];
let wesbound = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
  display();
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

  constructor(x,y,c,type, direction,xSpeed ){
    this.x = x; this.y = y; this.c = c;
    this.type = type;
    this.direction = direction;
    this.xSpeed = xSpeed;

  }    
  
  display(){
    if(this.type === 0){
      rect(this.x, this.y,60,30);
      fill("pink");
      rect(this.x - 15, this.y +16,12,6);
      rect(this.x +15, this.y +16,12,6);
    }
  }

}




class TrafficLight{


}


//to do list:
//define the contructors of the viehcle class


//next quiz will be objects and transformations just a note

