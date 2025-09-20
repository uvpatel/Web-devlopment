// Data type in JavaScript

/* Primitive (call by value):
 1) Number
 2) Bigint
 3) boolean
 4) undefined
 5) Null 
 6) String
 7)symbol

*/


let number = 5 
console.log(typeof number);
// number


let bignum = 5555555555555555555555555
console.log(typeof bignum);
// number

let bool = true
console.log(typeof bool);
// boolean

let null_= null
console.log(typeof null_);
// object

let name_ = "Urvil"
console.log(typeof name_);
// string


let symbol = Symbol("123") // for uniquely identifying 
console.log(typeof symbol);
// symbol


let undefined
console.log(typeof undefined);
// undefined


// Non - Primitive (Refrence type - Call by refrence) - Array, Function , objects

let hero = ["Hitesh Chaudhary" , "CodeWithHarry","Shradhha Khapra"] // Array
console.log(typeof hero);
// object

let objects = {
    "name" : "Urvil",
    "Roll" : "DataScientist"
}

console.log(typeof objects);
// object


let my_func = function print() {
    console.log("Hello JS");
    
}
console.log(typeof my_func);
// function (Object Function)


