var ship, ship_moving, edges;
var seaImage


function preload(){
ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
seaImage = loadAnimation("sea.png")

}

function setup(){
  createCanvas(600,200);

  //creating the ship
  ship = createSprite(50, 60, 200, 300)
  ship.addAnimation("moving", ship_moving);
  edges = createEdgeSprites();

  // scaling and position of the ship
  ship.scale = 2
  ship.x = 50

  // creating the ground
  sea = createSprite(50, 180, 400, 1);
  sea.addImage(seaImage);



}

function draw() {
  background("blue");

  sea.velocityX = -10

 
}












var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  //creating the ground
ground = createSprite(50, 180, 400, 1)
ground.addImage(groundImage)
}


function draw(){
  //set background color 
  background("white");
  ground.velocityX -10
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(edges[3])
  drawSprites();
}