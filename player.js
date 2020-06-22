class Player{
    constructor(){
        this.sprite = createSprite(width/2-100,80,100,50);
        this.playerImg = loadImage("images/player.png");
        this.sprite.addImage("character",this.playerImg);
        this.sprite.scale = 0.1;
    }
}