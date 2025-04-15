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
  
    //obsticle
fill(143, 52, 235);
circle(shapeX,shapeY,90);
  
   //randomspeed
  shapeXSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 15)) 
  shapeYSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 15)) 

  
    //obsticlemove
  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;
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