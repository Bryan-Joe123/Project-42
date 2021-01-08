class Umbrella{
    constructor(x,y,width){
        var options={
            isStatic:true
        }

        this.sprite=createSprite(x,y);
        this.sprite.addAnimation("stop",stopImage);
        this.sprite.addAnimation("walk",walkAnimation);
        this.sprite.scale=0.5;

        this.speed=7;

        this.body=Bodies.circle(x+16,y-60,width,options);
        World.add(world,this.body);
        this.w = width;
    }

    display(){
        if(keyDown("m")){
            Matter.Body.setPosition(this.body,{x:this.body.position.x+this.speed,y:this.body.position.y})
            this.sprite.changeAnimation("walk"); 
        }else{
            this.sprite.changeAnimation("stop"); 
        }

        if(this.body.position.x>width+100){
            Matter.Body.setPosition(this.body,{x:0-100,y:this.body.position.y})
        }

        this.sprite.x=this.body.position.x
    }
}