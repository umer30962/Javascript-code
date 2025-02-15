
// PRIMITIVE DATATYPES

/* Primitive always call by value(not given an original data of memory, just given us a copy)

& changes also happen in that copy

Primitive datatypes : 

string
number
boolean
null
undefined 
symbol(for making any valuee UNIQUE)
BigInt (a large number of value eg; 2.79886557574758638698638768569378696973966)
_______________________________________________________________________________________________________


// NON-PRIMITIVE DATATYPES 

non-primitive always call by reference(directly allocate memory by refernence)

non-primitive datatypes :

Array
objects
functions


*/

let id = Symbol(123)

let anotherId = Symbol(123)

// console.log(id == anotherId)

// gives us false because symbol make things unique



 let Heros1 = ["superman","spiderman","batman"]  // arrays


// let Heros2 = {

//     name : Superman,
//     age : 23,
//     color : white,               // objects
// } 


const MyFunction = function(){

    console.log("hello function")
}

console.log(typeof MyFunction);

console.log(typeof Heros1)