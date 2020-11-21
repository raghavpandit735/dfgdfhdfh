const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, lava, yellowLine, ground

function preload(){
  sprite_png = loadImage("animation/sprite.png");
}





function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
    world = engine.world;
 box  = new sprite(500,300, 20, 20);
 ground = new Ground(500, 350, 60, 20);
 lava =  createSprite(400, 570, 1600, 150);
 lava.shapeColor = "orange"
 yellowLine = createSprite(200, 550, 1700, 5);
yellowLine.shapeColor = "red"
 
}

function draw() {
  Engine.update(engine);
  background("black");  
  box.display();
  ground.display();
  drawSprites();
}