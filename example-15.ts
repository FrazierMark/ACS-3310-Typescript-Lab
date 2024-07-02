// This function returns a function that returns a string
// Add the types: 

function sayHello(): () => string {
    return () => 'Hello!'
}

// This variable contains a function that returns a string
const helloFunction = sayHello()


// Calling the function returns the string
console.log( helloFunction() ) // Hello!
console.log( helloFunction() ) // Hello!
console.log( helloFunction() ) // Hello!
console.log( helloFunction() ) // Hello!

function mathematizer(n: number): (x: number) => number {
    let sum = n
    return (x) => x * n
}

const mFunction = mathematizer(3)
console.log( mFunction(3) )   // 9
console.log( mFunction(2) )   // 6
console.log( mFunction(10) )  // 30
console.log( mFunction(111) ) // 333



