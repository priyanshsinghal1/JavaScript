// Named imports
import { PI, sum } from "./math.js";

// Rename a named import
import { sum as add } from "./math.js";

// Default import
import greet from "./greet.js";

console.log(PI); // 3.14
console.log(sum(5, 3)); // 8
console.log(add(2, 4)); // 6

greet(); // Hello, Priyansh!
