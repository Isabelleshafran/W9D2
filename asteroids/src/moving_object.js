
function MovingObject(options) {
    this.pos = options.pos; 
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.pos[0], 
        this.pos[1],
        this.radius, 
        0, 
        2 * Math.PI, 
        false
    );

    ctx.fill();
}

MovingObject.prototype.move = function(time) {
    let x = this.pos[0];
    let y = this.pos[1];
    
    let newPos = [x + (this.vel[0]*time), y + (this.vel[1]*time)];
    this.pos = newPos;
}

module.exports = MovingObject;

// const mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00",
// });

// this is math, not JavaScript
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1]);