// Callbacks in JS
// A callback is a function passed as an argument to another function.

// ------------------------------------------
// Basic Callback
// ------------------------------------------

function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  callback("Priyansh");
}

processUser(greet);

// ------------------------------------------
// Callback Using an Anonymous Function
// ------------------------------------------

function calculate(a, b, callback) {
  return callback(a, b);
}

let sum = calculate(5, 3, function (a, b) {
  return a + b;
});

console.log(sum); // 8

// ------------------------------------------
// Callback Using an Arrow Function
// ------------------------------------------

let result = calculate(10, 5, (a, b) => a * b);

console.log(result); // 50

// ------------------------------------------
// Synchronous Callback
// Executes during the current function call.
// ------------------------------------------

function display(callback) {
  console.log("Before callback");
  callback();
  console.log("After callback");
}

display(() => {
  console.log("Callback executed");
});

// ------------------------------------------
// Asynchronous Callback
// Executes later, after the timer finishes.
// ------------------------------------------

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// ------------------------------------------
// Callback in Array Methods
// forEach() calls the callback for each element.
// ------------------------------------------

let numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});

// ------------------------------------------
// Callback Hell
// Nested callbacks can make code difficult to read.
// ------------------------------------------

setTimeout(() => {
  console.log("Task 1");

  setTimeout(() => {
    console.log("Task 2");

    setTimeout(() => {
      console.log("Task 3");
    }, 1000);
  }, 1000);
}, 1000);

// Promises and async/await help manage many asynchronous workflows.

// ------------------------------------------
// Important Notes
// ------------------------------------------

// A callback is passed to another function as an argument.
// Synchronous callbacks execute immediately during the call.
// Asynchronous callbacks execute later.
// Array methods like forEach(), map(), and filter() use callbacks.

// don't pass it with the parenthesis

// Remember the difference:
// - Callback: A function passed to another function.
// - Promise: Represents the eventual result of an asynchronous operation.
// - async/await: A cleaner way to work with Promises.

function getData(datald, getNextData) {
  //2s
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2);
});

// Callback Hell

// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)

// This style of programming becomes difficult to understand & manage.

// To Resolve the callback hell problem we use promises
