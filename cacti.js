function Cacti() {
    this.x = 600;
    this.y = cactGround;
    this.update = function() {
        this.x -= cactSpeed;
        if (this.x < -500) {
            this.x = 600;
       }
    }
    this.show = function() {
        fill(255, 0, 0);
        rect(this.x, this.y, cactWidth, cactHeight)
    }
}