var fixed,moving

function setup() {
  createCanvas(800,800);
  fixed= createSprite(600,400,50,80)
  moving = createSprite(400,200,80,30)

  fixed.shapeColor = "green"
  moving.shapeColor = "green"
}

function draw() {
  background(0);  
moving.x= World.mouseX;
moving.y= World.mouseY;

if(moving.x -fixed.x < moving.width/2+fixed.width/2){
  fixed.shapeColor = "red"
  moving.shapeColor = "red"

}
else{
  fixed.shapeColor = "green"
  moving.shapeColor = "green"
}

  drawSprites();
}