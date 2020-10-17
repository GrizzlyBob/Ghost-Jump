var Tower,TowerImage,Door,DoorImage,DoorGroup,climber,climberImage,climberGroup
var Ghost,GhostImage,InvisibleBlock,InvisibleBlockGroup
    var gameState="play"
function preload(){
  TowerImage=loadImage("tower.png")
  DoorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  GhostImage=loadImage("ghost-standing.png")
}
function setup(){
  createCanvas(600,600)
  Tower=createSprite(300,300)
  Tower.addImage(TowerImage)
  Tower.velocityY=1
  DoorGroup=createGroup()
  climberGroup=createGroup()
  InvisibleBlockGroup=createGroup()
  Ghost=createSprite(200,200,50,50)
  Ghost.scale=0.3
  Ghost.addImage(GhostImage)
}
function draw(){
  background("white")
  if(gameState=="play"){
    
  
    
  if(Tower.y>400){
    Tower.y=300
  }
  if(keyDown("right")){
    Ghost.x=Ghost.x+3
  }
  if(keyDown("left")){
    Ghost.x=Ghost.x-3
  }
  if(keyDown("space")){
    Ghost.velocityY=-5
  }
  Ghost.velocityY=Ghost.velocityY+0.8
  if(climberGroup.isTouching(Ghost)){
    Ghost.velocityY=0
  }
  if(InvisibleBlockGroup.isTouching(Ghost)||Ghost.y>600){
    Ghost.destroy()
    gameState="end"
  }
  doors()
  drawSprites()
  }
  if(gameState=="end"){
    stroke("yellow")
    fill("yellow")
    textSize(30)
    text("gameOver",230,250)
  }
}
function doors(){
  if(frameCount%240===0){
    Door=createSprite(200,50)
    climber=createSprite(200,10)
    InvisibleBlock=createSprite(200,15)
    InvisibleBlock.width=climber.width
    InvisibleBlock.height=2
    climber.addImage(climberImage)
    climber.velocityY=1
    climber.lifetime=800
    Door.addImage(DoorImage)
    Door.x=random(120,400)
    climber.x=Door.x
    InvisibleBlock.x=Door.x
    InvisibleBlock.velocityY=1
    InvisibleBlockGroup.add(InvisibleBlock)
    Ghost.depth=Door.depth
    Ghost.depth+=1
    climberGroup.add(climber)
    Door.velocityY=1
    Door.lifetime=800
    DoorGroup.add(Door)
  }
}