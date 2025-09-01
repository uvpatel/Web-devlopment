
function sayMyName(){
    console.log("U");
    console.log("r");
    console.log("v");
    console.log("i");
    console.log("l");
}

// sayMyName() // log will be called 5 time and sayMyName one time



// here we just refer that sam is a string value given to the params formal argument

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("sam"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))




// object with function

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) new type of function with object as arg
handleObject({
    username: "sam",
    price: 399
})



// Array with function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));