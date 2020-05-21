"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 8, 12);
var myRectangle = new Rectangle_1.Rectangle(1, 2, 8, 9);
var theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShapes = theShapes_1[_i];
    console.log(tempShapes.getInfo());
    console.log(tempShapes.calculate());
    console.log();
}
