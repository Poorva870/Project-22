var starImg,bgImg;
var star, starBody;
var star2, star2Img;
var fairyVoice;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starryNight.jpg");
	star2Img = loadImage("images/star.png");
	fairyVoice = loadSound("sound/joyMusic.mp3");
	//load animation for fairy here
	fairyImg = loadImage("images/fairy.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(100, 500);
	fairy.addImage("fairy", fairyImg);
	fairy.scale = 0.18;

	star = createSprite(650,40);
	star.addImage("star", starImg);
	star.scale = 0.05;

	star2 = createSprite(200,100);
	star2.addImage("star", star2Img);
	star2.scale = 0.15;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 450 && starBody.position.y > 450){
	  Matter.Body.setStatic(starBody, true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 20; 
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 20;  
	}

}
