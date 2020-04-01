var fixedRect,movingRect;


function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,50,100);
}

function draw() {
  background("black");  



  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (fixedRect.x-movingRect.x=== movingRect.width/2 + fixedRect.width/2
    ||movingRect.x-fixedRect.x=== movingRect.width/2 + fixedRect.width/2
    ||movingRect.y-fixedRect.y=== movingRect.height/2 + fixedRect.height/2
    ||fixedRect.y-movingRect.y=== movingRect.height/2 + fixedRect.height/2
     ){
movingRect.shapeColor= "yellow";
fixedRect.shapeColor= "yellow";
  }
  else{
movingRect.shapeColor = "pink";
fixedRect.shapeColor = "pink";

  }

  drawSprites();
}