var person = new Object(); // creat empty object with some binging prototype


person.firstName = "Jagan";
person.lastName = "Javid";
person.age = 27;
person.address = new Object();

person.address.street = "111 main st";
person.address.city = "chennai";
person.address.state = "TN";


// Method
person.getFullname = function () {

    return `${this.firstName} ${this.lastName}`;
    //1.Within object method
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.street);
console.log(person.getFullname());


// this keyword - It is used to refer to the object from which the function

//1. when a method is called, this  refers to the object that the method is property of yours(getfullname)
//2.In constructor function






