// Image Manipulation Exercises
// Sophia
// Date Start: 11/16/2026
//Date finish: 

async function loadAssets(){
  chip = await loadImage("assets/chip.jpg");
  hand = await loadImage("assets/hand.jpg");
  night = await loadImage("assets/nuit.jpg");
  race = await loadImage("assets/race.jpg");
}

async function setup() {
  await loadAssets();
  createCanvas(windowWidth, windowHeight);

}

// --------- IMAGE DISPLAY AND FUNCTION CALLS ---------
function draw() {
  background(220);

  let spacing = (width-300)/3;
  //this is done to space out the images nicely

  image(chip, 0, height/2, 300,300);
  image(race, spacing ,height/2,300,300);
  image(night, spacing * 2,height/2,300,300);
  image(hand, width -300 ,height/2,300,300);

  majorityColour();
  noGreen();
  five();
  mirrorH();
}

// --------- MANIPULATION FUNCTIONS -------------
 
function majorityColour(){
  chip.loadPixels();
  for(let i = 0; i < chip.pixels.length; i += 4 ){
    let r = chip.pixels[i];
    let g = chip.pixels[i + 1];
    let b = chip.pixels[i + 2];
    
    //Pure red
    if(r >= g && r >= b){
      chip.pixels[i] = 255;
      chip.pixels[i+1] = 0;
      chip.pixels[i + 2] = 0;
    }
    //Pure green
    else if(g >= r && g >= b){
      chip.pixels[i]= 0;
      chip.pixels[i+ 1] = 255;
      chip.pixels[i + 2] = 0;
    }

    //Pure blue
    else{
      chip.pixels[i] = 0;
      chip.pixels[i+1] = 0;
      chip.pixels[i+2] = 255;
    }
  }


  chip.updatePixels();

}

function noGreen(){
  race.loadPixels();

  

  

}

function five(){
  night.loadPixels();



}

function mirrorH(){
  hand.loadPixels();


  

}