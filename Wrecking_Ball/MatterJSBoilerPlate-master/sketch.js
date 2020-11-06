const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var crane,craneIMG;
var ground;
var ball;
var sling;
var b1,b2,b3;
var gameState = "OnSling";

function preload(){

  craneIMG = loadImage("unnamed.png")

}
function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  crane = createSprite(900,390,550,550);
  crane.addImage(craneIMG);
  crane.scale = 1.1;
  ground = new Ground(600,680,1220,20);
  b1 = new Building(200,570,200,200);
  b2 = new Building(200,370,200,200);
  b3 = new Building(200,170,200,200);
  ball = new Ball(630,550,55);
  sling = new Sling(ball.body,{x:650,y:210});

}


function draw() {
  Engine.update(engine);	

  rectMode(CENTER);
  background(255);
  
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  sling.display();
  ball.display();
  
  drawSprites();

}

function mouseDragged(){
  if(gameState = "OnSling"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}




