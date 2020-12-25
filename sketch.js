
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ball;
var ground,groundSprite;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();   // need clarification
	world = engine.world;		// need clarification

	//Create the Bodies Here.
	//box1 = new Dusbin(720,620,20,100);
	//box2 = new Paper(100,20,100)
	//box2 = new Dusbin(635,660,150,20);
	//box3 = new Dusbin(550,620,20,100);
	dustbin=new Dustbin(600,600,20,100)
	ball = new Paper(30,2,15);
	//groundSprite = new Ground(400,420,800,20)
	ground = new Ground(400,680,800,20);
	
	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);

  //groundSprite.x = ground.position.x
  //groundSprite.y = ground.position.y
 // box1.display();
  //box2.display();
  //box3.display();
  dustbin.display()
  ball.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});
	  //  Matter.Body.setStatic(ball,false);
	}
 }
