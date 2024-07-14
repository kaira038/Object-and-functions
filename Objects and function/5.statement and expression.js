



//   1.Function Statement(Function decleration)

//A function statement (or function declaration) defines a named function. It is hoisted, meaning it can be called before it is defined in the code.



// :: Function Statement
function greeet() {
    console.log("Helloooo!");
}

// Can be called before the declaration
greeet(); //--------- Outputs: Hello!



//     2. Function expression/ anonymous function

//A function expression defines a function as part of an expression. It can be anonymous or named, but it is not hoisted, meaning you cannot call it before its definition in the code.



// :: Function expression/
const greet = function() {
    console.log("Hello!");
};


// Cannot be called before the assignment
greet(); //--------- Outputs: Hello!

