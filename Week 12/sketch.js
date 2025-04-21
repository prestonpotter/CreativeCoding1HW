//character x y
var characterX = 100;
var characterY = 100;

//key codes
var w = 87;
var a = 65;
var s = 83;
var d = 68;

//obsticle
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//obsticle 2 
var shapeX2 = 300;
var shapeY2 = -10;
var shapeXSpeed2;
var shapeYSpeed2;

//createshapeonclick
var mouseshapeX
var mouseshapeY


function characterMovement()
{
//keys
  if(keyIsDown(w))
  {
    characterY -= 10;
  }
else if(keyIsDown(a))
  {
    characterX -= 10;
    console.log("movement:" + characterX);
  }
else if(keyIsDown(s))
  {
    characterY += 10;
  }
else if(keyIsDown(d))
  {
    characterX += 10;
  }

    
}
function setup() 
{
  createCanvas(500, 600);
  
}


function draw() 
{
  background(3, 223, 252);
  stroke(0)
  fill(0)

//createcharacter
drawCharacter();
  
//movecharacteer
characterMovement();
  
//Draw the first obsticle
drawObsticleOne();
  
//Draw the second obsticle
drawObsticleTwo();
  
//ExitPoint
exitPoint();
  
//drawborders
drawborders(15);
  
//displaywinmessage
WinMessage();
  
//Obsticle One movement
moveObsticleOne();
  
//Obsticle Two movement
moveObsticleTwo();
  
//Come back after going out of bounds
comeBack();
    
//mouseclickshape
mouseClick();

}

function WinMessage()

{
if(characterX > width -75 && characterY > height)
    {
      fill(5)
      stroke(10)
      textSize(30)
      text("YOU WIN!", 180, 300)
    }
  else 
    {
       fill(5)
      stroke(10)
      textSize(20)
      text("Find the Exit!", 200,50)
    }
}
function drawborders(thickness) {
  //left
  fill(252, 3, 3)
   rect(0,0,thickness,height);
//right 
   rect(width-thickness,0,thickness,height);
//top
   rect(0,0,width,thickness);
//botton
   rect(0,height-thickness,width -75,thickness);
  
}
  function createCharacter (x,y)
{characterX = x;
  characterY = y;
  console.log(characterX)
}

function drawCharacter()
{
  fill (111, 252, 3)
  circle (characterX, characterY, 25)
}



function mouseClicked()
{
mouseshapeX = mouseX
mouseshapeY = mouseY
}

function exitPoint()
 {
  textSize(17)
  text("Exit", width-55, height-7)
 }

function moveObsticleOne()
{    //obsticlemove1
  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;}

function moveObsticleTwo()
{   //obsticlemove2
  shapeX2 += shapeXSpeed;
  shapeY2 += shapeYSpeed;
  }

function comeBack()
{  //outofbounds
  if(shapeX > width)
    {
      shapeX = 0;
    }
  if(shapeX < 0)
    {
      shapeX = width;
    }
  if(shapeY > height)
    {
      shapeY = 0;
    }
  if(shapeY < 0)
    {
      shapeY = height;
    }
  
  //outofbounds
  if(shapeX2 > width)
    {
      shapeX2 = 0;
    }
  if(shapeX2 < 0)
    {
      shapeX2 = width;
    }
  if(shapeY2 > height)
    {
      shapeY2 = 0;
    }
  if(shapeY2 < 0)
    {
      shapeY2 = height;
    }
  }

function mouseClick()
{
fill(248, 3, 252)
circle(mouseshapeX, mouseshapeY, 25)
}

function drawObsticleOne()
{
fill(143, 52, 235);
circle(shapeX,shapeY,90);
   //randomspeed
  shapeXSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 15)) 
  shapeYSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 15)) 
}

function drawObsticleTwo()
{  //obsticle2
  fill(197, 92, 25);
square(shapeX2,shapeY2,50);
   //randomspeed
  shapeXSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 15)) 
  shapeYSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 15)) 
}
