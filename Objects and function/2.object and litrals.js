
// OBJECT LITERALS


// object literals - way to creat object using simple straightforword syntax.
// they are allow to define an object and its properties directly within a set of curly braces{}.



var persoon = {
    // Property
    firstName: "Jagan",
    lastName: "Javid",
    age:27,
    address:{
        street:"222 main str",
        city:"Chennai",
        state: "TN"
    }, 
    // Method
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//PRACTING OBJECT

//1. properties 
console.log(persoon);
console.log(persoon.firstName);
console.log(persoon.lastName);



var person ={
    firstName:"kavi",
    lastName:"priya",
    age:21,
    address:{
        district:"TVM",
        state:"Tamil nadu",
        pin:606755
    }
};


console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.address);
console.log(person.address.district);
console.log(person.address.state);
console.log(person.address.pin);

//2.Adding Method

var employee={
    firstUser:"kavi",
    secondUser:"priya",
    getAllUserName:function () {
        console.log(`Hello,the users are ${this.firstUser} and ${this.secondUser}`);
    }
}


employee.getAllUserName();  //call the fn



//3. Nested Objects

const forSale={
    fruits:{
        fruit1:"apple",
        fruit2:"banana",
        fruit3:"pinapple"
    },
    vegies:{
        veg1:"tomato",
        veg2:"garlic",
        veg3:"onion"
    },
    nuts:{
        almonds:{
            variety1:"salted",
            variety2:"roasted"
        },
        cashews:"roasted"
    }

};


console.log(forSale.fruits.fruit3);
console.log(forSale.nuts.almonds.variety2);
console.log(forSale.nuts.cashews);

// 4.computed property name

const propertyName =`age`;
const employer ={
    name:"priya",
    [propertyName]:21

};

console.log(employer.age);


//Shorthand Property name

// If property name and variable name are same 


const birdName="cokoo";
const isPaired= false;

const details={
    birdName,
    isPaired
};

console.log(details.birdName);
console.log(details.isPaireds);
console.log(typeof (details.isPaired)); //boolean


//method shorthand

const emp={
    empName:`alice`,
    empAge:22,
    greet(){
        console.log(`hello ${this.empName} is ${this.empAge}`);
    }
};

emp.greet();




















