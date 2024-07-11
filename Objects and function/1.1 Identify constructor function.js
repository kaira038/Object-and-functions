//this keyword



//1. OBJECT METHOD


const person ={
    name:`alice`,
    age:21,
    greet:function () {
         console.log(`helllo my name is ${this.name} and my age is ${this.age}`);
        //console.log(`helllo my name is ${name} and my age is ${age}`);// returns error - should refer with this keyword
    

    }
};

person.greet();

//::when a method is called, this refers to the object that the method is property of yours




//2.Constructor function

function Person(name,age) {
    this.name=name;
    this.age=age;    
}
const personName =new Person('john',30);  //return object

console.log(personName);  //return obj {name:"john,age:30"}
console.log(personName.name); // John
console.log(personName.age);  //30
//console.log(personName.age=21); //21 - first priority 

//:: When creating object by using constructor function, this refer to new object is  being created


