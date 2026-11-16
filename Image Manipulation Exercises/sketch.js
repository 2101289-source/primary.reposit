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

function draw() {
  background(220);

  majorityColour();
  noGreen();
  five();
  mirrorH();
}



function majorityColour(){
  image(chip, 0, height/2, 300,300);

}


function noGreen(){
  image(hand, 300,height/2,300,300);


}


function five(){
  image(night, 600,height/2,300,300);


}


function mirrorH(){
  image(race, 900,height/2,300,300);


}