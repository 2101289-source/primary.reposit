//Simple Objects and Arrays
// Sophia
// 10/07/26

// let ball; temp disabled
let ballArray = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // ball = { //object notation. Inside brackets
  //          //set up several property: value pairs
  //   x: 300, y:400, size: 20,
  //   c: color(random(255),random(255),random(255)),
  //   xSpeed: 5, ySpeed: 4
    
  // };
}
function initObject(n){
  //create n ball objects in array
  for(let i = 0; i < n; i++){
  ballArray.push(generateBall(mouseX,mouseY));
}
}
function generateBall(){
  //create and return a ball object
  //initial position x,y
  let b = {
    x:x, y:y, size:20,
    c: color(random(255),random(255),random(255)),
    xSpeed: random(-6,6),
    ySpeed: random(-6,6),
    lifeTime: random(40,60)
  };
  return b;
}

function keyPressed(){
  initObject(10); //creates 10 objects
}
function moveBall(b){
// b -> ball type object
//update position and draw the ball

//Update section
b.x = b.x + b.xSpeed; b.y += b.ySpeed;

//Walls 
if(b.x < 0 || b.x > width) b.xSpeed *= - 1;
if(b.y < 0 || b.y > height) b.ySpeed *= -1;
//makes the ball bounce off the walls
//must be -1 to do this.

//Draw section
fill(b.c);
circle(b.x, b.y, b.size);
}

function draw() {
  background(220);
  //loop through an array (traversal)
  for(let i = 0; i < ballArray.length; i++){
    let b = ballArray[i];
    moveBall(b);
    b.lifeTime --;
    if(b.lifeTime < 1){
      // .splice deletes itmes from an array
      //.splice(pos, #of items to delete, [add])
      ballArray.splice(i,1);

    }

  }

  // moveBall(ball);

  //add via mouse
if(mouseIsPressed){
  ballArray.push(generateBall(mouseX,mouseY));
}
}

