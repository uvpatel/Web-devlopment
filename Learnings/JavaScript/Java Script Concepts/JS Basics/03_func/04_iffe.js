// Immediately Invoked Function Expressions (IIFE)

// used when you want to call function immediatly.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
