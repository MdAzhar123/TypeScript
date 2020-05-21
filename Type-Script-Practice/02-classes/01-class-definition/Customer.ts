class Customer{
firstName:string;
lastName:string;


constructor(theFirst:string,theLast:string){
    this.firstName=theFirst;
    this.lastName=theLast;
}


}

let myCustomer=new Customer("Martin","Luther");
/** 
myCustomer.firstName="Derek";
myCustomer.lastName="Obrien"; 
*/
console.log(`firstName is ${myCustomer.firstName}`);
console.log(myCustomer.lastName); 