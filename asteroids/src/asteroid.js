const MovingObject = require("./moving_object");
const Util = require("./util");


const DEFAULTS = {
    color: "red", 
    radius: 20
}

function Asteroid(options) {
    options.color = DEFAULTS.color;
    options.radius = DEFAULTS.radius;
    options.vel = Util.randomVec(5);
    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;