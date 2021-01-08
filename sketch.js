const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const maxDrop = 100;
var thunder;
var drop=[];

function preload(){
    walkAnimation=loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png"
    ,"images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png",
    "images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");

    stopImage=loadImage("images/Walking Frame/walking_8.png");

    thunderImage1=loadImage("images/thunderbolt/1.png");
    thunderImage2=loadImage("images/thunderbolt/2.png");
    thunderImage3=loadImage("images/thunderbolt/3.png");
    thunderImage4=loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(250,625,100);


    for(var x=0;x<maxDrop;x++){
        drop.push(new Drop(random(0,width),random(0,height),7));
    }
}

function draw(){
    background(0);
    Engine.update(engine);

    if(frameCount%50==0){
        thunder = new Thunder();
    }
    
    umbrella.display();
    if(thunder){
        thunder.display();
    }
    for(var x=0;x<maxDrop;x++){
        drop[x].display();
    }    
    drawSprites();
}   