// Image Manipulation Exercises
// Sophia
// 11/16/2026
//

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

  image(chip, 0, height/2, 300,300);
  image(hand, spacing ,height/2,300,300);
  image(night, spacing * 2,height/2,300,300);
  image(race, width -300 ,height/2,300,300);

  majorityColour();
  noGreen();
  five();
  mirrorH();
}

// --------- MANIPULATION FUNCTIONS -------------
 
function majorityColour(){
  chip.loadPixels();


}

function noGreen(){
  hand.loadPixels();

  

  

}

function five(){
  night.loadPixels();



}

function mirrorH(){
  race.loadPixels();


  

}