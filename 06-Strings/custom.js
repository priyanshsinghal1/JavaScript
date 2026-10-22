// Strings in JS
// A string is a sequence of characters used to store & represent text.

// ------------------------------------------
// Creating Strings
// ------------------------------------------

let str = "Priyansh";
let str2 = "Singhal";

console.log(str);
console.log(typeof str);

// ------------------------------------------
// Template literals use backticks (`).
// ------------------------------------------
// To create strings by doing substitution of placeholders
// `string text ${expression} string text`

let obj = {
  item: "pen",
  price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let fullName = `${str} ${str2}`;
console.log(fullName);

// ------------------------------------------
// String Properties and Methods
// ------------------------------------------

let text = "JavaScript";

// length -> Returns the number of characters.
console.log(text.length);

// Access characters using index (starts from 0).
console.log(text[0]);
console.log(text[4]);

// toUpperCase() and toLowerCase()
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// trim() -> Removes whitespace from both ends.
let message = "  Hello JS  ";
console.log(message.trim());

// includes() -> Checks whether a string contains text.
console.log(text.includes("Script")); // true

// indexOf() -> Returns the first matching index, or -1.
console.log(text.indexOf("Script"));

// slice(start, end) -> Extracts part of a string.
// The end index is excluded.
console.log(text.slice(0, 4)); // Java

// replace() -> Replaces the first matching occurrence.
console.log(text.replace("Java", "Type"));

// concat() -> Joins strings.
console.log(str.concat(" ", str2));

// .charAt(idx) -> extract part at a particular index.
console.log(str.charAt(0));

// ------------------------------------------
// Strings are Immutable
// Original strings cannot be changed directly.
// String methods return new strings.
// ------------------------------------------

let word = "hello";
word.toUpperCase();

console.log(word); // hello

word = word.toUpperCase();
console.log(word); // HELLO

// ------------------------------------------
// Special Escape Characters
// ------------------------------------------

console.log("Hello\nJavaScript"); // New line
console.log("Hello\tJavaScript"); // Tab space
console.log("It's JavaScript");

// ------------------------------------------
// String Length and Last Character
// ------------------------------------------

let language = "JavaScript";

console.log(language.length);
console.log(language[language.length - 1]); // t
