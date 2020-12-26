const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,80,80);
    pig1= new Pig(810,320);
    box2 = new Box(920,320,80,80);
    log1 =new Log(810,260,350,PI/2);

    ground = new Ground(600,height,1200,20);

    box3 = new Box(700,240,80,80);
    pig2= new Pig(810,240);
    box4 = new Box(920,240,80,80);
    log2 =new Log(810,200,350,PI/2);

    box5= new Box(810,160,40,40);
    log3= new Log(760,120,150,PI/5);
    log4= new Log(870,120,150,-PI/5);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    
    box3.display();
    pig2.display();
    box4.display(); 
    log2.display();
  box5.display();
  log3.display();
  log4.display();
}