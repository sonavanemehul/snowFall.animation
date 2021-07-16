const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world;
var snowfall=[];
var random;
var bg,sm,wg,hg;
var sm_obj,wg_obj;
//var maxSnowFall=100;




function setup() {
  createCanvas(800,400);

  bg = loadImage ("snow1.jpg");
  sm = loadImage("snowman.png.png");
  wg = loadImage("walking_girl.png.png");
  hg = loadImage("happy_girl.png.png");
  engine=Engine.create();
  world=engine.world;
 
  wg_obj=createSprite(10,310,10,10);
  wg_obj.addImage(wg);
  wg_obj.scale=0.6;
  }


function draw() {
  Engine.update(engine);
  background(bg);

  if (keyDown (RIGHT_ARROW)){
    wg_obj.velocityX=4;
    wg_obj.velocityY=0;
    wg_obj.mirrorX(-1);
    wg_obj.addImage(wg);
  }

  if (keyWentUp (RIGHT_ARROW)){
    wg_obj.velocityX=0;
    wg_obj.velocityY=0;
    wg_obj.addImage(wg);
  }

  if (keyDown (LEFT_ARROW)){
    wg_obj.velocityX=-4;
    wg_obj.velocityY=0;
    wg_obj.mirrorX(+1);
    wg_obj.addImage(wg);
  }

  if (keyWentUp (LEFT_ARROW)){
    wg_obj.velocityX=0;
    wg_obj.velocityY=0;
    wg_obj.addImage(wg);
  }

  if (keyDown (UP_ARROW)){
    sm_obj=createSprite(800,330,50,50);
    sm_obj.addImage(sm);
    wg_obj.addImage(hg);
  }

  if (frameCount% 10 === 0){
      
    snowfall.push(new SnowFall(random(0,800),10));
}

  for(var i=0; i<snowfall.length; i++){
    snowfall[i].display();
    
  }
  drawSprites();
}