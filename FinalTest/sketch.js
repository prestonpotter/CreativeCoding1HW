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

let gameOver = false;
let bg;


let currentImageT;
let currentImageS;


function setup() {
  createCanvas(600, 600);
  currentImageT=T1;
  currentImageS=S1
  resetButtonWidth = 100;
  resetButtonHeight = 50;
  resetButtonX = (width - resetButtonWidth) / 2;
  resetButtonY = height - 70;
}

function draw() {

  if(gameOver) {
    background(bg);

    image(Reset, resetButtonX, resetButtonY, resetButtonWidth, resetButtonHeight);

    if (currentImageT === TH) {  
    image(SW, 150, 150, 300, 300);
  } else if(currentImageS === SH) {
    image(TW, 150, 150, 300, 300);
  }
    return;
  }


  background(bg);
  image(Left, 10, 10, 115, 115)
  image(Right, 490, 8, 115, 115)
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
      setTimeout(() => {
        gameOver = true;
      }, 1000);
  
  }
  }
                //collision with snowman
  if(snowball.owner !== "snowman") { //ignore
    let distanceToSnowman = dist(snowball.x, snowball.y, S1X + 45, S1Y + 45)
    if (distanceToSnowman < 45 + 10) {
      console.log("Hit Snowman")
      snowballs.splice(i, 1);
      currentImageS = SH;
      setTimeout(() => {
         gameOver = true;
        }, 1000);

  }
}
}
}

function mousePressed() {
  if (gameOver) {
    if (mouseX > resetButtonX && mouseX < resetButtonX + resetButtonWidth &&
        mouseY > resetButtonY && mouseY < resetButtonY + resetButtonHeight) {
      // Reset the game state
      gameOver = false;
      snowballs = [];
      currentImageT = T1;
      currentImageS = S1;
      T1X = 50;
      T1Y = 400;
      S1X = 450;
      S1Y = 400;
    }
  }
}

let resetButtonX, resetButtonY, resetButtonWidth, resetButtonHeight;


function preload()
{
  T1=loadImage('thrower1.png')
  T2=loadImage('thrower2.png')
  bg=loadImage('snowbackground.png')
  S1=loadImage('snowman1.png')
  S2=loadImage('snowman2.png')
  TH=loadImage('throwerhit.png')
  SH=loadImage('snowmanhit.png')
  TW=loadImage('ThrowerWIn.png')
  SW=loadImage('SnowmanWin.png')
  Reset=loadImage('resetbutton.png')
  Left=loadImage('TI.png')
  Right=loadImage('SM.png')
}




//throwmotion t
  function keyPressed()
  {
    if(gameOver) return;
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
    if (T1Y > 0) {
    T1Y -= 10;
  }
}
else if(keyIsDown(a))
  {
    if (T1X > 0) {
    T1X -= 10;
    }
    console.log("movement:" + T1X);
  }
else if(keyIsDown(s))
  {
    if (T1Y < height - 90) {
    T1Y += 10;
  }
}
else if(keyIsDown(d))
  {
    if (T1X < width / 2 - 90) {
    T1X += 10;
  }
  }
}
  

  //snowmanmovement
  function SMovement() {

//keys
  
    if(keyIsDown(73)){
    if (S1Y > 0) {
    S1Y -= 10;
  }
}
 if(keyIsDown(74)){
    if (S1X > width / 2) {
    S1X -= 10;
    }
    console.log("Snowman X Position:" + S1X);
  }
if(keyIsDown(75)){
    if (S1Y < height - 90) {
    S1Y += 10;
    }
  }
 if(keyIsDown(76)){
    if (S1X < width - 90) {
    S1X += 10;
  }
}
}