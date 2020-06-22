class Maze{
    constructor(){

     //this.tileImg = loadImage("images/tiles.jpg");
     this.topBorder = createSprite(windowWidth/2,15,windowWidth,50);
     this.topBorder.shapeColor = "#607D3B";
     
     //this.topBorder.addImage(this.tileImg);
     this.leftBorder = createSprite(10,windowHeight/2,20,windowHeight);
     this.leftBorder.shapeColor = "#607D3B";
     this.bottomBorder = createSprite(windowWidth/2,windowHeight-10,windowWidth,20);
     this.bottomBorder.shapeColor = "#607D3B";
     this.rightBorder = createSprite(windowWidth-10,windowHeight/2,20,windowHeight);
     this.rightBorder.shapeColor = "#607D3B";
     this.m1 = createSprite(145,140,20,200);
     this.m1.shapeColor = "#03C04A";
     this.m2 = createSprite(240,105,20,105);
     this.m2.shapeColor = "#03C04A";
     this.m3 = createSprite(235,225,170,20);
     this.m3.shapeColor = "#03C04A";
     this.m4 = createSprite(655,135,20,200);
     this.m4.shapeColor = "#03C04A";
     this.m5 = createSprite(605,240,120,20);
     this.m5.shapeColor = "#03C04A";
     this.m6 = createSprite(95,325,150,20);
     this.m6 .shapeColor = "#03C04A";
     this.m7 = createSprite(165,355,20,80);
     this.m7.shapeColor = "#03C04A";
     this.m8 = createSprite(1110,195,20,200);
     this.m8.shapeColor = "#03C04A";
     this.m9 = createSprite(1190,255,200,20);
     this.m9.shapeColor = "#03C04A";
     this.m10 = createSprite(1210,470,270,20);
     this.m10.shapeColor = "#03C04A";
     this.m11 = createSprite(260,415,20,200);
     this.m11.shapeColor = "#03C04A";
     this.m12 = createSprite(345,420,200,20);
     this.m12.shapeColor = "#03C04A";
     this.m13 = createSprite(435,485,20,170);
     this.m13.shapeColor = "#03C04A";
     this.m14 = createSprite(550,303,20,140);
     this.m14.shapeColor = "#03C04A";
     this.m15 = createSprite(660,360,260,20);
     this.m15.shapeColor = "#03C04A";
     this.m16 = createSprite(780,300,20,170);
     this.m16.shapeColor = "#03C04A";
     this.m17 = createSprite(890,225,300,20);
     this.m17.shapeColor = "#03C04A";
     this.m18 = createSprite(700,445,20,200);
     this.m18.shapeColor = "#03C04A";
     this.m19 = createSprite(530,160,260,20);
     this.m19.shapeColor = "#03C04A";
     this.m20 = createSprite(955,400,20,280);
     this.m20.shapeColor = "#03C04A";
     this.m21 = createSprite(410,225,20,200);
     this.m21.shapeColor = "#03C04A";


    }   

  display(){
   
  }

  collision(){
    player.sprite.collide(this.m1);
    player.sprite.collide(this.m2);
    player.sprite.collide(this.m3);
    player.sprite.collide(this.m4);
    player.sprite.collide(this.m5);
    player.sprite.collide(this.m6);
    player.sprite.collide(this.m7);
    player.sprite.collide(this.m8);
    player.sprite.collide(this.m9);
    player.sprite.collide(this.m10);
    player.sprite.collide(this.m11);
    player.sprite.collide(this.m12);
    player.sprite.collide(this.m13);
    player.sprite.collide(this.m14);
    player.sprite.collide(this.m15);
    player.sprite.collide(this.m16);
    player.sprite.collide(this.m17);
    player.sprite.collide(this.m18);
    player.sprite.collide(this.m19);
    player.sprite.collide(this.m20);
    player.sprite.collide(this.m21);

    player.sprite.collide(this.topBorder);
    player.sprite.collide(this.bottomBorder);
    player.sprite.collide(this.leftBorder);
    player.sprite.collide(this.rightBorder);
    
  }
  
  hide(){
    this.m1.visible = false;
    this.m2.visible = false;
    this.m3.visible = false;
    this.m4.visible = false;
    this.m5.visible = false;
    this.m6.visible = false;
    this.m7.visible = false;
    this.m8.visible = false;
    this.m9.visible = false;
    this.m10.visible = false;
    this.m11.visible = false;
    this.m12.visible = false;
    this.m13.visible = false;
    this.m14.visible = false;
    this.m15.visible = false;
    this.m16.visible = false;
    this.m17.visible = false;
    this.m18.visible = false;
    this.m19.visible = false;
    this.m20.visible = false;
    this.m21.visible = false;
    this.topBorder.visible = false;
    this.bottomBorder.visible = false;
    this.leftBorder.visible = false;
    this.rightBorder.visible = false;

    game.artifact1.visible = false;
    game.artifact2.visible = false;
    game.artifact3.visible = false;
    game.artifact4.visible = false;
    game.artifact5.visible = false;
    game.artifact6.visible = false;
    game.artifact7.visible = false;
    game.artifact8.visible = false;
    game.enemy1.visible = false;
    game.enemy2.visible = false;
    game.enemy3.visible = false;

    player.sprite.visible = false;




  }

  bounced(target){
  target.bounceOff(this.m1);
  target.bounceOff(this.m2);
  target.bounceOff(this.m3);
  target.bounceOff(this.m4);
  target.bounceOff(this.m5);
  target.bounceOff(this.m6);
  target.bounceOff(this.m7);
  target.bounceOff(this.m8);
  target.bounceOff(this.m9);
  target.bounceOff(this.m10);
  target.bounceOff(this.m11);
  target.bounceOff(this.m12);
  target.bounceOff(this.m13);
  target.bounceOff(this.m14);
  target.bounceOff(this.m15);
  target.bounceOff(this.m16);
  target.bounceOff(this.m17);
  target.bounceOff(this.m18);
  target.bounceOff(this.m19);
  target.bounceOff(this.m20);
  target.bounceOff(this.m21);
  target.bounceOff(this.topBorder);
  target.bounceOff(this.bottomBorder);
  target.bounceOff(this.leftBorder);
  target.bounceOff(this.rightBorder);




  }
}