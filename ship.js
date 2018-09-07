function Ship() {
	this.x = width/2;
	this.y = height - 20;
	this.speed = 4;
	this.xdir = 0;
	this.ydir = 0;
	this.shipWidth = 20;
	this.shipHeight = 30;

	this.show = function() {
		fill(255);
		rectMode(CENTER);
		rect(this.x, this.y, this.shipWidth, this.shipHeight);
	}

	this.setXDir = function(dir) {
		this.xdir = dir * this.speed;
	} 

	this.setYDir = function(dir) {
		this.ydir = dir * this.speed;
	}

	this.move = function() {
		// control horizontal movement
		if(this.x + this.shipWidth / 2 > width) {
			if(this.xdir < 0) {
				this.x += this.xdir;
			}
		} else if (this.x - this.shipWidth / 2 < 0) {
			if(this.xdir > 0) {
				this.x += this.xdir;
			}
		} else {
			this.x += this.xdir;
		}

		// control vertical movement 
		if(this.y + this.shipHeight / 2 > height) {
			if(this.ydir < 0) {
				this.y += this.ydir;
			}
		} else if (this.y - this.shipHeight / 2 < 0) {
			if(this.ydir > 0) {
				this.y += this.ydir;
			}
		} else {
			this.y += this.ydir;
		}

	}

	this.hits = function(enemy) {
		if (enemy == undefined) {
			return false;
		}
		
		var d = dist(this.x, this.y, enemy.x, enemy.y);
		if (d < this.shipWidth/2 + enemy.eWidth/2) {
			return true;
		} else {
			return false; 
		}
	}
}