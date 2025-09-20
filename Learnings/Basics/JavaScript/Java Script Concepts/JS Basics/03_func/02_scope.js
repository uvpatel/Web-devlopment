// ===================== SCOPE WITH LET/CONST =====================

// 'let' and 'const' are block scoped
let a = 300

if (true) {
    let a = 10        // this 'a' exists only inside this block
    const b = 20      // block scoped as well
    console.log("INNER a:", a) // 10
}

// Outer 'a' is unaffected
console.log("OUTER a:", a) // 300

// console.log(b) // ❌ ERROR: b is not defined outside block



// ===================== FUNCTION SCOPES & CLOSURES =====================

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log("Inner function accessing outer variable:", username)
        // 'two' can access 'username' because of lexical scoping (closure)
    }

    // console.log(website) // ❌ ERROR: 'website' is not defined here
    two()
}

one()



// ===================== NESTED IF BLOCKS =====================

if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = " youtube"
        console.log("Concatenation inside nested if:", username + website)
    }

    // console.log(website) // ❌ ERROR: website is only inside inner if
}

// console.log(username) // ❌ ERROR: username only exists inside if



// ===================== FUNCTION DECLARATION vs FUNCTION EXPRESSION =====================

// Function Declaration is hoisted
console.log("addone(5):", addone(5)) // ✅ Works even before definition

function addone(num) {
    return num + 1
}


// Function Expression is NOT hoisted
// addTwo(5) // ❌ ERROR: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2
}

console.log("addTwo(5):", addTwo(5)) // ✅ Works here, after definition
