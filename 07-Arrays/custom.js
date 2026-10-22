// Arrays in JS
// Arrays are used to store multiple values in a single variable.

// ------------------------------------------
// Creating Arrays
// ------------------------------------------

let marks = [85, 90, 78, 92];
let heroes = ["Ironman", "Thor", "Hulk"];

console.log(marks);
console.log(heroes);

// ------------------------------------------
// Accessing Array Elements
// Index starts from 0.
// ------------------------------------------

console.log(marks[0]); // 85
console.log(marks[2]); // 78

// Updating array elements
marks[0] = 95;
console.log(marks);

// ------------------------------------------
// Array Length
// ------------------------------------------

console.log(marks.length);

// ------------------------------------------
// Looping Through Arrays
// ------------------------------------------

// Using for loop
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

// Using for...of loop
for (let mark of marks) {
  console.log(mark);
}
