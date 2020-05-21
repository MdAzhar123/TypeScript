var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Martin", "Luther");
/**
myCustomer.firstName="Derek";
myCustomer.lastName="Obrien";
*/
console.log("firstName is " + myCustomer.firstName);
console.log(myCustomer.lastName);


