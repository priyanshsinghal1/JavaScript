// Objects in JS
// Objects store data in key-value pairs.

// ------------------------------------------
// Creating an Object
// ------------------------------------------

const student = {
  fullName: "Priyansh Singhal",
  age: 24,
  cgpa: 8.9,
  isPass: true,
};

console.log(student);

// ------------------------------------------
// Accessing Object Properties
// ------------------------------------------

console.log(student.fullName); // Dot notation
console.log(student["age"]); // Bracket notation

// ------------------------------------------
// Updating and Adding Properties
// ------------------------------------------

student.age = 25; // Update property
student.city = "Delhi"; // Add new property

console.log(student);

// ------------------------------------------
// Deleting Properties
// ------------------------------------------

delete student.city;
console.log(student);

// ------------------------------------------
// Object Methods
// A method is a function stored as an object property.
// ------------------------------------------

const person = {
  name: "Priyansh",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet();

// this refers to the object calling the method in this example.

// ------------------------------------------
// Object Methods: keys(), values(), entries()
// ------------------------------------------

console.log(Object.keys(student)); // Array of keys
console.log(Object.values(student)); // Array of values
console.log(Object.entries(student)); // Array of [key, value] pairs

// ------------------------------------------
// Checking Properties
// ------------------------------------------

console.log("age" in student); // true

// ------------------------------------------
// Looping Through Objects
// ------------------------------------------

for (let key in student) {
  console.log(key, student[key]);
}

// ------------------------------------------
// Nested Objects
// ------------------------------------------

const user = {
  name: "Priyansh",
  address: {
    city: "Delhi",
    country: "India",
  },
};

console.log(user.address.city);

// ------------------------------------------
// Object Destructuring
// Extract properties into variables.
// ------------------------------------------

const { name, address } = user;

console.log(name);
console.log(address.city);

// ------------------------------------------
// Spread Operator (...)
// Creates a shallow copy or combines objects.
// ------------------------------------------

const updatedStudent = { ...student, age: 26 };

console.log(updatedStudent);
console.log(student); // Original object unchanged

// ------------------------------------------
// const with Objects
// const prevents reassignment of the object variable,
// but its properties can still be modified.
// ------------------------------------------

// student = {}; // Error: reassignment not allowed
student.age = 24; // Allowed

// ------------------------------------------
// Optional Chaining (?.)
// Safely accesses a property if the value exists.
// ------------------------------------------

console.log(user.address?.city); // Delhi
console.log(user.contact?.phone); // undefined
