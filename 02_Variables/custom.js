/*
// Variables are containers for storing data.
// JavaScript is dynamically typed.
*/

let fullName = "Priyansh Singhal";
let age = 24;
let price = 99.99;
let radius = 21;
let a = null;
let y = undefined;
let isFollow = true;

console.log(isFollow);

age = 24;
console.log(age);
console.log(age + 1);

let fullname = "Priyansh Singhal";
console.log(fullname);
console.log("fullname"); // Prints the string "fullname"

let x = null;
console.log(x);

y = undefined;
console.log(y);

// ------------------------------------------
// Variable Rules
// ------------------------------------------

// -> JavaScript is dynamically typed.
// -> Variable names are case-sensitive: 'a' and 'A' are different.

// -> Letters, digits, underscores (_) and $ are allowed.
// -> A variable name cannot start with a digit.
// -> Reserved words cannot be used as variable names.

// ------------------------------------------
// Naming Conventions
// ------------------------------------------

// fullName -> camelCase
// full_name -> snake_case
// full-name -> kebab-case (not valid for variable names)
// FullName -> PascalCase

// ------------------------------------------
// Keywords
// ------------------------------------------

// var   : Can be re-declared and updated.
//         Function-scoped (or globally scoped).

// let   : Cannot be re-declared in the same scope,
//         but can be updated. Block-scoped.

// const : Cannot be re-declared in the same scope
//         or reassigned. Block-scoped.

let name = "Priyansh";
name = "Singhal"; // Allowed

const country = "India";
// country = "USA"; // Error: reassignment not allowed

// Prefer const by default; use let when reassignment is needed.
