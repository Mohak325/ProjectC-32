const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,img ;

function preload() {
    getBackgroundImg();
    img = loadImage("sunrise1.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }
    else{
        background(img);
    }


    Engine.update(engine);

   

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsetype = await response.json();
    var datetime = responsetype.datetime
    var time = datetime.slice(11,13);

    if(time>=4&&time<=6){
        bg ="sunrise1.png";
    }
    else if(time>=6&&time<=8){
        bg = ("sunrise2.png");
    }
   else if(time>=8&&time<=11){
        bg = ("sunrise3.png");
    }
   else if(time>=11&&time<=13){
        bg = ("sunrise4.png");
    }
   else if(time>=13&&time<=15){
        bg = ("sunrise5.png");
    }
   else if(time>=15&&time<=16){
        bg = ("sunrise6.png");
    }
   else if(time>=16&&time<=17){
        bg = ("sunset7.png");
    }
   else if(time>=17&&time<=18){
        bg = ("sunset8.png");
    }
   else if(time>=18&&time<=19){
        bg = ("sunset9.png");
    }
   else if(time>=19&&time<=20){
        bg = ("sunset10.png");
    }
   else if(time>=20&&time<=21){
        bg = ("sunset11.png");
    }
   else if(time>=21&&time<=22){
        bg = ("sunset12.png");
    }
   backgroundImg = loadImage(bg);
   
   
   
   
   

}
