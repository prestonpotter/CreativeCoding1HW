function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(220);
  
    //neck
  strokeWeight(1)
  stroke(0)
  fill(255, 211, 153);
  rect(220,155,60,65)
  
  //head
fill(255, 211, 153);
circle(250,125,125);
  
  //hair
  stroke(46, 32, 19)
  strokeWeight(5)
  fill(31, 26, 20)
  line(280, 70, 330, 130)
  
    fill(31, 26, 20)
  line(210,80,160, 130)
  
    
    fill(31, 26, 20)
  line(210,80,150, 130)
  
  
    fill(31, 26, 20)
  line(290,80, 340, 130)
  
    
    fill(31, 26, 20)
  strokeWeight(10)
  line(220, 68, 280, 68)
  
  //eyebrows
  
     fill(31, 26, 20)
  strokeWeight(5)
  line(215, 88, 235, 88)
  
   fill(31, 26, 20)
  strokeWeight(5)
  line(265, 88, 285, 88)
  
  
  //eyes
  stroke(255, 255, 255)
  strokeWeight(20)
  point ( 225,105)
  
     stroke(255, 255, 255)
  strokeWeight(20)
  point ( 275,105)
  
  //eyesinside
  stroke(0)
  strokeWeight(10)
  point ( 225,105)
  
   stroke(0)
  strokeWeight(10)
  point ( 275,105)
  
  //nose
  strokeWeight(10)
  stroke(219, 159, 99)
  fill(219, 159, 99)
  triangle(250,135,253,125,260,135)
  
  //mouth
  strokeWeight(10)
  stroke(232, 126, 90)
  line(240,160, 270, 160)
  
  strokeWeight(2)
  stroke(0)
  line(237,160, 273, 160)
  
  //body
  strokeWeight(5)
  stroke(0)
  fill(0, 52, 242)
  rect(200,210,100,200) 
  
  //arms
  strokeWeight(5)
  stroke(0)
  fill(0, 52, 242)
  rect(50,230,150,50) 
  
  strokeWeight(5)
  stroke(0)
  fill(0, 52, 242)
  rect(300,230,150,50) 
  
  //legs
  strokeWeight(5)
  stroke(0)
  fill(91, 91, 92)
  rect(200,410,40,165) 
  
    strokeWeight(5)
  stroke(0)
  fill(91, 91, 92)
  rect(260,410,40,165) 
  
  //shoes
  strokeWeight(5)
  stroke(0)
  fill(255,255,255)
  rect(170,535,70,40) 
  
  strokeWeight(5)
  stroke(0)
  fill(255,255,255)
  rect(260,535,70,40) 
  
  //title
  textSize(30)
  text("Self-Portrait",160,50)
  
  //sign
  textSize(20)
  text("Preston Potter",360,585)
       
}