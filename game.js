class Game{
    constructor(){
    this.startButton = createSprite(windowWidth/2,windowHeight/2+190,60,20);
    this.startImg = loadImage("images/start.png");
    this.startButton.addImage("start",this.startImg);

   // this.box = createSprite(windowWidth/2,350,200,200);

   this.pickup = loadSound("images/pickup.mp3");
   this.lost = createAudio("images/lost.mp3");
   this.winning = createAudio("images/victory.mp3");

    this.enemy1 = createSprite(500,300,20,20);
    this.enemy1.visible = false;
    this.enemy1Img = loadImage("images/ghost1.png");
    this.enemy1.addImage(this.enemy1Img);
    this.enemy1.scale = 0.1;
    //this.enemy1.debug = true;
    this.enemy1.setCollider("circle",0,0,150);


    this.enemy2 = createSprite(865,530,20,20);
    this.enemy2Img = loadImage("images/ghost2.png");
    this.enemy2.addImage(this.enemy2Img);
    this.enemy2.visible = false;
    this.enemy2.scale = 0.2;

    
    this.enemy3 = createSprite(1000,100,20,20);
    this.enemy3.visible = false;
    this.enemy3Img = loadImage("images/ghost3.png");
    this.enemy3.addImage(this.enemy3Img);
    //this.enemy3.debug = true;
    this.enemy3.setCollider("circle",0,0,200);
    this.enemy3.scale = 0.2;




    this.endB = createSprite(displayWidth/2,300,20,20);
    this.endImg = loadImage("images/over.png");
    this.endB.addImage(this.endImg);
    this.endB.visible = false;
    this.endB.scale = 2;

    this.winB = createSprite(displayWidth/2,300,20,20);
    this.winImg = loadImage("images/win23.png");
    this.winB.addImage(this.winImg);
    this.winB.visible = false;
    this.winB.scale = 2;

    this.countDown = 75;

    this.artImg = loadImage("images/artifat.png");
    this.trophy = loadImage("images/trophy.png");
    this.coin = loadImage("images/coin.png");
    this.chest = loadImage("images/chest.png");
    this.door = loadImage("images/door.png");

    this.artifact1 = createSprite(1200,174,20,200);
    this.artifact1.addImage("artifact",this.trophy);
    this.artifact1.scale = 0.5;
    this.artifact1.visible = false;
    //this.artifact1.debug = true;
    this.artifact1.setCollider("circle",-20,50,80);

    this.artifact2 = createSprite(1250,540,20,200);
    this.artifact2.addImage("artifact",this.door);
    this.artifact2.scale = 0.3;
    this.artifact2.visible = false;
   // this.artifact2.debug = true;



    this.artifact3 = createSprite(320,145,20,200);
    this.artifact3.addImage("artifact",this.coin);
    this.artifact3.scale = 0.5;
    this.artifact3.visible = false;
    //this.artifact3.debug = true;
    this.artifact3.setCollider("circle",-250,-50,20);


    this.artifact4 = createSprite(700,300,20,200);
    this.artifact4.addImage("artifact",this.chest);
    this.artifact4.scale = 0.8;
    this.artifact4.visible = false;
   // this.artifact4.debug = true;
   this.artifact4.setCollider("circle",0,0,50);




    this.artifact5 = createSprite(420,85,20,200);
    this.artifact5.addImage("artifact",this.artImg);
    this.artifact5.scale = 0.5;
    this.artifact5.visible = false;

    this.artifact6 = createSprite(990,525,20,200);
    this.artifact6.addImage("artifact",this.artImg);
    this.artifact6.scale = 0.5;
    this.artifact6.visible = false;


    this.artifact7 = createSprite(45,95,20,200);
    this.artifact7.addImage("artifact",this.artImg);
    this.artifact7.scale = 0.5;
    this.artifact7.visible = false;

     this.artifact8 = createSprite(50,505,20,200);
    this.artifact8.addImage("artifact",this.artImg);
    this.artifact8.scale = 0.5;
    this.artifact8.visible = false;


    this.count = 0;

    }

    start(){
         
     noStroke();
     fill("red");
     textFont("Georgia");          
     textSize(50);
     text("ABHI'S ADVENTURE",windowWidth/2-220,windowHeight/2-200);
     textSize(25);
     fill("yellow");
     text("Abhi is set to explore an ancient temple in all its glory, but the temple has evil spirits",windowWidth/2-450,300);
     text("that have trapped him inside. Help Abhi escape by collecting all the artifacts in the ",windowWidth/2-450,350)
     text(" given time which will help him escape or else he will be stuck inside forever!",windowWidth/2-450,400)
     
     player.sprite.visible = false;
     if(mousePressedOver(this.startButton)){
         gameState = 1;
         maze = new Maze();
         this.enemy1.setVelocity(5,5);
         this.enemy2.setVelocity(5,5);
         this.enemy3.setVelocity(3,3);
         

     }
    }



    play(){

        maze.bounced(this.enemy1);
        maze.bounced(this.enemy2);
        maze.bounced(this.enemy3);
        
        player.sprite.visible = true;
        //this.box.visible = false;

        this.enemy1.visible = true;
        this.enemy2.visible = true;
        this.enemy3.visible = true;

        this.artifact1.visible = true;
        this.artifact2.visible = true;
        this.artifact3.visible = true;
        this.artifact4.visible = true;
        this.artifact5.visible = true;
        this.artifact6.visible = true;
        this.artifact7.visible = true;
        this.artifact8.visible = true;

        maze.collision();
        this.startButton.visible = false;
          if(keyIsDown(UP_ARROW)){
            player.sprite.y -= 5;
          }
          if(keyIsDown(DOWN_ARROW)){
            player.sprite.y += 5;
          }
          if(keyIsDown(RIGHT_ARROW)){
            player.sprite.x += 5;
          }
          if(keyIsDown(LEFT_ARROW)){
            player.sprite.x -= 5;
          }

          this.timer();
          
          if(this.countDown === 0){

           gameState = 2;
          }

          if(player.sprite.isTouching(this.artifact1)){
            this.count++;
            this.pickup.play();
            this.artifact1.destroy();
            
          }

          
          if(player.sprite.isTouching(this.artifact2) && this.count === 7 ){
           this.count++;
           this.pickup.play();
            this.artifact2.destroy();
           

          }


          if(player.sprite.isTouching(this.artifact3)){
           this.count++;
           this.pickup.play();
            this.artifact3.destroy();
          }


          if(player.sprite.isTouching(this.artifact4)){
            this.count++;
            this.pickup.play();
            this.artifact4.destroy();
          }


          if(player.sprite.isTouching(this.artifact5)){
            this.count++;
            this.pickup.play();
            this.artifact5.destroy();
          }

          
          if(player.sprite.isTouching(this.artifact6)){
            this.count++;
            this.pickup.play();
            this.artifact6.destroy();
          }


          if(player.sprite.isTouching(this.artifact7)){
            this.count++;
            this.pickup.play();
            this.artifact7.destroy();
          }


          if(player.sprite.isTouching(this.artifact8)){
            this.count++;
            this.pickup.play();
            this.artifact8.destroy();
          }

         if(this.count === 8){
           gameState = 3;
  
         }

         if(player.sprite.isTouching(this.enemy1)||player.sprite.isTouching(this.enemy2)||player.sprite.isTouching(this.enemy3)){  
           gameState = 2;
         }

        




    }
    timer(){
      if (frameCount % 30 === 0 && this.countDown >= 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        this.countDown --;
       
      }
        
      

    }

    end(){
      textSize(25);
      //text("GAME OVER",500,500);
      this.endB.visible = true;
      this.endB.x = width/2;
      this.endB.y = height/2;
      maze.hide();
      this.lost.play();
      noLoop();
      bgMusic.stop();

    }

    win(){
      textSize(25);
      this.winB.visible = true;
      this.winB.x = width/2;
      this.winB.y = height/2;
      maze.hide();
       this.winning.play();
      // noLoop();
       bgMusic.stop();
      
    }



}