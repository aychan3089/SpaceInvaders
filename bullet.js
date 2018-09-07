function Bullet(x, y) {
	this.x = x;
	this.y = y;
	this.speed = -7;
	this.bDiameter = 6;
	this.del = false;

	this.show = function() {
		noStroke();
		fill(255,255,0);
		ellipse(this.x, this.y, this.bDiameter, this.bDiameter);
	}

	this.move = function() {
		this.y += this.speed;
	}

	this.hits = function(enemy) {
		if (enemy == undefined) {
			return false;
		}

		var d = dist(this.x, this.y, enemy.x, enemy.y);
		if (d < this.bDiameter/2 + enemy.eWidth/2) {
			return true;
		} else {
			return false; 
		}
	}

	this.toDel = function() {
		this.del = true;
	}
}