//Boook classs


//Global variables
let myBook; //cant INIT objects here


async function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS30 Text", "Mr Scott", 
    1234567891011,"leatherbound",500, width*0.3);

}

function draw() {
  background(220);
  myBook.display();

  //classss are organized into the bottom of our file, or their own file.
  
  class Book{
    constructor(title, author, isbn, cover, pages){
    this.title = title
    this.author = author
    this.isbn = isbn
    this.cover = cover
    this.pages = pages
    this.x + 1

    }
  }

  display(){
    rectMode(CENTER); textAlign(CENTER);
    textSize(20);

    switch(this.cover){
      case "softcover":
      fill("220,220,0"); break;
      case "hardcover":
      fill(100,225,225); break
      case "leatherbound":
      fill(150,0,150); break;
    }
    //finally draw the book spine
    rect(this.x, height/2,this.pages/10,150);
    fill(255);


  }
}
