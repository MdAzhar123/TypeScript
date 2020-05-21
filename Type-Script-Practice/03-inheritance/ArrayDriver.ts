import {Shape} from './Shape';
import {Circle} from './Circle';
import { Rectangle } from './Rectangle';

let myShape=new Shape(10,20);

let myCircle=new Circle(5,8,12);

let myRectangle = new Rectangle(1,2,8,9);


let theShapes:Shape[]=[];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShapes of theShapes)
{
    console.log(tempShapes.getInfo());
}