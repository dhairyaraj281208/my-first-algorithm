var rectangle , movingRect ;
  

function setup() {
  createCanvas(1200,800);
rectangle =  createSprite(600,400,50,80);
rectangle.shapeColor = "green";
rectangle.debug = true;
 movingRect = createSprite(400,200,80,30);
 movingRect.debug = true;
 movingRect.shapeColor = "green";
}


function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;  
  if (movingRect.x - rectangle.x < rectangle.width/2 + movingRect.width/2 
    &&  rectangle.x - movingRect.x < rectangle.width/2 + movingRect.width/2
    &&  movingRect.y - rectangle.y < rectangle.width/2 + movingRect.width/2
    &&  rectangle.y - movingRect.y < rectangle.width/2 + movingRect.width/2   ) {
    movingRect.shapeColor = "red";
    rectangle.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    rectangle.shapeColor = "green";
  }
  drawSprites();
}