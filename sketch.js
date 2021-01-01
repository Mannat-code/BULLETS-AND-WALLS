
var wall, thickness;

var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);


  speed = random(223 , 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(45, 200, 100, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/4);
  wall.shapeColor = "grey";
}

function draw() {
  background(0);  

  
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;

    var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
    
    if(damage>20){
      wall.shapeColor=color(225, 0, 0);
    }
    if(damage<20){
      wall.shapeColor=color(0, 255, 0);
    }
  }

 
  fill ("lightblue");
  text ("Speed : " + speed , 100, 50);
  fill ("red");
  text ("Damage : " + damage , 400, 50);
  
  
  drawSprites();
}


function hasCollided(Bullet, Wall){

  bulletRightEdge=Bullet.x + Bullet.width;
  wallLeftEdge = Wall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }  
    return false;
  }