// Loops in JS
// Loops are used to execute a piece of code again and again.

// ------------------------------------------
// for Loop
// ------------------------------------------

for (let i = 1; i <= 5; i++) {
  console.log("Priyansh Singhal");
}

// ------------------------------------------
// while Loop
// ------------------------------------------

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// ------------------------------------------
// do-while Loop
// Executes at least once, even if the condition is false.
// ------------------------------------------

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 5);

// ------------------------------------------
// for...of Loop
// Used to iterate over iterable values like strings and arrays.
// ------------------------------------------

let name = "Priyansh";

for (let char of name) {
  console.log(char);
}

// ------------------------------------------
// for...in Loop
// Used to iterate over the keys of an object.
// ------------------------------------------

const student = {
  name: "Priyansh",
  age: 24,
};

for (let key in student) {
  console.log(key, student[key]);
}

// ------------------------------------------
// break and continue
// ------------------------------------------

// break -> Stops the loop.
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// continue -> Skips the current iteration.
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
