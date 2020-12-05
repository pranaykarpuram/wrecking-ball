const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function preload(){
  bobImg = loadImage("bob.png");
}
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;  
  
  var options={
    'density': 10
  }
  bob = Bodies.circle(200,100,50,options); 

  World.add(world,bob);

  ground = new Ground(400,500,1600,50);
  box1 = new Box(600,400,60,60);
  box2 = new Box(600,340,60,60);
  box3 = new Box(600,280,60,60);
  box4 = new Box(600,220,60,60);
  box5 = new Box(600,160,60,60);
  box6 = new Box(600,100,60,60);
  box7 = new Box(660,400,60,60);
  box8 = new Box(660,340,60,60);
  box9 = new Box(660,280,60,60);
  box10 = new Box(660,220,60,60);
  box11 = new Box(660,160,60,60);
  box12 = new Box(660,100,60,60);
  box13 = new Box(720,400,60,60);
  box14 = new Box(720,340,60,60);
  box15= new Box(720,280,60,60);
  box16= new Box(720,220,60,60);
  box17 = new Box(720,160,60,60);
  box18 = new Box(720,100,60,60);

  sling = new Chain(bob,{x:550,y:160});
}

function draw() {
  background("grey");  
  Engine.update(engine);
  sling.display();
  imageMode(CENTER);
  image(bobImg,bob.position.x,bob.position.y);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();


  text("x: "+ mouseX,mouseX,mouseY);
  text("y: "+mouseY,mouseX+30,mouseY);
  drawSprites();
}