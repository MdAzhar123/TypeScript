import {Shape} from './Shape';
import {Circle} from './Circle';
import { Rectangle } from './Rectangle';



let myCircle=new Circle(5,8,12);

let myRectangle = new Rectangle(1,2,8,9);


let theShapes:Shape[]=[];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShapes of theShapes)
{
    console.log(tempShapes.getInfo());
    console.log(tempShapes.calculate());
    console.log();
}