
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,780,30);
	rope = new Rope(Roof.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  
  drawSprites();
 
}



