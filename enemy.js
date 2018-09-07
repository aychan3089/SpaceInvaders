function Enemy(x, y) {
	this.x = x;
	this.y = y;
	this.xspeed = 2;
	this.yspeed = 0.5;
	this.eWidth = 50;
	this.eHeight = 50;
	this.max = 64;
	this.right = true;
	this.bottom = false;

	this.show = function() {
		noStroke();
		fill(0,255,255);
		ellipse(this.x, this.y, this.eWidth, this.eHeight);
	}

	this.move = function() {
		if(this.right) {
			this.x += this.xspeed;
		} else {
			this.x -= this.xspeed;
		}

		if(this.x + this.eWidth/2 >= width) {
			this.right = false;
		} else if (this.x - this.eWidth/2 <= 0) {
			this.right = true;
		}

		this.y += this.yspeed;
	}

	this.grow = function() {
		this.eWidth += 4;
		this.eHeight += 4;
	}

	this.explode = function() {
		return this.eWidth > this.max;
	}

	this.hitBottom = function() {
		return this.y + this.eHeight/2 > height;
	}
}