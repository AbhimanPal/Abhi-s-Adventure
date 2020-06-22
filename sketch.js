var maze;
var player;
var gameState = 0;
var game;
var startImg;
var bgImg;
var bgMusic

function preload(){
 bgImg = loadImage("images/bg6.jpg");
bgMusic = createAudio("images/Game Music.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  fill("black");
  player = new Player();
  game = new Game();
  
}


function draw() {
  background(bgImg); 
  bgMusic.play();
  bgMusic.volume(0.4);



  if(gameState === 0){
    game.start();
  }

   
  //text(mouseX + ":" + mouseY,mouseX,mouseY);
  if(gameState === 2){
    game.end();
  }
  
  drawSprites();                              
  if(gameState === 1){
    game.play();
    fill("yellow");
    textSize(30);              
    text("Time Left : "+game.countDown,displayWidth/2-400,30);
    text("Artifacts Collected : "+ game.count+ "/8",displayWidth/2,30)
  }

  if(gameState === 3){
    game.win();
  }
  
}



