class Drop{
    constructor(x,y,width){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0,
            density:5
        }

        this.body=Bodies.circle(x,y,width,options);
        World.add(world,this.body);
        this.w = width;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        if(pos.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,width),y:0});
        }
        
        push();
            rectMode(CENTER);
            translate(pos.x,pos.y);
            fill("blue");
            strokeWeight(5);
            ellipse(0,0,this.w*2,this.w*2);
        pop();
    }
}