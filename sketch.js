let mainspr; //Declaring sprite variables
let sprtw;
let sprtw1;
let sprtw2
let sprtl;
let sprtl1;
let collisions = 0 //Declaring score variable 
let wellness = 0

function setup() {

  createCanvas (500, 500);
  rectMode(CORNER);
  mainspr = createSprite(windowWidth-(windowWidth-50), windowHeight/3, 40, 40); //defining main sprite
    mainspr.shapeColor = color(255);

  sprtw = createSprite(random(100,475),random(100,450),30,30); //defining winning sprite1
    sprtw.shapeColor = color (random(255),random(255), random(255));
    sprtw.mouseActive = true;

  sprtw1 = createSprite(random(100,475),random(100,450),30,30); //defining winning sprite2
    sprtw1.shapeColor = color (random(255),random(255), random(255));
    sprtw1.mouseActive = true;

  sprtw2 = createSprite(random(100,475),random(100,450),30,30); //defining winning sprite3
    sprtw2.shapeColor = color (random(255),random(255), random(255));
    sprtw2.mouseActive = true;

  sprtl = createSprite (random(100,475),random(100,450),30,30); //defining loosing sprite
    sprtl.shapeColor = color (random(255),random(255), random(255));
    sprtl.mouseActive = true;

  sprtl1 = createSprite (random(100,475),random(100,450),30,30); //defining loosing sprite
    sprtl1.shapeColor = color (random(255),random(255), random(255));
    sprtl1.mouseActive = true;

}
function draw() {

  background(173, 216, 230);
  push()
  noStroke();
  fill(173, 216, 255);
  rect (0,0,500,100);
  rect (0,0,75,500);
  pop();
  textSize(15);
  fill (255,0,0);
  textAlign(LEFT, TOP);
  text (" Influencer Score: " + collisions, 25,25);
  text (" Wellness Score: "+ wellness, 25, 50);
  timer();

if(sprtw.mouseIsOver) { //Clue #1 
  textSize(20);
    fill(255);
    textAlign(CENTER, TOP);
    text("Obsessively Check Your Likes",300,50);
}
if(sprtw1.mouseIsOver) { //Clue #2
    textSize(20);
    fill(255);
    textAlign(CENTER, TOP);
    text('Post a photo of your meal',300,50);
}
if(sprtw2.mouseIsOver) { //Clue #3
   textSize(20);
    fill(255);
    textAlign(CENTER, TOP);
    text('Face tune that Photo!',275,50);
}
if(sprtl.mouseIsOver) { //Clue #4
    textSize(20);
    fill(255);
    textAlign(CENTER, TOP);
    text('“Delete Instagram”',250,50);
}
if(sprtl1.mouseIsOver) { //Clue #5
  textSize(20);
  fill(255);
  textAlign(CENTER, TOP);
  text('Do “Self Care”',250,50);
}
//----------------------------------------------//
if(mainspr.collide(sprtw)){ //what happens when you win, the background changes, and "Correct" appears)
   
  collisions = collisions+1; // DO CALCULATIONS FOR CORRECT MATH
   wellness = wellness -1; 
   
  textSize(15);
  fill (255,0,0);
  textAlign(LEFT, TOP);
  text ("Score: " + collisions, 25,25);
   
  mainspr.shapeColor = (sprtw.shapeColor);
  mainspr.setSpeed(0, 0); 
  // textSize(32);
  // fill(255);
  // textAlign(CENTER, TOP);
  // text('CORRECT',250,50);
  } else if (mainspr.collide(sprtw1)) {

    collisions = collisions+1; // DO CALCULATIONS FOR CORRECT MATH
    wellness = wellness -0; 
   
    textSize(15);
    fill (255,0,0);
    textAlign(LEFT, TOP);
    text ("Score: " + collisions, 25,25);
   
    mainspr.shapeColor = (sprtw1.shapeColor);
    mainspr.setSpeed(0, 0); 
    // textSize(32);
    // fill(255);
    // textAlign(CENTER, TOP);
    // text('CORRECT',250,50);
  } else if (mainspr.collide(sprtw2)) {

    collisions = collisions+3; // DO CALCULATIONS FOR CORRECT MATH
    wellness = wellness -2; 
   
    textSize(15);
    fill (255,0,0);
    textAlign(LEFT, TOP);
    text ("Score: " + collisions, 25,25);
   
    mainspr.shapeColor = (sprtw2.shapeColor);
    mainspr.setSpeed(0, 0); 
    // textSize(32);
    // fill(255);
    // textAlign(CENTER, TOP);
    // text('CORRECT',250,50);
  } else if (mainspr.collide(sprtl)) { //what happens when you lose, the sprite changes, and "Game Over" appears"\
    collisions = collisions-2;
    wellness = wellness+3;
    textSize(15);
    fill (255,0,0);
    textAlign(LEFT, TOP);
    text ("Score: " + collisions, 25,25);
    mainspr.setSpeed(0, 0);
    mainspr.shapeColor = (sprtl.shapeColor);
    // textSize(32);
    // fill(255);
    // textAlign(CENTER, TOP);
    // text('GAME OVER',250,50);
  } else if (mainspr.collide(sprtl1)) {
    collisions = collisions-0;
    wellness = wellness+1;
    textSize(15);
    fill (255,0,0);
    textAlign(LEFT, TOP);
    text ("Score: " + collisions, 25,25);
    mainspr.setSpeed(0, 0);
    mainspr.shapeColor = (sprtl1.shapeColor);
    // textSize(32);
    // fill(255);
    // textAlign(CENTER, TOP);
    // text('GAME OVER',250,50 
  }
 //----------------------------------------------//
if (collisions > 0 && collisions == wellness ) {
  background(173, 216, 230);
  mainspr.remove();
  textSize(32);
    fill(255);
    textAlign(CENTER, TOP);
    text('!WINNER!',250,50);
} else if (millis() >= 20000 && collisions < wellness ){
  background(173, 216, 230);
  mainspr.remove();
  textSize(32);
    fill(255);
    textAlign(CENTER, TOP);
    text('You Lived a Healthy Life',250,50);
} else if (millis() >= 20000 && collisions > wellness ){
  background(173, 216, 230);
  mainspr.remove();
  textSize(32);
  fill(255);
  textAlign(CENTER, TOP);
  text("You're Obsessed with Instagram",250,50);
}
  drawSprites();
}
function keyPressed() { //controls to move the main sprite
  if (keyCode == RIGHT_ARROW) {
    mainspr.setSpeed(1.5, 0);
  }
    else if (keyCode == LEFT_ARROW) {
    mainspr.setSpeed(1.5, 180);
  }
  else if (keyCode == DOWN_ARROW) {
     mainspr.setSpeed(1.5, 90);
  }
   else if (keyCode == UP_ARROW) {
    mainspr.setSpeed(1.5, 270);
  }
  else if (key == ' ') {
    mainspr.setSpeed(0, 0);
  }
  return false;
}
function timer (){ //creates the timer 

  push();
  textSize(15);
  fill (255,0,0);
  if (millis()<=1000){
  text('TIMER: 20',25,75);
  } else if ((millis()>=1000 && millis()<=2000)){
  text('TIMER: 19',25,75);
  } else if ((millis()>=2000 && millis()<=3000)){
  text('TIMER: 18',25,75);
  } else if ((millis()>=3000 && millis()<=4000)){
  text('TIMER: 17',25,75);
  } else if ((millis()>=4000 && millis()<=5000)){
  text('TIMER: 16',25,75);
  } else if ((millis()>=5000 && millis()<=6000)){
  text('TIMER: 15',25,75);
  } else if ((millis()>=6000 && millis()<=7000)){
  text('TIMER: 14',25,75);
  } else if ((millis()>=7000 && millis()<=8000)){
  text('TIMER: 13',25,75);
  } else if ((millis()>=8000 && millis()<=9000)){
  text('TIMER: 12',25,75);
  } else if ((millis()>=9000 && millis()<=10000)){
  text('TIMER: 11',25,75);
  } else if ((millis()>=10000 && millis()<=11000)){
  text('TIMER: 10',25,75);
  } else if ((millis()>=11000 && millis()<=12000)){
  text('TIMER: 9',25,75);
  } else if ((millis()>=12000 && millis()<=13000)){
  text('TIMER: 8',25,75);
  } else if ((millis()>=13000 && millis()<=14000)){
  text('TIMER: 7',25,75);
  } else if ((millis()>=14000 && millis()<=15000)){
  text('TIMER: 6',25,75);
  } else if ((millis()>=15000 && millis()<=16000)){
  text('TIMER: 5',25,75);
  } else if ((millis()>=16000 && millis()<=17000)){
  text('TIMER: 4',25,75);
  } else if ((millis()>=17000 && millis()<=18000)){
  text('TIMER: 3',25,75);
  } else if ((millis()>=18000 && millis()<=19000)){
  text('TIMER: 2',25,75);
  } else if ((millis()>=19000 && millis()<=20000)){
  text('TIMER: 1',25,75);
  }  else {

  text('TIMES UP',25,75);
  }
  pop();
}


