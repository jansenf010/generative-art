/* 👇 Start writing your p5.js code here */

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
let img20;




function preload() {
  img1 = loadImage('images/balder.jpg');
  img2 = loadImage('images/balderhand.jpg');
  img3 = loadImage('images/ballicht.jpg');
  img4 = loadImage('images/baldertara.jpg');
  img5 = loadImage('images/baltaar.jpg');
  img6 = loadImage('images/beweegbal.jpg');
  img7 = loadImage('images/bloem.jpg');
  img8 = loadImage('images/floorfoto.jpg');
  img9 = loadImage('images/grijs.jpg');
  img10 = loadImage('images/groepfoto.jpg');
  img11 = loadImage('images/grondbal.jpg');
  img12 = loadImage('images/juulbalder.jpg');
  img13 = loadImage('images/juulenik.jpg');
  img14 = loadImage('images/natuur.jpg');
  img15 = loadImage('images/onderbal.jpg');
  img16 = loadImage('images/petionlicht.jpg');
  img17 = loadImage('images/schaduw.jpg');
  img18 = loadImage('images/taarfloorbal.jpg');
  img19 = loadImage('images/tarabalder.jpg');
  img20 = loadImage('images/taraonder.jpg');
}

let randomImage = img1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(106, 242, 190);

  // Set colors
  //fill(204, 101, 192, 127);

  
}

let value = 0;

function draw() {
  image(randomImage, 0, 0, 300, 300);
  ellipse(300, 100, 100, 100);
  noStroke();
  fill(value);
  rect(600, 50, 100, 100);
  noStroke();

  button = createButton('click me');
  button.position(0, 0);
  button.mousePressed(changeBG);
 
  translate(1000, 100);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 25, 15, 75);
    rotate(PI/5);
  }

  

}

//function windowResized() {
  //resizeCanvas(windowWidth, windowHeight);
//}



function changeBG (){
  background(255);
}

function mouseClicked() {
  //give random picture
  // if (value === 0) {
  //   value = 255;
  // } else {
  //   value = 0;
  // }

  //ellipse(300, 100, 100, 100);
  // prevent default


  let randomNumber = Math.floor(Math.random() * 20);
  let newImage = 'img' + randomNumber;
  console.log(newImage);
  randomImage = newImage;
}