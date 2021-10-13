const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player1;
var computerbase1;
var playerbase1;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerbase1 = new PlayerBase(width-300,height-200,170,160); 
  computerbase1 = new ComputerBase(width-1000,height-200,170,160);
   player1 = new Player(width-300,height-300,90,90); 
   compPlayer1= new ComputerPlayer(width-1000,height-300,90,90);
 }

function draw() {

  background("#82CAFF");

  Engine.update(engine);

  // Title
  fill("#FFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  fill("#FFF");
  textSize(25);
  text("Player ", width-300,height-100);

  fill("#FFF");
  textSize(25);
  text("Computer Player", width-1000,height-100);



   //Display Playerbase and computer base 
    playerbase1.display();
    computerbase1.display();

   //display Player and computerplayer
     player1.display();
     compPlayer1.display();
}
