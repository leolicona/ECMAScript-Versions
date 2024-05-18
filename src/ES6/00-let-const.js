
// In ES6, let and const keywords are used to declare variables.
// var is used to declare variables that can be reassigned and redeclared.
// let is used to declare variables that can be reassigned.
// const is used to declare variables that cannot be reassigned.


var fistName = 'John Doe'; // Declaring a variable using var keyword
firstName = 'Jane'; // Reassigning the value of the variable
var firstName = 1; // Redeclaring the variable

console.log("var ----->", firstName); // Jane

let fruit = 'apple'; // Declaring a variable using let keyword
fruit = 'banana'; // Reassigning the value of the variable
//let fruit = 'orange'; // Let cannot be redeclared
console.log("let ---->", fruit); // banana

const PI = 3.14; // Declaring a constant variable using const keyword
// PI = 3.14159; // Const cannot be reassigned

console.log("const ----> ", PI); // TypeError: Assignment to constant variable.

function scopeExample() {
    if (true) {
       var x = 10; // var is function scoped
        let y = 20; // let is block scoped
        const z = 30; // const is block scoped
    }
    console.log(x); // 10
    // console.log(y); // ReferenceError: y is not defined
    // console.log(z); // ReferenceError: z is not defined
}

console.log(scopeExample());
//console.log("var ----->", x); // Var x is not accessible outside the function