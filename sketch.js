var level = "first";
var score =50
var Myscore = 50
function preload() {
  bgImage1 = loadImage("assets/bg1.png");
  bgImage2 = loadImage("assets/bg2.png");


   //PLAYER BACK
   player_pause = loadImage("assets/bg2.png");
   //PLAYER BACK ANIMATION
   playerB = loadAnimation("assets/b1.png", "assets/b2.png", "assets/b3.png", "assets/b4.png");
   //PLAYER FRONT ANIMATION
   playerF = loadAnimation("assets/f1.png", "assets/f2.png", "assets/f3.png", "assets/f4.png");
   //PLAYER RIGHT ANIMATION 
   playerR = loadAnimation("assets/r1.png", "assets/r2.png", "assets/r3.png", "assets/r4.png");
   //PLAYER LEFT ANIMATION
   playerL = loadAnimation("assets/l1.png", "assets/l2.png", "assets/l3.png", "assets/l4.png");
   
    //PIKACHU
  pika = loadImage("assets/Pikachu-running back.png");
  pikaF = loadImage("assets/Pikachu-running front.png");

  //BALL
  pokeball = loadImage("assets/pokeball.png");
  pokeballm = loadImage("assets/pokeballm.png");

    //OPPONENTS
  o1BackImage = loadImage("assets/opponent 1 back.png");
  o2I = loadImage("assets/o2.png");
  o3I = loadImage("assets/o3.png");
  o4I = loadImage("assets/o4.png");
  o5I = loadImage("assets/o5.png");
}
function setup() {
  createCanvas(1200,800);
  player = createSprite(50,620, 0, 0);
  player.scale = 0.85
  player.addAnimation("front", playerF);
  player.addAnimation("left", playerL);
  player.addAnimation("right", playerR);
  player.addAnimation("back", playerB);
  player.addImage("pause", player_pause);
  player.frameDelay = 7;
 //Create egdes
 edges = createEdgeSprites();

  o1 = createSprite(213,680, 20, 20);
  o1.addImage("backO1", o1BackImage);
  o1.setCollider("rectangle", 0, 0, 100, 100);
  01.scale=0.6

  o2 = createSprite(790,650, 20, 20);
  o2.addImage(o2I);
  o2.scale=1.2
 //create stone
 stone1 = createSprite(180, 580, 330, 30)
 stone1.visible = false
 stone2 = createSprite(1059, 652, 800, 30)
 stone2.visible = false
  pikachu = createSprite(1100, 750, 50, 40);
  pikachu.addImage("back",pika);
  pikachu.scale=2


  pikachu01 = createSprite(300, 600);
  pikachu01.addImage("front",pikaF);
  pikachu01.scale=1.5
  pikachu01.velocityX=3;
  pikachu01.visible= false;

  fireGroup = new Group()
  obstaclesGroup=new Group()
  
}
function draw() {
background(0)
text(mouseX + ","+ mouseY,10,10)

if (level === "first") {
    
    
  pikachu.visible= false;
  image(bgImage1, -320, 0, 2000, 800)
  textSize(25)
  fill("red")
  text("Press Right Arrow To Move Right, Press Left Arrow To Move Left , Press Up Arrow To Jump",93,73)
  text("x:" + mouseX + ", y:" + mouseY, 10, 20)

  playerControl();

 
  if (player.isTouching(o1)) {
    level = "second"
  }
} else if (level === "second") {
  image(bgImage2, -140, 0, 1480, 800)
  player.visible=false
  stone1.destroy();
  stone2.destroy();
  o1.visible=false
  pikachu01.visible= true;
  pikachu.visible= true;
  pikachu01.setCollider("rectangle",0,0,30,30);
  pikachu.setCollider("rectangle",0,0,30,30);
  pikachu.x = mouseX
  text("x:" + mouseX + ", y:" + mouseY, 10, 20)
  spawnObstacles();
  text("SCORE:"+score,500,500);
  wall1=createSprite(400,600,20,100);
  wall2=createSprite(830,600,20,100);
  wall1.visible=false;
  wall2.visible=false;
  pikachu01.bounceOff(wall1);
  pikachu01.bounceOff(wall2);
  if (keyWentDown("space")) {
    createFire()
  }
  console.log("score"+score)
  if(obstaclesGroup.isTouching(pikachu)){
    obstaclesGroup.destroyEach()
    Myscore = Myscore -5 ;
  }

  if(fireGroup.isTouching(pikachu01)){
     fireGroup.destroyEach()
    score = score -5 ;
  }
  if(score<=0){
    level="third";
  }
  if(Myscore<=0){
    level="third";
  }

}

if (level === "third") {
    
    
  pikachu.destroy();
  pikachu01.destroy();
  image(bgImage1, -320, 0, 2000, 800)
  textSize(25)
  fill("red")
  text("Press Right Arrow To Move Right, Press Left Arrow To Move Left , Press Up Arrow To Jump",93,73)
  text("x:" + mouseX + ", y:" + mouseY, 10, 20)
  player.visible=true;
  playerControl();

 
  if (player.isTouching(o2)) {
    level = "fifth"
  }
} else if (level === "fifth") {
  
  image(bgImage2, -140, 0, 1480, 800)
  player.visible=false
  o1.visible=false
  pikachu01.visible= true;
  pikachu.visible= true;
  pikachu01.setCollider("rectangle",0,0,30,30);
  pikachu.setCollider("rectangle",0,0,30,30);
  pikachu.x = mouseX
  text("x:" + mouseX + ", y:" + mouseY, 10, 20)
  spawnObstacles();
  text("SCORE:"+score,500,500);
  wall1=createSprite(400,600,20,100);
  wall2=createSprite(830,600,20,100);
  wall1.visible=false;
  wall2.visible=false;
  pikachu01.bounceOff(wall1);
  pikachu01.bounceOff(wall2);
  if (keyWentDown("space")) {
    createFire()
  }
  console.log("score"+score)
  if(obstaclesGroup.isTouching(pikachu)){
    obstaclesGroup.destroyEach()
    Myscore = Myscore -5 ;
  }

  if(fireGroup.isTouching(pikachu01)){
     fireGroup.destroyEach()
    score = score -5 ;
  }
  if(score<=0){
    level="third";
  }
  if(Myscore<=0){
    level="third";
  }

}
drawSprites();
}

function playerControl() {

  if (keyDown(LEFT_ARROW)) {
    player.changeAnimation("left", playerL)
    player.x -= 3;
  }

  if (keyDown(RIGHT_ARROW)) {
    player.changeAnimation("right", playerR)
    player.x += 3;
  }

  if (keyDown(UP_ARROW)) {
    player.changeAnimation("back", playerB)
    player.y -= 3;
  }

  if (keyDown(DOWN_ARROW)) {
    player.changeAnimation("front", playerF)
    player.y += 3;
  }

}

function spawnObstacles() {
  var randomFrame=Math.round(random(40,100));
  if (frameCount % randomFrame === 0) {
    var obstacle = createSprite(pikachu01.x, pikachu01.y, 10, 40);
    obstacle.addImage(pokeball);
    //obstacle.debug = true;
    obstacle.velocityY = 6

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.02;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
    obstaclesGroup.lifetime=200;

}


function createFire() {
  fire = createSprite(pikachu.x, pikachu.y, 5, 10)
  fire.addImage(pokeballm);
  fire.velocityY = -6;
  fire.scale=0.2;
  fire.x = pikachu.x;
  fire.lifetime = 100;
  fire.shapeColor = "red"
  fireGroup.add(fire);
  fireGroup.lifetime=200;
}