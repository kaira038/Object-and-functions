

var arr=[
    2,
    false,
    {
        name:"kavipriya",
        age:21
    },
    null,
    undefined,
    [1,2,4,6],
    function(name){
        var greet="hello";
        console.log( `helo ${name} ${greet}`);
    }

]

//console.log(arr);
console.log(arr[0]);
console.log(arr[2].name); //object- access by dot
console.log(arr[4]);
console.log(arr[5][3]); //array
console.log(arr[6]);//function
arr[6]("kavi"); //pass argument





