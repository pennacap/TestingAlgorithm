function setup() {
  createCanvas(800,400);
  var ball = createSprite(400, 200, 50, 50);
  var c = createSprite(200, 100, 50, 50);
}


function draw() {
  background(255,255,255);
  var a = isMeeting(ball, c)  
  if (a) {
    ball.shapeColor = rgb(255, 0, 0);
    c.shapeColor = rgb(255, 0, 0);
  } else {
    ball.shapeColor = rgb(0, 0, 255);
    c.shapeColor = rgb(0, 0, 255);
  }
  drawSprites();
}

 function isMeeting(X, Y) {
   var e = X.x == Y.x || abs(X.x - Y.x) <= X.width/2;
   var d = X.y == Y.y || abs(X.y - Y.x) <= Y.height/2;
   if (e && d) return true;
   else return false;
 }