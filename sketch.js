var paddle;
var ball;
var bricks = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	paddle = new Paddle();
	ball = new Ball();

	for (var i = 0; i < 20; i++) {
	 bricks.push(new Brick());
 }
 createText();

}

function draw() {
	background(255);
	paddle.display();
	paddle.update();
	paddle.checkEdges();

	ball.display();
	ball.update();
	ball.checkEdges();
	if (ball.meets(paddle) && ball.direction.y > 0)
	ball.direction.y *= -1;

	for (var i = 0; i < bricks.length; i++) {
    bricks[i].display();
    if (ball.hits(bricks[i])) {
      if (bricks[i].r >= 40) {
        bricks[i].r = bricks[i].r / 2;
      } else {
        bricks.splice(i, 1);
      }
      ball.direction.y *= -1;
    }


}

function keyPressed() {
	if(key === 'a' || key === 'A') {
		paddle.isMovingLeft = true;
	}else if (key === 'd' || key === 'D') {
		paddle.isMovingRight = true;
	}
}

function keyReleased() {
	paddle.isMovingLeft = false
	paddle.isMovingRight = false
}
