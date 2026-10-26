// Cars Project!
// Sophia
//Date Start: 10/20/2026
//Date Finish:


//Variables

let eastbound = [];
let wesbound = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);

  myCar = new Vehicle(100,height/2 + 40, 0,0,1);
}

function draw() {
  background(220);
  drawRoad();
  myCar.display();
  // myCar.changeColor();
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
    this.c =
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
  }


  move(){

  }

  speedUp(){

  }
  speedDown(){

  }

  changeColor(){
    this.c = color(random(150, 255), random(150,255), random(150,255));


  }

  action(){

  }
}




class TrafficLight{


}


//to do list:
//define the contructors of the viehcle class


//next quiz will be objects and transformations just a note

