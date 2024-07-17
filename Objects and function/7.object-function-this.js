




console.log(this); //window object 

function a(){
    console.log(this);
}

var b = function(){
    console.log(this);
}

a(); //window object 
b(); //window object 

var c = {
    name: "The c Object",
    log: function(){ //method

        console.log(this); // the c object

        var self = this;  //reference

        var setName = function(newName){

            // console.log(this) // window object

            self.name = newName;
        }

        setName("The C Object Updated");


    }
}

c.log();
// console.log(c.name);