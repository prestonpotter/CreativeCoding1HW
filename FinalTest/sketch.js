var w = 87;
var a = 65;
var s = 83;
var d = 68;
var space = 32;

let snowballs = []
let T1, T2;
let T1X= 50;
let T1Y= 400;
let speed = 5;

let S1, S2;
let S1X= 450;
let S1Y= 400;


function setup() {
  createCanvas(600, 600);
  currentImageT=T1;
  currentImageS=S1
}

function draw() {

  background(bg);
  image(currentImageT, T1X, T1Y,90,90)
  image(currentImageS, S1X,S1Y,90,90)
  TMovement();
  SMovement();

  for (let i = snowballs.length - 1; i >= 0; i--) {
    let snowball = snowballs[i];
 circle(snowball.x, snowball.y, 10)
    snowball.x += snowball.speed * snowball.direction;
    
        //collision with thrower
        if(snowball.owner !== "thrower") { //ignore
    let distanceToThrower = dist(snowball.x, snowball.y, T1X + 45, T1Y + 45)
    if (distanceToThrower < 45 + 10) {
      console.log("Hit Thrower")
      snowballs.splice(i,1);
      currentImageT = TH;
  
  }
  }
                //collision with snowman
  if(snowball.owner !== "snowman") { //ignore
    let distanceToSnowman = dist(snowball.x, snowball.y, S1X + 45, S1Y + 45)
    if (distanceToSnowman < 45 + 10) {
      console.log("Hit Snowman")
      snowballs.splice(i, 1);
      currentImageS = SH;
        }

  }
}}


function preload()
{
  T1=loadImage('thrower1.png')
  T2=loadImage('thrower2.png')
  bg=loadImage('background.png')
  S1=loadImage('snowman1.png')
  S2=loadImage('snowman2.png')
  TH=loadImage('throwerhit.png')
  SH=loadImage('snowmanhit.png')
}


//throwmotion t
  function keyPressed()
  {
  if (keyCode === 32) {
    currentImageT = T2;
    throwSnowball(T1X + 70, T1Y+30, 1, "thrower");
    setTimeout ( () => {
      currentImageT = T1;
    }, 1000);
  }
  
  
  if (keyCode === 77) {
    currentImageS = S2;
    throwSnowball(S1X -20, S1Y+30, -1, "snowman");
    setTimeout ( () => {
      currentImageS = S1;
    }, 1000);
  }
  }

  function throwSnowball(x,y,direction, owner)
{   
     let snowball = {
      x:x,
      y:y,
    direction:direction,
    owner: owner,
    speed: 5,
  };
 snowballs.push(snowball);
  
}

//throwermovement
function TMovement() {

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
  //snowmanmovement
  function SMovement()

//keys
  {
    if(keyIsDown(73))
  {
    S1Y -= 10;
  }
else if(keyIsDown(74))
  {
    S1X -= 10;
    console.log("movement:" + T1X);
  }
else if(keyIsDown(75))
  {
    S1Y += 10;
  }
else if(keyIsDown(76))
  {
    S1X += 10;
  }
  
  }