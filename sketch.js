/* 👇 Start writing your p5.js code here */


var r = map(sin(frameCount), -1, 1, 100, 200)
var g = map(i, 0, 50, 100, 200)
var b = map(cos(frameCount), -1, 1, 200, 100)
var p = rotate(frameCount / 50)



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(10);

  rotateX(60)

  noFill()
  

  for(var i = 0; i < 50; i++){


    stroke(r, g, b)

    var p = rotate(frameCount / (Math.floor(Math.random()*50)));

    beginShape()
    for (var j = 0; j < 360; j += 150 ){
      var rad = i * 5

      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 3 + i *10)* (Math.floor(Math.random()*50));
     

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}

function keyPressed(){
    if (keyCode === 82){
      console.log('r ingedrukt');
       r = 0;
       g = (Math.floor(Math.random()* 255));
       b = (Math.floor(Math.random()* 255));
     

    } 
    else if (keyCode === 71){
      console.log('g ingedrukt');
      r = (Math.floor(Math.random()* 255));
      g = 0;
      b = (Math.floor(Math.random()* 255));
    
    }
    else if (keyCode === 66){
      console.log('b ingedrukt');
      r = (Math.floor(Math.random()* 255));
      g = (Math.floor(Math.random()* 255));
      b = 0;
      
  

    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
