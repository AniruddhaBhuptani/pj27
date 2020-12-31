const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  ground

var ball,ball1,ball2,ball3;

var rope,rope1,rop2,rope3;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);

	ball=new Ball(200,200,80,80);
	ball1=new Ball(300,200,80,80);
	ball2=new Ball(400,200,80,80);
	ball3=new Ball(500,200,80,80);

	rope=new Rope(ball.body,{x:500,y:50});
	rope1=new Rope(ball1.body,{x:600,y:50});
	rope2=new Rope(ball2.body,{x:700,y:50});
	rope3=new Rope(ball3.body,{x:800,y:50});
	
   
}
function draw(){
    
    background(180)
    Engine.update(engine);


    ground.display();

	ball.display();
	ball1.display();
	ball2.display();
	ball3.display();

	rope.display();
	rope1.display();
	rope2.display();
	rope3.display();

   
 
}
function mouseDragged(){
   
         Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
     
 }