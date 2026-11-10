// Working With Images pt 2
// Sophia
// 11/10/26


let pilot, chip;

async function loadAssets(){
  pilot = await loadImage("/assets/aviator.png");
  chip = await loadImage("assets/chip.jpg"); 
}

async function setup() {
  await loadAssets();
  createCanvas(pilot.width, pilot.height);
  pixelDensity(1);

}

function draw() {
  background(220);
  image(pilot,0,0);
  loadPixels(); //loads all pixels on Canvas
  
  //betweeen loadPixels() and updatePixels()
  //run some code to modify pixels array
  boost();
  //to update the screen to reflect new pixels[]
  //call update pixels()
  updatePixels();
}

function boost(){
  //brightening filter
  // "dumb" flter - same effect to each pixel in a single loop

  let boostAmount = map(mouseX,0,width,-50,50);
  for(let i = 0; i < pixels.length; i+=4){
    let r = pixels[i] + boostAmount;
    let g = pixels[i+1] + boostAmount;
    let b = pixels[i+2] + boostAmount;
    pixels[i] = r;
    pixels[i+1] = g;
    pixels[i+2] = b;
    setPixelOneD(i,r,g,b);
    
  }  
}

function setPixelOneD(pos,r,g,b){

  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;

}

