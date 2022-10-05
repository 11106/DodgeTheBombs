var gameState = 0;
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
		if (this.y > 635 && this.y < 695){
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
	text("gameState" + gameState, 25, 25);
  fill(255);

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
	fill (255)
	text("MENU", 600, 330);
	text("1. Menu", 600, 350);
	text("2. Start", 600, 370);
	text("3. Game Over", 600, 390);
  //keyPressed_0();
}

var lastSpawn = 0;

function game(){
	background(0);
	fill (255)
	rect(mouseX, 660, 30, 60);
	
	if(performance.now() - lastSpawn > 500 ){
		lastSpawn = performance.now()
		balls.push(new Ball(1,1))
		console.log("spawned")
	};

	balls.forEach((b) => {
		b.draw();
		b.checkCollision();
	})
}	

function gameOver(){
	background(0);
	text("Game Over!", 600, 360); 
  text("Do you want to play again?",560,375);
  text("Y/N:",623,390);
  keyPressed_1();
}

function keyPressed(){ //_0
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
if (keyCode == 89){
    game();
  }
  if (keyCode == 78){
    menu();
  }
}