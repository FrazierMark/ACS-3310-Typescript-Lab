// This function returns a function that returns a string
// Add the types: 
function sayHello() {
    return function () { return 'Hello!'; };
}
// This variable contains a function that returns a string
var helloFunction = sayHello();
// Calling the function returns the string
console.log(helloFunction()); // Hello!
console.log(helloFunction()); // Hello!
console.log(helloFunction()); // Hello!
console.log(helloFunction()); // Hello!
function mathematizer(n) {
    var sum = n;
    return function (x) { return x * n; };
}
var mFunction = mathematizer(3);
console.log(mFunction(3)); // 9
console.log(mFunction(2)); // 6
console.log(mFunction(10)); // 30
console.log(mFunction(111)); // 333
