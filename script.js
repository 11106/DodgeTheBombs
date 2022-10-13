//We hebben het geprobeerd met achtergrondgeluid te maken. Geluidseffecten werken wel, maar een constant muziekje wil niet werken zonder dat het begint te bufferen. We hebben het wel in de code staan, maar dan met "//" ervoor, omdat het spel anders niet goed wilde werken. U mag er van ons gewoon naar kijken en het misschien zelf proberen, maar van wat wij hebben kunnen vinden zou de enige oplossing zijn om een oude sound-library te gebruiken, maar na toch meer dan twee uur bezig te zijn geweest hieraan hebben we het simpelweg niet kunnen vinden. We hopen dat u dit begrijpt en daarom ook snapt waarom we geen achtergrond muziek hebben, maar wel geluidseffecten. 

var gameState = 0;
var score;
var highscore = 0;
var ball;
var balls = [];


class Ball{
	constructor(x, y){ // positie en snelheid bom aageven
		this.x = random(width); 
		this.y = 0;	
		this.vy = 2.5
    
		if(score > 10){
			this.vy = score / 4
		} //snelheid bommen aanpassen bij hogere score
	}	

	draw(){ // bom laten spawnen
		image(bomb,this.x - 25, this.y - 25, 50);
		this.y = this.y + this.vy
	}

	checkCollision(){ // coltroleren voor collision van bom met player
		if (this.y > 635 && this.y < 720){
			if (this.x - 25 < mouseX + 30 && this.x + 25 > mouseX ) {
				explosion.play();
				gameState = 2;
				let idx = balls.indexOf(this);
				balls.splice(idx, 1);
			}
		}
	}
}

let img; 
let explosion;
let score_ping;
//let menu_ST;
//let game_ST;
function preload(){ // sprites inladen
  bomb = loadImage('Sprites/bomb.png');
  menu_bg = loadImage('Sprites/Backgrounds/Menu_BG.jpg');
  game_bg = loadImage('Sprites/Backgrounds/Game_BG.jpg');
	player = loadImage ('Sprites/Player.png');
	game_over_bg = loadImage('Sprites/Backgrounds/GAME_OVER_BG.jpg');
	soundFormats('mp3');
  explosion = loadSound('Sound/explosion.mp3');
  score_ping = loadSound('Sound/score_ping.mp3');
  //menu_ST = loadSound('Sound/menu_ST.mp3');
  //game_ST = loadSound('Sound/game_ST.mp3');
}

function setup() { // spelvlak maken
  createCanvas(1250,720);
}

function draw() { // gamestates aangeven
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

function menu(){ // menu van spel vormgeven
	background(menu_bg);
  //menu_ST.play();
  //menu_ST.setVolume(0.1);
	textSize(26);
	text("MENU", 605, 290);
	textSize(22);
	text("Press 1 to start", 573, 360);
	fill (0);
	score = 1
	
  if (keyCode == 49) { // doorgaan naar spel
    gameState = 1;
     //menu_ST.stop()
    // game_ST.play()
    // game_ST.setVolume(0.1)
  }
}

var lastSpawn = 0;

function game(){ // spel vormgeven
	background(game_bg);
  
	textSize(14)
	text ("Score: " + score, 60, 84);
  fill(0);
	
	if(frameCount % 60 == 0){ // score bijhouden
		score = score + 1;
	}

  if(frameCount % 540 == 0){ //elke 10 punten die je krijgt, speelt een geluidje
		score_ping.play();
	}
   
	image(player, mouseX, 660, 30, 60); // player maken
	
	if(frameCount % 15 == 0){ // spawnloopje voor bommen
		balls.push(new Ball(1,1))
	};

	balls.forEach((b) => { // voor elke bom een nieuwe spawnen en checken voor collision
		b.draw();
		b.checkCollision();
	})
}	

function gameOver(){ // game over scherm vormgeven
	background(game_over_bg);
	textSize(42);
	text("Game Over!", 515, 330); 
	textSize(20);
  text("Press enter to",563,370);
	textSize(20);
  text("return to the menu",546,390);
	fill(0);
	balls = []; //bommen lijst leeg maken om deze weer vanaf boven te laten verschijnen
	
	if (score > highscore){ // highscore updaten
		highscore = score;
	}

	textSize(24)
	text ("Score: " + score, 525, 210);
	text ("Highscore: " + highscore, 525, 169);
	fill(0);
  
  if (keyCode == 13){ // terug naar menu
    gameState = 0;
  }
}