var gameState = 0;
//var balls =[];
var [xpos, xspeed,] = [640, 0,];
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
	text("MENU", 620, 330);
	text("1. Menu", 620, 350);
	text("2. Start", 620, 370);
	text("3. Game Over", 620, 390);
}

function game(){
	background(0);
	text("Game has started!", 620, 360);
  fill (255)
	rect(xpos,690,15,30)
  if (xpos >= 0 && xpos + 15 <= 1280) {
		 xpos += xspeed;
	}
	if (xpos == 0){
        xpos = 1
  }
}



function gameOver(){
	background(0);
	text("Game Over!", 620, 360); 
}

function keyPressed() {
  switch (keyCode) {
    case 37:
      xspeed = -8;
      break;
    case 65:
      xspeed = -4;
      break;
      
    case 39:
      xspeed = 8;
      break;
    case 68:
      xspeed = 4;
	}
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

function keyReleased() {
  switch (keyCode) {
    case 37:
    case 65:
      xspeed = 0;
      break;
    case 39:
    case 68:
      xspeed = 0;
	}
}

	// class Ball{
	// 	constructor(){
	// 		this.x = random(width); 
	// 		this.y = 0;		
	// }

	// 	draw(){
	// 		background(0);
	// 		circle(this.x, this.y, 30);
	// 		this.y += 5;
	// 	}
	// }
	
	// 	draw()
	// 		if(frameCount % 100 == 0){
	// 			balls.push(new Ball());
	// 		}

	// 		balls.forEach((b) => {
	// 			b.draw();
	// 		})	