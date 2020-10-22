const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create()
  world = engine.world
  var options = {
    isStatic:true
  }
  var balloptions = {
    restitution:2.0
  }
  ground = Bodies.rectangle(400,390,800,10,options)
  ball = Bodies.circle(300,200,50,balloptions);
  World.add(world,ground)
  World.add(world,ball)

}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,50,50)
}