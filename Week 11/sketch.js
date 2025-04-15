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
  
    //obsticle1
fill(143, 52, 235);
circle(shapeX,shapeY,90);
  
  //obsticle2
  fill(197, 92, 25);
circle(shapeX2,shapeY2,50);
  
   //randomspeed
  shapeXSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 15)) 
  shapeYSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 15)) 

  
    //obsticlemove1
  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;
  
  
    //obsticlemove2
  shapeX2 += shapeXSpeed;
  shapeY2 += shapeYSpeed;
  
  
  //outofbounds
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
  
    
  
  //drawborders
  drawborders(15);
  
  //exit
  if(characterX > width -75 && characterY > height)
    {
      fill(5)
      stroke(10)
      textSize(30)
      text("YOU WIN!,", 180, 300)
    }
  else 
    {
       fill(5)
      stroke(10)
      textSize(20)
      text("Find the Exit!", 200,50)
    }
  //mouseclickshape
fill(248, 3, 252)
circle(mouseshapeX, mouseshapeY, 25)
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
  
  //exit
  textSize(17)
  text("Exit", width-55, height-7)
  
  //character
drawCharacter();
characterMovement();
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