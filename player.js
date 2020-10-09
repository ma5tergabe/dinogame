function Player() {
    this.x = startX;
    this.y = ground;
    this.yVel = 0;
    this.update = function() {
        this.y -= this.yVel;
        if (this.y < ground) {
            this.yVel -= gravity;
        } else {
            this.yVel = 0;
        }
    }

    this.show = function() {
        fill(0, 97, 255);
        rect(this.x, this.y, dinoWidth, dinoHeight);
    }

    this.jump = function() {
        if (this.y == ground) {
            this.yVel = jumpspeed;
        }
    }

    this.duck = function() {
        if (this.y == ground) {
            dinoHeight = 20;
            this.y += 20;
        }
    }

    this.unDuck = function() {
        if (this.y == ground + 20) {
            dinoHeight = 40
            this.y -= 20;
        }
    }
}