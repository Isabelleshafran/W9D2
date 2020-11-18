const Util = require("./util");

const DEFAULTS = {
    DIM_X: 1000,
    DIM_Y: 600,
    NUM_ASTEROIDS: 50

}


function Game() {
    this.asteroids = [];
    this.addAsteroids();
}


Game.prototype.addAsteroids = function(){
    for(let i= 0; i < DEFAULTS.NUM_ASTEROIDS; i++){
        this.asteroids.push(new Asteroid({ pos: this.randomPosition()}))
    }
}

// const ast = new Asteroid({ pos: [30, 30] });

Game.prototype.randomPosition = function(){
    return [DEFAULTS.DIM_X * Math.random(), DEFAULTS.DIM_Y * Math.random() ]
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);
    this.asteroids.forEach(ast => ast.draw(ctx));
}

Game.prototype.moveObjects = function() {
    asteroids.forEach(ast => ast.move(1000));
}

module.exports = Game;
// ctx.clearRect(0, 0, canvas.width, canvas.height);