var ship;
var enemies = [];
var bullets = [];

function setup() {
	createCanvas(900,500);
	ship = new Ship();
	for(var i = 0; i < 10; i++) {
		enemies[i] = new Enemy(i*80 + 80, 60);
	}
}

function draw() {
	background(51);
	ship.show();
	ship.move();
	
	//loop through bullets to check collision
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].show();
		bullets[i].move();
		for (var j = 0; j < enemies.length; j++) {
			if (bullets[i].hits(enemies[j])) {
				enemies[j].grow();
				bullets[i].toDel();
			}
		}
		if (bullets[i].del) {
			bullets.splice(i,1);
		}
	}

	//loop thorugh enemies from back to move and make them explode 
	for (var i = enemies.length - 1; i >= 0; i--) {
		enemies[i].show();
		enemies[i].move();

		if (ship.hits(enemies[i])) {
			noLoop();
			console.log()
		}
		
		/*
		if (enemies[i].hitBottom()) {
			for(var i = 0; i < 2; i++) {
				enemies.push(new Enemy(i*80 + 80, 60));
			}	
		}
		*/

		if (enemies[i].explode()) {
			enemies.splice(i,1);
		}
	}
}

function keyReleased() {
	 if (keyCode === RIGHT_ARROW) {
		if (keyIsDown(LEFT_ARROW)) {
			ship.setXDir(-1);
		} else {
			ship.setXDir(0);
		}
	} 
	if (keyCode === LEFT_ARROW) {
		if (keyIsDown(RIGHT_ARROW)) {
			ship.setXDir(1);
		} else {
			ship.setXDir(0);
		}
	} 
	if (keyCode === UP_ARROW) {
		if (keyIsDown(DOWN_ARROW)) {
			ship.setYDir(1);
		} else {
			ship.setYDir(0);
		}
	} 
	if (keyCode === DOWN_ARROW) {
		if (keyIsDown(UP_ARROW)) {
			ship.setYDir(-1);
		} else {
			ship.setYDir(0);
		}
	} 
}

function keyPressed() {
	if (key === ' ') {
		var bullet = new Bullet(ship.x, ship.y);
		bullets.push(bullet);
	}

	if (keyCode === RIGHT_ARROW) { //move right
		ship.setXDir(1);
	} 
	if (keyCode === LEFT_ARROW) { //move left 
		ship.setXDir(-1);
	}
	if (keyCode === UP_ARROW) { // move up 
		ship.setYDir(-1	);
	}
	if (keyCode === DOWN_ARROW) { // move down 
		ship.setYDir(1);
	} 
}