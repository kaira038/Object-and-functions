// FUNCTION OVERLOADING :- 
//fn overloading refers to the concept where multiple fns with the sames can have different implementations.


function greet(firstName,lastName,language) {
    return`${firstName} ${lastName} I speak ${language}`;
}

function tamilGreet(language) {
    return greet("kavi","priya",language);
}

function englishGreet(language) {
    return greet("siva","prakash",language);
}

console.log(tamilGreet("tn"));
console.log(englishGreet("EN"));