var play;
var cact;
var dinoWidth = 40;
var dinoHeight = 40;
var cactWidth = 25;
var cactHeight = 50;
var startX = 50;
var ground = 100;
var cactGround = 90;
var gravity = 1;
var jumpspeed = 13;
var cactSpeed = 13;
var gameCheck = false;

function setup() {
    createCanvas(600, 150);
    play = new Player();
    cact = new Cacti();
}

function draw() {
    if (gameCheck == false) {
        background(255);
        play.show();
        play.update();
        cact.show();
        cact.update();
    }

    gameOver();

}

function keyPressed() {
    if (keyCode == 32 || keyCode == 38) {
        play.jump();
    } else if (keyCode == 40) {
        play.duck();
    }
}

function keyReleased() {
    if (keyCode == 40) {
        play.unDuck();
    }
}

function gameOver() {
    if (play.x + dinoWidth >= cact.x && play.x <= cact.x + cactWidth && play.y + dinoHeight >= cact.y && play.y <= cact.y + cactHeight) {
        gameCheck = true;
        console.log("game over");
    } else {
        gameCheck = false;
    }
}