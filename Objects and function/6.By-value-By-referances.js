
//BY VALUE AND BY REFERANCE



// By Value: Primitive types (copy of value).
// By Reference: Reference types (copy of reference to the same object).



// 1. BY VALUE
//(e.g., numbers, strings, booleans, null, undefined, and symbols) are passed by value. This means that when you assign a primitive value to a variable or pass it to a function, a copy of the value is created.
//Changes to the copy do not affect the original value.

let a = 10;
let b = a; // b gets a copy of a's value

b = 20;   // Changing b does not affect a
console.log(a); // Outputs: 10



let c= 6;
let d=c;

d=3;

console.log(c);// output= 6
console.log(d);// output= 3


// 2. BY REFERANCE
//(e.g., objects, arrays, functions) are passed by reference. This means that when you assign a reference type to a variable or pass it to a function, you are copying the reference to the original object, not the object itself.
//Changes made to the object through one reference will affect all references to that object.

let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 references the same object as obj1

obj2.name = "Bob"; // Changing obj2 affects obj1
console.log(obj1.name); // Outputs: Bob



let obj3 = {lastUser:"kavipriya"};
let obj4= obj3;

obj4.lastUser="priya";

console.log(obj3.lastUser);  //priya
console.log(obj4.lastUser);  //priya