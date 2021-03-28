const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Matter,engine, world,division,ground,particle;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  for(var j=40; j<=width; j=j+30){
    plinkos.push(new Plinko(j,75));
  }
  
  for(var j=40; j<=width; j=j+30){
    plinkos.push(new Plinko(j,100));
  }
  for(var j=40; j<=width; j=j+30){
    plinkos.push(new Plinko(j,125));
  }

  for(var j=40; j<=width; j=j+30){
    plinkos.push(new Plinko(j,150));
  }

  
  division1=new Division(50,300,10,200);
  division2=new Division(200,300,10,200);
  division3=new Division(350,300,10,200);
  division4=new Division(500,300,10,200);
  division5=new Division(650,300,10,200);
  division6=new Division(780,300,10,200);
  
  
  particle=new Particle(400,100,10,10);
  ground=new Ground(500,395,1000,10);
  Engine.run(engine);

}
var particles=[];
var plinkos=[];
var divisions=[];


function draw() {
  background("black");
  Engine.update(engine);
  if(frameCount%60===0){
  particles.push(new Particle(random(width/5-10,width/5+10),4,4));
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),4,4));
    }
    if(frameCount%60===0){
      particles.push(new Particle(random(width/4-10,width/4+10),4,4));
      }
      if(frameCount%60===0){
        particles.push(new Particle(random(width/1.5-10,width/1.5+10),4,4));
        }
  for(var k=0;k<plinkos.length; k++){
    plinkos[k].display();
  }
  for(var k=0;k<plinkos.length; k++){
    plinkos[k].display();
  }
  for(var k=0;k<plinkos.length; k++){
    plinkos[k].display();
  }
  for(var k=0;k<plinkos.length; k++){
    plinkos[k].display();
  }
  for(var j=0;j<particles.length; j++){
    particles[j].display();
  }

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  ground.display();
  drawSprites();
}