var gameState = 0;
var score;
var highscore = 0;
var ball;
var balls = [];

class Ball{
	
	constructor(x, y){
		this.x = random(width); 
		this.y = 0;	
		this.vy = 5
	}	

	draw(){
		circle(this.x, this.y, 50);
		this.y = this.y + this.vy
	}

	checkCollision(){
		if (this.y > 635 && this.y < 720){
			if (this.x - 25 < mouseX + 30 && this.x + 25 > mouseX ) {
				gameState = 2;
				let idx = balls.indexOf(this);
				balls.splice(idx, 1);
			}
		}
	}
}

function setup() { 
  createCanvas(1250,720);
	background(0);
}

function draw() {
	if (gameState == 0) {
		menu();
	}

	if (gameState == 1) {
		game();
	}

	if (gameState == 2) {
		gameOver();
	}
}

function menu(){
	background(0);
	fill (255);
	text("MENU", 600, 330);
	text("1. Menu", 600, 350);
	text("2. Start", 600, 370);
	text("3. Game Over", 600, 390);
	score = 0
  keyPressed_0();
}

var lastSpawn = 0;

function game(){
	background(0);

	text (score, 200, 200);
	if(frameCount % 60 == 0){
		score = score + 1;
		console.log (score);
	}
	
	
	fill (255)
	rect(mouseX, 660, 30, 60);
	
	if(frameCount % 15 == 0){
		balls.push(new Ball(1,1))
	};

	balls.forEach((b) => {
		b.draw();
		b.checkCollision();
	})
}	

function gameOver(){
	background(0);
	text("Game Over!", 600, 360); 
  text("Press enter to",595,390);
  text("return to the menu",583,405);
	balls = [];
	if (score > highscore){
		highscore = score;
	}
	text ("Score: " + score, 615, 420);
	text ("Highscore: " + highscore, 600, 435);
  keyPressed_1();
}

function keyPressed_0(){ 
	if (keyCode == 49) {
    gameState = 0;
  }

  if (keyCode == 50) {
    gameState = 1;
  }

  if (keyCode == 51) {
    gameState = 2;
  }
}
function keyPressed_1(){
  if (keyCode == 13){
    gameState = 0;
  }
}
