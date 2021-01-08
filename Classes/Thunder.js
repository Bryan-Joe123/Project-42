class Thunder{
    constructor(){
        switch(Math.round(random(1,4))){
            case (1):{
                this.image=thunderImage1;
                break;
            }

            case (2):{
                this.image=thunderImage2;
                break;
            }

            case (3):{
                this.image=thunderImage3;
                break;
            }
            case (4):{
                this.image=thunderImage4;
                break;
            }
            default:{
                this.image=thunderImage4;
                break;
            }
        }
        this.sprite=createSprite(width/2,100);
        this.sprite.addImage(this.image);
        this.sprite.scale=0.5;

        this.end=frameCount+15;
    }
    display(){
        if(frameCount>this.end){
            this.sprite.lifetime=0;
        }
    }
}