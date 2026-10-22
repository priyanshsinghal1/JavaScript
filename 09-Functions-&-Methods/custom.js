// Functions & Methods in JS
// Functions are reusable blocks of code that perform a specific task.

// ------------------------------------------
// Function Definition & Calling
// ------------------------------------------

function myFunction() {
  console.log("Welcome to JavaScript!");
}

myFunction(); // Function call

// ------------------------------------------
// Function with Parameters
// ------------------------------------------

function greet(name) {
  console.log("Hello", name);
}

greet("Priyansh");

// ------------------------------------------
// Function with Return
// ------------------------------------------

function sum(a, b) {
  return a + b;
}

let result = sum(5, 3);
console.log(result); // 8

// ------------------------------------------
// Function Expression
// ------------------------------------------

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20

// ------------------------------------------
// Arrow Functions
// ------------------------------------------

const divide = (a, b) => {
  return a / b;
};

console.log(divide(10, 2)); // 5

// Short arrow function (implicit return)
const square = (n) => n * n;

console.log(square(4)); // 16

// ------------------------------------------
// Default Parameters
// ------------------------------------------

function welcome(name = "Guest") {
  console.log("Welcome", name);
}

welcome();
welcome("Priyansh");

// ------------------------------------------
// Function with Multiple Parameters
// ------------------------------------------

function calculate(a, b, operation) {
  if (operation === "add") {
    return a + b;
  }
  return a - b;
}

console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "subtract")); // 5

// ------------------------------------------
// Methods
// A method is a function associated with an object.
// ------------------------------------------

const student = {
  name: "Priyansh",
  greet: function () {
    console.log("Hello", this.name);
  },
};

student.greet();

// ------------------------------------------
// Built-in Methods
// JavaScript provides built-in methods for common operations.
// ------------------------------------------

let text = "javascript";

console.log(text.toUpperCase()); // JAVASCRIPT
console.log(text.includes("script")); // true

let numbers = [1, 2, 3];

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

// ------------------------------------------
// Callback Function
// A callback is a function passed to another function.
// ------------------------------------------

function process(callback) {
  callback();
}

process(function () {
  console.log("Callback executed!");
});

// ------------------------------------------
// forEach() Method
// Executes a callback for each array element.
// ------------------------------------------

let nums = [10, 20, 30];

nums.forEach((num) => {
  console.log(num);
});

// Remember:
// - Function: A reusable block of code that you can call.
// - Method: A function associated with an object.
// - Parameter: A variable listed in a function definition.
// - Argument: The actual value passed when calling a function.
// - return: Sends a result back to the caller.
