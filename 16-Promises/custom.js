// Promises & Error Handling in JS
// A Promise represents the eventual success or failure of an asynchronous operation.
// Promise is for "eventual" completion of task. It is an object in JS.

// It is a solution to callback hell.

let promise = new Promise((resolve, reject) => {
  /* ....*/
});

// Function with 2 handlers

// *resolve & reject are callbacks provided by JS
// ------------------------------------------
// Creating a Promise
// ------------------------------------------

// States: pending, fulfilled, rejected

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

// ------------------------------------------
// After fulfilling of Promises...To use promises we use .then & .catch

// then() and catch()
// then() handles success; catch() handles errors.
// ------------------------------------------

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// ------------------------------------------
// finally()
// Runs whether the Promise succeeds or fails.
// ------------------------------------------

myPromise.finally(() => {
  console.log("Operation completed.");
});

// ------------------------------------------
// Promise with setTimeout()
// Simulates an asynchronous operation.
// ------------------------------------------

const fetchData = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data received!");
  }, 2000);
});

fetchData.then((data) => {
  console.log(data);
});

// ------------------------------------------
// Promise Chaining
// Each then() can pass a result to the next then().
// ------------------------------------------

Promise.resolve(5)
  .then((num) => num * 2)
  .then((num) => num + 3)
  .then((result) => console.log(result)); // 13

// ------------------------------------------
// Error Handling with catch()
// ------------------------------------------

Promise.reject("Something went wrong!").catch((error) => {
  console.log(error);
});

// ------------------------------------------
// Promise.all()
// Resolves when all Promises fulfill;
// rejects if any Promise rejects.
// ------------------------------------------

Promise.all([Promise.resolve("Task 1"), Promise.resolve("Task 2")]).then(
  (results) => {
    console.log(results);
  },
);

// ------------------------------------------
// try...catch
// Handles synchronous errors and awaited Promise rejections.
// ------------------------------------------

try {
  throw new Error("Example error");
} catch (error) {
  console.log(error.message);
}

// ------------------------------------------
// Important Notes
// ------------------------------------------

// resolve() -> Fulfills a Promise.
// reject() -> Rejects a Promise.
// then() -> Handles fulfillment.
// catch() -> Handles rejection or errors in the chain.
// finally() -> Runs after settlement, regardless of outcome.
