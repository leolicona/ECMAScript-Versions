// The arrow function is a shorter syntax for writing function expressions. 
// Arrow functions do not have their own this. They are not well suited for 
// defining object methods.


// ES5
var x = function(x, y) {
    return x * y;
}

// ES6
const multiply = (x, y) => x * y;

console.log(multiply(2, 3)); // 6

// Arrow functions with no parameters
const greet = () => "Hello World!";
console.log(greet()); // Hello World!

// Arrow functions with one parameter

const greetName = name => `Hello ${name}!`;

console.log(greetName('John Doe')); // Hello John Doe!

// Arrow functions with multiple parameters

const greetPerson = (name, age) => `Hello ${name}, you are ${age} years old!`;

console.log(greetPerson('John Doe', 30)); // Hello John Doe, you are 30 years old!

// The key difference between function expressions and arrow functions is the
// handling of the this keyword. In function expressions, the this keyword
// represents the object that called the function. In arrow functions, the this
// keyword represents the object that defined the arrow function. Arrow functions
// do not have their own this. They are not well suited for defining object methods.

