
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myworld, myuniverse, ground, wall1, wall2, wall3, paperBall, paperImage, bin, binImage;

function preload(){
	paperImage = loadImage("paper.png");
	binImage = loadImage("bin.png")
}

function setup() {
	createCanvas(1200, 700);

	bin = createSprite(875, 578, 150, 150);
	bin.addImage(binImage);
	bin.scale = 0.6;

	myuniverse = Engine.create();
	myworld = myuniverse.world;


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(600, 680, 1000, 20, {isStatic: true});
	World.add(myworld, ground);

	var wall1_properties = {
		isStatic:true
	}
	
	wall1 = Bodies.rectangle(800, 580, 15, 150, wall1_properties);
	World.add(myworld, wall1);


	var wall2_properties = {
		isStatic:true
	}
	
	wall2 = Bodies.rectangle(950, 580, 15, 150, wall2_properties);
	World.add(myworld, wall2);

	var wall3_properties = {
		isStatic:true
	}

	wall3 = Bodies.rectangle(875, 660, 150, 15, wall3_properties);
	World.add(myworld, wall3_properties);


	var paperBall_properties = {
		isStatic:false,
		restitution:0.3,
		density:1.2,
		friction:0.5	
	}
	
	paperBall = Bodies.circle(200, 560, 40, paperBall_properties);
	World.add(myworld, paperBall);

	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(myuniverse);

  rect(ground.position.x, ground.position.y, 1200, 20);
  rect(wall1.position.x, wall1.position.y, 15, 150);
  rect(wall2.position.x, wall2.position.y, 15, 150);
  rect(wall3.position.x, wall3.position.y, 150, 15);

  image(paperImage, paperBall.position.x, paperBall.position.y, 40, 40);
  

  //keyPressed();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode == UP_ARROW){
	   
		Matter.Body.applyForce(paperBall, paperBall.position, {x:240, y:-350});
	}
}





