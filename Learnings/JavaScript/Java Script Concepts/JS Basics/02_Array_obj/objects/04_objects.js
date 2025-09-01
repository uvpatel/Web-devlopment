//1. Creating Objects
// Two common ways:
//  Method 1: Using Object constructor


const tinderUser1 = new Object(); // creates a singleton object








// Method 2: Using object literal (preferred)
// 2. Adding Properties to an Object
// Objects are basically key-value pairs:
const tinderUser2 = {}; // empty object



tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);




// objects of object(nesting)


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


// two object merge and create another object

// 4. Merging Objects
// Multiple objects can be combined:

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

// Method 1: assign (safe, old style)
const obj3a = Object.assign({}, obj1, obj2, obj4);

// Method 2: spread operator (modern, cleaner)
const obj3b = {...obj1, ...obj2, ...obj4};

console.log(obj3a);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }



// 5. Array of Objects

// Objects are often stored inside arrays—common in databases, APIs, etc.


const users = [
    { id: 1, email: "a@gmail.com" },
    { id: 2, email: "b@gmail.com" },
    { id: 3, email: "c@gmail.com" }
];

console.log(users[1].email); // Access second user’s email -> b@gmail.com


// 6. Object Utility Methods

const tinderUser = {
    id: "123abc",
    name: "Sammy",
    isLoggedIn: false
};

// Get all keys
console.log(Object.keys(tinderUser)); 
// [ 'id', 'name', 'isLoggedIn' ]

// Get all values
console.log(Object.values(tinderUser)); 
// [ '123abc', 'Sammy', false ]

// Get key-value pairs
console.log(Object.entries(tinderUser)); 
// [ ['id','123abc'], ['name','Sammy'], ['isLoggedIn', false] ]

// Check if property exists
console.log(tinderUser.hasOwnProperty("isLoggedIn")); 
// true



// 7. Object Destructuring

// Instead of writing course.courseInstructor, you can “unpack” it:


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Destructure and rename
const { courseInstructor: instructor } = course;

console.log(instructor); // hitesh


// 8. JSON (JavaScript Object Notation)

// When objects are sent across the web (e.g., API), they’re written in JSON format:

// {
//   "name": "hitesh",
//   "coursename": "js in hindi",
//   "price": "free"
// }



// 9. Objects in Arrays (common pattern in APIs)
// Example API response:

const courses = [
    { name: "hitesh", coursename: "js in hindi", price: "free" },
    { name: "rahul", coursename: "python basics", price: "499" },
    { name: "neha", coursename: "react advanced", price: "999" }
];

// Access Neha’s course
console.log(courses[2].coursename); // react advanced
