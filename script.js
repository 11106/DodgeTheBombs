var gameState = 0;

function setup() { 
  createCanvas(1280,720);
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
	rect(320, 450, 200, 100);
	fill(0)
	text("Start", 410, 500)
	//text("MENU", 620, 330);
	//text("1. Menu", 620, 350);
	//text("2. gameStart", 620, 370);
	//text("3. gameOver", 620, 390);
}

function game(){
	background(0);
	text("Game has started!", 620, 360);
}

function gameOver(){
	background(0);
	text("Game Over!", 620, 360); 
}

function keyPressed() {

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