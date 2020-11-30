const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var mango1,
	mango2,
	mango3,
	mango4,
	mango5,
	mango6,
	mango7,
	mango8,
	mango9,
	mango10,
	mango11,
	mango12,
	mango13,
	mango14;
var boyObject;
var treeObject;
var stoneObject;
var groundObject;
var slingObject;

function preload() {
	boyImage = loadImage("PluckingMangoesImages/boy.png");
	treeImage = loadImage("PluckingMangoesImages/tree.png");
}

function setup() {
	createCanvas(1300, 650);

	engine = Engine.create();
	world = engine.world;

	groundObject = new Ground(width / 2, 645, width, 20);
	stoneObject = new Stone(140, 550, 20, 20);
	mango1 = new Mango(650, 200, 30);
	mango2 = new Mango(690, 230, 30);
	mango3 = new Mango(720, 210, 30);
	mango4 = new Mango(770, 430, 30);
	mango5 = new Mango(570, 195, 30);
	mango6 = new Mango(740, 355, 30);
	mango7 = new Mango(810, 420, 30);
	mango8 = new Mango(580, 400, 30);
	mango9 = new Mango(630, 450, 30);
	mango10 = new Mango(600, 490, 30);
	mango11 = new Mango(730, 350, 30);
	mango12 = new Mango(825, 320, 30);
	mango13 = new Mango(750, 200, 30);
	mango14 = new Mango(685, 325, 30);
	slingObject = new Sling(stoneObject.body, { x: 170, y: 470 });

	Engine.run(engine);
}

function draw() {
	background(0, 204, 255);
	Engine.update(engine);
	boyObject = createSprite(250, 540, 30, 100);
	boyObject.addImage(boyImage);
	boyObject.scale = 0.15;
	treeObject = createSprite(800, 390, 30, 100);
	treeObject.addImage(treeImage);
	treeObject.scale = 0.4;

	textSize(25);
	fill(49, 99, 0);
	text("Press 'space' for another chance to play!");

	groundObject.display();
	treeObject.display();
	boyObject.display();
	slingObject.display();
	stoneObject.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	detectCollision(stoneObject, mango1);
	detectCollision(stoneObject, mango2);
	detectCollision(stoneObject, mango3);
	detectCollision(stoneObject, mango4);
	detectCollision(stoneObject, mango5);
	detectCollision(stoneObject, mango6);
	detectCollision(stoneObject, mango7);
	detectCollision(stoneObject, mango8);
	detectCollision(stoneObject, mango9);
	detectCollision(stoneObject, mango10);
	detectCollision(stoneObject, mango11);
	detectCollision(stoneObject, mango12);
	detectCollision(stoneObject, mango13);
	detectCollision(stoneObject, mango14);

	keyPressed();
	drawSprites();
}
function mouseDragged() {
	Matter.Body.setPosition(stoneObject.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
	slingObject.fly();
}
function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(
		stoneBodyPosition.x,
		stoneBodyPosition.y,
		mangoBodyPosition.x,
		mangoBodyPosition.y
	);
	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}
function keyPressed() {
	if (keyCode === 32) {
		slingObject.attach(stoneObject.body);
	}
}
