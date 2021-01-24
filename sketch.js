const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world
var ground;



function setup() {
  createCanvas(400, 400);
  engine = Engine.create ();
  world = engine.world;

  var obj_options = {
    restitution : 1.5
  }
  obj = Bodies.circle (200, 100, 20, obj_options);
  World.add (world, obj);
  console.log (obj);

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle (200, 390, 400, 20, ground_options);
  World.add (world, ground);
}

function draw() {
  background(0);  
  
  Engine.update (engine);

  fill (0);
  stroke (255, 255, 255);

  ellipseMode (RADIUS);
  ellipse (obj.position.x, obj.position.y, 20, 20);

  rectMode (CENTER);
  rect (ground.position.x, ground.position.y, 400, 20);
}