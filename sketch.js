const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,boxx11,box12,box13,box14,box15,box16;
var slingshot;
var polygon,polygon_img;

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
   var canvas = createCanvas(1400,700);
   engine = Engine.create();
   world = engine.world;

   ground1 = new Ground(725,500,350,20);
   ground2 = new Ground(700,700,1400,50);

   box1 = new Box(575,460,50,50);
   box2 = new Box(625,460,50,50);
   box3 = new Box(675,460,50,50);
   box4 = new Box(725,460,50,50);
   box5 = new Box(775,460,50,50);
   box6 = new Box(825,460,50,50);
   box7 = new Box(875,460,50,50);
   box8 = new Box(625,410,50,50);
   box9 = new Box(675,410,50,50);
   box10 = new Box(725,410,50,50);
   box11 = new Box(775,410,50,50);
   box12 = new Box(825,410,50,50);
   box13 = new Box(675,360,50,50);
   box14 = new Box(725,360,50,50);
   box15 = new Box(775,360,50,50);
   box16 = new Box(725,310,50,50);

   polygon = Bodies.circle(50,200,20);
   fill("blue");
   World.add(world,polygon);

   slingshot = new SlingShot(this.polygon,{x:100,y:300});
}
function draw(){
    background(rgb(57, 43, 44));
    Engine.update(engine);
    
    fill("red");
    textSize(35);
    text("Drag the polygon to hit the box",100,50);
    
    ground1.display();
    ground2.display();
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

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    
    slingshot.display();
}
function mouseDragged(){
   Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   slingshot.fly();
}
function keyPressed(){
   if(keyCode === 32){
       slingshot.attach(polygon);
   }
}