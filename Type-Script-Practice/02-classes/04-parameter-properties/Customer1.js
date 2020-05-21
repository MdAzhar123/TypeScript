"use strict";
var Customer1 = /** @class */ (function () {
    function Customer1(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer1;
}());
var myCustomer1 = new Customer1("Martin", "Luther");
/**
myCustomer.firstName="Derek";
myCustomer.lastName="Obrien";
*/
console.log("firstName is " + myCustomer1.firstName);
console.log(myCustomer1.lastName);
