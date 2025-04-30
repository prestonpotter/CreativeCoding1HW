//key codes
var w = 87;
var a = 65;
var s = 83;
var d = 68;
var space = 32


function setup() {
  createCanvas(600, 600);
  currentImage=T1
}

function draw() {
  background(bg);
  image(currentImage, T1X, T1Y,90,90)
  
  Movement();
  
throwimage();
}

function preload()
{
  T1=loadImage('thrower1.png')
  T2=loadImage('thrower2.png')
  bg=loadImage('background.png')
}

let T1, T2;
let T1X= 50;
let T1Y= 50;
let speed = 5;

//throwmotion
  function throwimage()
  {
  if (keyCode === 32) {
    currentImage = T2;
    setTimeout ( () => {
      currentImage = T1;
    }, 1000);
  }
  }

function Movement()
{
//keys
  if(keyIsDown(w))
  {
    T1Y -= 10;
  }
else if(keyIsDown(a))
  {
    T1X -= 10;
    console.log("movement:" + T1X);
  }
else if(keyIsDown(s))
  {
    T1Y += 10;
  }
else if(keyIsDown(d))
  {
    T1X += 10;
  }

}