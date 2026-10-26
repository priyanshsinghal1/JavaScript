// Dialog Boxes in JS
// Browser dialog boxes interact with the user.

// ------------------------------------------
// alert()
// Displays a message to the user.
// ------------------------------------------

alert("Welcome to JavaScript!");

// ------------------------------------------
// prompt()
// Takes input from the user as a string.
// ------------------------------------------

let fullName = prompt("Enter your name:");
console.log(fullName);

// Convert input to a number when required.
let age = Number(prompt("Enter your age:"));
console.log(age);

// ------------------------------------------
// confirm()
// Displays a message with OK and Cancel.
// Returns true for OK and false for Cancel.
// ------------------------------------------

let result = confirm("Do you want to continue?");
console.log(result);

// ------------------------------------------
// Important Notes
// ------------------------------------------

// prompt() returns a string or null if cancelled.
// Number() converts a valid numeric string to a number.
// alert() returns undefined.
// confirm() returns a boolean.

// These functions work in browsers, not standard Node.js.
