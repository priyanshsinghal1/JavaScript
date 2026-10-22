// Destructuring, Spread & Rest in JS

// ------------------------------------------
// Array Destructuring
// Extract values from an array into variables.
// ------------------------------------------

let colors = ["Red", "Green", "Blue"];

let [first, second, third] = colors;

console.log(first); // Red
console.log(second); // Green
console.log(third); // Blue

// Skipping elements
let [one, , three] = colors;
console.log(one, three); // Red Blue

// ------------------------------------------
// Object Destructuring
// Extract properties from an object into variables.
// ------------------------------------------

const student = {
  fullName: "Priyansh Singhal",
  age: 24,
};

const { fullName, age } = student;

console.log(fullName);
console.log(age);

// Renaming variables
const { fullName: name } = student;
console.log(name);

// Default values
const { city = "Delhi" } = student;
console.log(city);

// ------------------------------------------
// Spread Operator (...)
// Expands elements of an array or properties of an object.
// ------------------------------------------

// Copying an array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);

// Combining arrays
let arr3 = [4, 5];
let combined = [...arr1, ...arr3];

console.log(combined);

// Copying and updating objects
const updatedStudent = { ...student, age: 25 };

console.log(updatedStudent);

// ------------------------------------------
// Rest Operator (...)
// Collects remaining elements into an array or object.
// ------------------------------------------

// With arrays
let [firstNum, ...remaining] = [10, 20, 30, 40];

console.log(firstNum); // 10
console.log(remaining); // [20, 30, 40]

// With function parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// With objects
const { fullName: studentName, ...otherDetails } = student;

console.log(studentName);
console.log(otherDetails);

// ------------------------------------------
// Important Notes
// ------------------------------------------

// Spread (...) expands values.
// Rest (...) collects remaining values.
// Their meaning depends on where they are used.
// Spread and rest use the same ... syntax.
