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
  for(let y = 0; y < race.height; y++){
    for(let x = 0; x < race.width; x++){
      if(x >= race.width/2){
        let i = ( x + y * race.width) * 4;
        race.pixels[i+1] = 0; //sets green to zero
      }
    }
  } 
  race.updatePixels();
}



function five(){
  night.loadPixels();
  for(let i = 0; i < night.pixels.length; i+=4){
    let r= night.pixels[i]; 
    let g = night.pixels[i+1];
    let b = night.pixels[i+2];


    let avg = (r + g + b)/ 3;
    
    // 255/5
    if(avg < 51){
      night.pixels[i] = 168;
      night.pixels[i+ 1] = 2;
      night.pixels[i + 2] = 130;
    }
     
    // 51 *2
    else if (avg < 102){
      night.pixels[i] = 240;
      night.pixels[i + 1] = 45;
      night.pixels[i + 2] = 195;
    }
   
    //51 * 3
    else if( avg < 153){
      night.pixels[i] = 255;
      night.pixels[i + 1] = 138;
      night.pixels[i + 2] = 213;
    }
    
    //51 * 4
    else if (avg < 204){
      night.pixels[i] = 250;
      night.pixels[i + 1] = 190;
      night.pixels[i + 2] = 229;
    }
    else{
      night.pixels[i] = 255;
      night.pixels[i + 1] = 218;
      night.pixels[i + 2] = 242;
    }

  }

  night.updatePixels();

}

function mirrorH(){
  hand.loadPixels();


  

}