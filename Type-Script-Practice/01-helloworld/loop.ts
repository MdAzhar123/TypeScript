let reviews : number[]=[5,4,5.5,6];
let rev:number[]=[3,6,3]
let total:number=0;
let t:number=0;

for(let i=0;i<reviews.length;i++)
{
    console.log(reviews[i]);
    total=total+reviews[i];
}

for(let k of rev)
{
t=t+k;
}

let avg:number;

avg=total/reviews.length;


let avg1:number;
avg1=t/rev.length;

console.log(`Average is ${avg}`);
console.log(`Average is ${avg1}`);


let Sports : string[]=["Football","Tennis","Golf"]

Sports.push("Baseball");
Sports.push("Hockey");

for(let temp of Sports)
{
    console.log(temp);
}

