// ------------------------------------------
// Primitive Datatypes
// ------------------------------------------

let age = 24;
console.log(typeof age); // number

let fullName = "Priyansh";
console.log(typeof fullName); // string

let isFollow = true;
console.log(typeof isFollow); // boolean

let x;
console.log(typeof x); // undefined

let y = null;
console.log(typeof y); // object (JavaScript quirk)

let z = BigInt("123");
console.log(typeof z); // bigint

let a = Symbol("Hello!");
console.log(a);
console.log(typeof a); // symbol

// ------------------------------------------
// Non-Primitive Datatypes
// Objects -> (Arrays, Functions)
// ------------------------------------------

// Object -> A collection of values stored as key-value pairs.

const student = {
  fullName: "Priyansh Singhal",
  age: 24,
  cgpa: 8.9,
  isPass: true,
};

console.log(typeof student); // object

console.log(student.fullName);
console.log(student["age"]);

student["age"] = student["age"] + 1;
console.log(student["age"]); // 25

// const prevents reassignment of the object variable,
// but its properties can still be modified.

// student = {}; // Error: reassignment not allowed
// student.age = 25; // Allowed

// let variables can be reassigned; const variables cannot.
// const does not make an object's properties immutable.
