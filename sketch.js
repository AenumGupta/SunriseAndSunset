const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backImg = loadImage("sunrise1.png");
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
        }
        else{
            background(backImg);
        }

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(15);
    text ("Time : "+hour,50,60);

}

async function getBackgroundImg(){

    // write code to fetch time from API

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   
   //change the data in JSON format
    var responseJSON= await response.json();
    
   // write code slice the datetime
    var dateTime=responseJSON.datetime;
    console.log(dateTime);

    var hour=dateTime.slice(11,13)
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
if(hour<=10 && hour>=12){
    bg="sunrise1.png";
}else if(hour<=06 && hour>=08){
    bg="sunrise2.png";
}else if(hour<=08 && hour>=10){
    bg="sunrise3.png"
}else if(hour<=10 && hour>=12){
    bg="sunrise4.png"
}else if(hour<=14 && hour>=16){
    bg="sunrise5.png"
}else if(hour<=16 && hour>=18){
    bg="sunrise6.png"
}else if(hour<=18 && hour>=20){
    bg="sunrise7.png"
}else if(hour<=20 && hour>=22){
    bg="sunrise8.png"
}else if(hour<=22 && hour>=0){
    bg="sunrise9.png"
}else if(hour<=0 && hour>=2){
    bg="sunrise10.png"
}else if(hour<=2 && hour>=4){
    bg="sunrise11.png"
}

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);

}
