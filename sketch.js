var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database , position;
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(1300,550);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 

  var balloonPosition=database.ref('balloon/height');
  balloonPosition.on("value",readHeight,showError)
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.x=balloon.x-5;
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.x=balloon.x+5;

    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    update.height(0,-5)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y=balloon.y-5;
    balloon.scale=balloon.scale-0.004


    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,5)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y=balloon.y+5;
    balloon.scale=balloon.scale+0.004

    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
  database.ref('balloon/height').set({
      'x':position.x + x,
      'y':position.y + y
  })
 
}

function readHeight(data){
height = data.val()
balloon.x = balloon.x;
balloon.y = balloon.y;
}

function showError(){
console.log("error in database")
}