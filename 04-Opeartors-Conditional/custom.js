// Comment

// ------------------------------------------
// Operators in JS
// Used to perform operations on data
// ------------------------------------------

// ------------------------------------------
// Arithmetic Operators - +, -, *, /
// ------------------------------------------

let a = 5;
let b = 2;

console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);

// Modulus -> %
console.log("a % b = ", a % b);

// Exponentiation -> **
console.log("a ** b = ", a ** b); // 5^2 = 25

// Increment -> ++
console.log(a++); // Prints 5, then increments a to 6
console.log(++a); // Increments first, then prints 7

// Decrement -> --
console.log(a--); // Prints 7, then decrements a to 6
console.log(--a); // Decrements first, then prints 5

// ------------------------------------------
// Assignment Operators - =, +=, -=, *=, /=, %=, **=
// ------------------------------------------

let c = 5;
let d = 2;

c **= 4;
console.log("c = ", c, " & d = ", d); // c = 625

// ------------------------------------------
// Comparison Operators - >, >=, <, <=
// ------------------------------------------

// Equal to -> ==
// Not equal to -> !=
// Strict equal (value and type) -> ===
// Strict not equal -> !==

let e = 5;
let f = 2;
console.log("5 != 2", e != f); // true

let g = 5; // number
let h = "5"; // string

console.log("g == h", g == h); // true (type conversion)
console.log("g === h", g === h); // false (different types)

// ------------------------------------------
// Logical Operators
// ------------------------------------------

// Logical AND -> &&
// Logical OR -> ||
// Logical NOT -> !

let i = 5;
let j = 3;

console.log("i > j", i > j); // true
console.log("i !== j", i !== j); // true

// Truth table: && (AND) and || (OR)
//
// cond1 | cond2 | &&    | ||
//   T   |   T   | true  | true
//   T   |   F   | false | true
//   F   |   T   | false | true
//   F   |   F   | false | false

// ------------------------------------------
// Conditional Statements
// Odd or even
// ------------------------------------------

let num = 10;

if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// ------------------------------------------
// Ternary Operator
// ------------------------------------------

// condition ? true output : false output

let age = 24;
let result = age > 18 ? "adult" : "not adult";
console.log(result);
