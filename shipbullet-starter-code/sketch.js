// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let laser;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
  laser = new Bullet(width/2, height/2, bulletImage);
}

function draw() {
  background("black");
  laser.display();
  laser.update();
  enterprise.update();
  enterprise.display();
  

}
function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.x = x;
    this.y = y;
    this.theImage = theImage;
  }

  update() {
    if(keyIsDown(LEFT_ARROW)){
      this.x -= 5;
    }

    if(keyIsDown(RIGHT_ARROW)){
      this.x += 5;
    }
  
    if(keyIsDown(UP_ARROW)){
      this.y -= 5;
    }

    if(keyIsDown(DOWN_ARROW)){
      this.y += 5;
    }
  
  }

  display() {
    image(this.theImage, this.x, this.y);
    // show the ship
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.y = y;
    this.x - x;
    this.theImage = theImage;
    // define the variables needed for the bullet here
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
  }

  display() {
    image(this.theImage, this.x, this.y);

    // show the bullet
  }

  isOnScreen() {
    // check if the bullet is still on the screen
  }
}

