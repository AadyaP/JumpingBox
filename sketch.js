var block1 , block2 , block3 , block4 ;
var ball;var edges;var music;

function preload(){
music=loadSound("music.mp3")
}
function setup() {
  createCanvas(1200,800);
  block1 = createSprite(600, 400, 50, 80);
  block2 = createSprite(200, 200, 50, 80);
  block3 = createSprite(600, 600, 50, 80);
  block4 = createSprite(300, 600, 50, 80);
  block1.shapeColor = "green";
  block2.shapeColor = "blue";
  block3.shapeColor = "red";
  block4.shapeColor = "yellow";
  block1.debug = true;
  block2.debug = true;
  block3.debug = true;
  block4.debug = true;
  ball = createSprite(400,200,80,30);
  ball.shapeColor = "pink";
  ball.debug = true;
  ball.velocityX=2;
  ball.velocityY=-4; 

}

function draw() {
  background(0,0,0);  
  
  edges=createEdgeSprites();
  ball.bounceOff(edges);

  if (ball.x - block1.x < block1.width/2 + ball.width/2
      && block1.x - ball.x < block1.width/2 + ball.width/2
      && ball.y - block1.y < block1.height/2 + ball.height/2
      && block1.y - ball.y < block1.height/2 + ball.height/2) {
        ball.shapeColor = "green";
        music.play();
      
  }
  
 
  else if (ball.x - block2.x < block2.width/2 + ball.width/2
    && block2.x - ball.x < block2.width/2 + ball.width/2
    && ball.y - block2.y < block2.height/2 + ball.height/2
    && block2.y - ball.y < block2.height/2 + ball.height/2) {
  ball.shapeColor = "blue";
  music.play();
}

else if (ball.x - block3.x < block3.width/2 + ball.width/2
  && block3.x - ball.x < block3.width/2 + ball.width/2
  && ball.y - block3.y < block3.height/2 + ball.height/2
  && block3.y - ball.y < block3.height/2 + ball.height/2) {
ball.shapeColor = "red";
music.play();
}

else if (ball.x - block4.x < block4.width/2 + ball.width/2
  && block4.x - ball.x < block4.width/2 + ball.width/2
  && ball.y - block4.y < block4.height/2 + ball.height/2
  && block4.y - ball.y < block4.height/2 + ball.height/2) {
ball.shapeColor = "yellow";
music.play();
}
else{music.stop()}

  drawSprites();
}