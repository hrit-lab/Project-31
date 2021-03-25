const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drops = [];
 var maxDrops = 100;
 var man;
 var rand;
 var night;
 var thunder,thunder1,thunder2;
 var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("thunder1.png");
    thunder2 = loadImage("thunder2.png");
}

function setup(){   
    var canvas = createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;

    man = new Man(200,500);

    for(var i = 0; i < maxDrops; i++ ){
        drops.push(new Drops(random(0,500), random(0,500)));
    }
}

function draw(){
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1 : thunder.addImage(thunder1);
            break;
            case 2 : thunder.addImage(thunder2);
            break;
            default : break;
        }
        thunder.scale = random(0.3,0.6);
    }
    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }

    man.display();

    for(var i = 0; i<maxDrops; i++){
        drops[1].display();
        drops[2].display();
        }

        drawSprites();
}   

