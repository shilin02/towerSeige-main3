const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint





function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

ground1 = new Ground(400,200,100,20)

box1 = new Box(400,205,20,30)
box2 = new Box(400,225,20,30)
box3 = new Box(400,245,20,30)
box4 = new Box(400,265,20,30)
box5 = new Box(400,285,20,30)

box6 = new Box(440,205,20,30)
box7 = new Box(440,225,20,30)
box8 = new Box(440,245,20,30)
box9 = new Box(440,265,20,30)
box10 = new Box(440,285,20,30)

shooter = new Shooter(200,50,35)
sling = new Sling(shooter.body,{x:200, y:50});





}
function draw() {
  if(backgroundImg){
    background(225,225,225);
}
text("SCORE:" +score,750,40)
  
  Engine.update(engine);

  ground1.display();

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();

  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();

  shooter.display();
  sling.display();


  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.body)
  }
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  console.log(responseJSON);
  var dateTime = responseJSON.datetime
  var hour = dateTime.slice(11,13)
  if(hour >=06 && hour <=19){
      bg = ("bg.png")
  }
  else{
      bg = ("bg2.jpg");
  }
  backgroundImg = loadImage(bg)
}
