const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid");
const Game = require("./game");



// first arg is event its listenting for 
// second is whats invoked when the 'event' happens
// once all elements are loaded on page we run the other code 
window.addEventListener("DOMContentLoaded", () => {
    // console.log("DOM fully loaded and parsed");
    let canvas = document.getElementById("game-canvas");
    let context = canvas.getContext("2d");
    // let test = new MovingObject(canvas, cotnext)
    // test.draw(ctx)
    
    const mo = new MovingObject({
        pos: [100, 100],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });
    
    mo.draw(context);
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid;
    window.context = context;
    window.Game = Game;
    // const ast = new Asteroid({ pos: [30, 30] });
    // ast.draw(context);
    
});



