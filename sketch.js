const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon
var gameState = "onSling";
var backgroundImg


function preload(){
  getbg()
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(1200,400);

  ground = new Ground(400,370,800,20)
  

  polygon = new Polygon(200,100,30,30)
  platform = new Ground(500,200,250,5)
  
  block1 = new Block(400,190,40,40)
  block2 = new Block(440,190,40,40)
  block3 = new Block(480,190,40,40)
  block4 = new Block(520,190,40,40)
  block5 = new Block(560,190,40,40)
  block6 = new Block(600,190,40,40)

  block7 = new Block(420,140,40,40)
  block8 = new Block(460,140,40,40)
  block9 = new Block(500,140,40,40)
  block10 = new Block(550,140,40,40)

  block11 = new Block(455,90,40,40)
  block12 = new Block(520,90,40,40)

  block13 = new Block(490,50,40,40)
  sling = new SlingShot(polygon.body,{x:200 , y:100})
}

function draw() {
  if(backgroundImg)
    
    background(backgroundImg);
  

 // background(255,255,255);  
  Engine.update(engine)
  polygon.display()
  ground.display()
  platform.display()
  fill("pink")
  block1.display()
  block3.display()
  block5.display()
  block7.display()
  block9.display()
  block11.display()
  block13.display()
  fill("blue")
  block2.display()
  block4.display()
  block6.display()
  block8.display()
  block10.display()
  block12.display()
  sling.display()
  
  
}
function mouseDragged(){
  var gameState = "onSling";
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly()
  var gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32&&polygon.body.speed<1){
       sling.attach(polygon.body);
       
       var gameState = "onSling";
       Matter.Body.setPosition(polygon.body,{x:200, y:100})
    }
}

async function getbg(){

  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON=await response.json()
  console.log(responseJSON.datetime)
  var hour=responseJSON.datetime.slice(11,13)
  console.log(hour)
  if(hour>=06&&hour<=18){
      bg="bg.png"
  }
  else {
      bg="bg2.jpg"

  }
  backgroundImg=loadImage(bg)
  console.log(backgroundImg)
}