var volcanoImg, volcano;

function preload(){
  volcanoImg = loadImage("download1.png");
}
function setup(){
  createCanvas(800,600);
  volcano = createSprite(350,200,20,20);
  volcano.addImage(volcanoImg);

  
}
function draw(){
  background("black");
  drawSprites();

}