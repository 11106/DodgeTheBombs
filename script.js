var gameState = 0;
var ball = [];

class Ball{
	
	constructor(){
		this.x = random(width); 
		this.y = 0;	
	}	

	draw(){
		circle(this.x, this.y, 30);
		this.y += 5;
	}
}

function setup() { 
  createCanvas(1250,720);
	background(0);
	ball = new Ball();
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
  //keyPressed_0()
}

function game(){
	background(0);
	text("Game has started!", 600, 360);

	fill (255)
	rect(mouseX,690,15,30)
	
	//ball.draw()

	if (keyPressed == 80){
		ball.draw(new Ball()); 
	}
}	

function gameOver(){
	background(0);
	text("Game Over!", 600, 360); 
  text("Do you want to play again?",560,375);
  text("Y/N:",623,390);
  keyPressed_1()
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
    game()
  }
  if (keyCode == 78){
    menu()
  }
}
	// if(frameCount % 100 == 0){
	// 	ball.push(new Ball());
	// };

	// ball.forEach((b) => {
	// 	b.draw();			
	// });