var movingRect , fixedRect
var ball1 , ball2, ball3

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(178, 200, 80, 30);
  movingRect.shapeColor=("red")
  fixedRect.shapeColor=("blue")

  ball1=createSprite(200,150,50,50)
  ball2=createSprite(300,150,50,50)
  ball3=createSprite(400,150,50,50)

  ball1.shapeColor=("cyan")
  ball2.shapeColor=("pink")
  ball3.shapeColor=("grey")  

  movingRect.velocityX=3
  movingRect.velocityY=6

  ball3.velocityX=2
  ball3.velocityY=4
}

function draw() {
  background(178); 
  movingRect.x= World.mouseX
  movingRect.y= World.mouseY
  drawSprites();

  

 if( isTouching (ball1 , movingRect)){
  movingRect.shapeColor=("green")
   ball1.shapeColor=("yellow")
 }
 else{
  movingRect.shapeColor=("red")
  ball1.shapeColor=("cyan")
}
 
BounceOff(movingRect,ball3)

}

