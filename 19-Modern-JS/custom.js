// Modern JavaScript (ES6+)

// ------------------------------------------
// Template Literals
// Use backticks to embed variables in strings.
// ------------------------------------------

let name = "Priyansh";
let age = 24;

console.log(`My name is ${name} and I am ${age} years old.`);

// ------------------------------------------
// Optional Chaining (?.)
// Safely access properties that might not exist.
// ------------------------------------------

const user = {
  name: "Priyansh",
  address: {
    city: "Delhi",
  },
};

console.log(user.address?.city); // Delhi
console.log(user.contact?.phone); // undefined

// ------------------------------------------
// Nullish Coalescing (??)
// Uses the right value only when the left is null or undefined.
// ------------------------------------------

let username = null;

console.log(username ?? "Guest"); // Guest

console.log(0 ?? 100); // 0

// ------------------------------------------
// Logical OR (||) vs Nullish Coalescing (??)
// || uses the fallback for any falsy value.
// ?? uses the fallback only for null or undefined.
// ------------------------------------------

console.log(0 || 100); // 100
console.log(0 ?? 100); // 0

// ------------------------------------------
// Default Parameters
// Used when an argument is missing or undefined.
// ------------------------------------------

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Priyansh"); // Hello, Priyansh!

// ------------------------------------------
// Enhanced Object Literals
// Shorthand properties and methods.
// ------------------------------------------

let city = "Delhi";

const person = {
  name,
  city,
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

person.greet();

// ------------------------------------------
// Object.keys(), values(), entries()
// ------------------------------------------

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// ------------------------------------------
// Set
// Stores unique values.
// ------------------------------------------

const numbers = new Set([1, 2, 2, 3]);

console.log(numbers); // Set {1, 2, 3}

numbers.add(4);
numbers.delete(1);

console.log(numbers.has(2)); // true

// ------------------------------------------
// Map
// Stores key-value pairs; keys can be any value.
// ------------------------------------------

const map = new Map();

map.set("name", "Priyansh");
map.set(1, "First");

console.log(map.get("name"));
console.log(map.has(1));

map.delete(1);

// ------------------------------------------
// Important Notes
// ------------------------------------------

// ?. -> Safely accesses a property when the base is nullish.
// ?? -> Provides a fallback for null or undefined.
// || -> Provides a fallback for any falsy value.
// Set -> Stores unique values.
// Map -> Stores key-value pairs.
