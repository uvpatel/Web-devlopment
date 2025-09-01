const fname = "urvil"

let age = 18

console.log(`Hello My name is ${fname} i am ${age} years old.`)

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);  // output: h
// console.log(gameName.__proto__); //{}
// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); // t
// console.log(gameName.indexOf('t')); // 2


// Slicing
const newString = gameName.substring(0, 4) // 0 to 3
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);



// Remove Spaces
const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar')) // check present or not

console.log(gameName.split('-')); // seperate from -