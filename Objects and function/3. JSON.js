
               //JASON

// Javascript object Notation  - lightweight date interchange format
// often used for transmitying  data in web aapplication.

               


const objectLiterals = {
    firstName:"Kavi",
    isAProgrammer: true
}

//console.log(objectLiterals);  //objects

var stringJ=(JSON.stringify(objectLiterals));  //shows string

//console.log(stringJ);
var jsonValue=JSON.parse(stringJ);

//var jsonValue = JSON.parse(`{"firstName":"Kavi","isAProgrammer":true}`);

console.log(jsonValue);




// NOTES

// The parse method is generally used to convert data from one format to another
