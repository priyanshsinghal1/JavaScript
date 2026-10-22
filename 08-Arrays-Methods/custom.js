// ------------------------------------------
// Array Methods
// ------------------------------------------

let marks = [85, 90, 78, 92];
// push() -> Adds elements at the end.
marks.push(88);
console.log(marks);

// pop() -> Removes the last element and returns it.
console.log(marks.pop());
console.log(marks);

// toString() -> Converts the array to a string.
console.log(marks.toString());

// concat() -> Combines arrays and returns a new array.
let moreMarks = [70, 80];
let allMarks = marks.concat(moreMarks);
console.log(allMarks);

// unshift() -> Adds an element at the beginning.
marks.unshift(60);
console.log(marks);

// shift() -> Removes the first element and returns it.
console.log(marks.shift());
console.log(marks);

// slice(start, end) -> Returns a portion of an array.
// The end index is excluded; the original array is unchanged.
console.log(marks.slice(1, 3));

// splice(start, deleteCount, ...items)
// Adds, removes, or replaces elements in the original array.
let numbers = [10, 20, 30, 40];

numbers.splice(1, 2, 25, 35);
console.log(numbers); // [10, 25, 35, 40]

// ------------------------------------------
// Other Useful Array Methods
// ------------------------------------------

let nums = [1, 2, 3, 4, 5];

// forEach() -> Executes a function for each element.
nums.forEach((num) => {
  console.log(num);
});

// map() -> Creates a new array by transforming elements.
let doubled = nums.map((num) => num * 2);
console.log(doubled);

// filter() -> Creates a new array with matching elements.
let evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums);

// find() -> Returns the first matching element.
console.log(nums.find((num) => num > 3)); // 4

// includes() -> Checks whether an element exists.
console.log(nums.includes(3)); // true

// indexOf() -> Returns the first matching index, or -1.
console.log(nums.indexOf(4)); // 3

// ------------------------------------------
// Arrays are Mutable
// Array elements can be changed even when declared with const.
// ------------------------------------------

const fruits = ["Apple", "Banana"];

fruits.push("Mango");
fruits[0] = "Orange";

console.log(fruits);

// fruits = []; // Error: const variable cannot be reassigned
// Remember: slice() returns a portion without modifying the original array, whereas splice() modifies the original array.

// ------------------------------------------
// Additional Array Methods
// ------------------------------------------

// reduce() -> Reduces an array to a single value.

let sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 15

// findIndex() -> Returns the index of the first matching element.
console.log(nums.findIndex((num) => num > 3)); // 3

// some() -> Returns true if at least one element matches.
console.log(nums.some((num) => num > 4)); // true

// every() -> Returns true if all elements match.
console.log(nums.every((num) => num > 0)); // true

// sort() -> Sorts array elements in place.
// Use a comparison function for numbers.
let values = [40, 10, 30, 20];

values.sort((a, b) => a - b);
console.log(values); // [10, 20, 30, 40]

// reverse() -> Reverses the array in place.
values.reverse();
console.log(values); // [40, 30, 20, 10]

// join() -> Joins array elements into a string.
// let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits.join(", ")); // Apple, Mango, Banana

// flat() -> Flattens nested arrays.
let nestedArr = [1, 2, [3, 4]];
console.log(nestedArr.flat()); // [1, 2, 3, 4]

// Array.isArray() -> Checks whether a value is an array.
console.log(Array.isArray(fruits)); // true

// Array.from() -> Creates an array from an iterable or array-like value.
console.log(Array.from("JS")); // ["J", "S"]

// Spread operator (...) -> Copies or combines arrays.
let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

// ------------------------------------------
// Important Notes
// ------------------------------------------

// sort() and reverse() modify the original array.
// map(), filter(), and slice() return new arrays.
// reduce() returns a single accumulated result.
