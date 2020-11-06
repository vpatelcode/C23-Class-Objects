const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

   ground = new Ground(400,790,800,20);
   box1 = new Box(230,400,50,50);
   box2 = new Box (200,600,50,50);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
   
}