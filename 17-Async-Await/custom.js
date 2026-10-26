// Async & Await in JS
// async/await makes asynchronous code easier to read.

// ------------------------------------------
// async Function
// An async function always returns a Promise.
// ------------------------------------------

async function greet() {
  return "Hello, Priyansh!";
}

greet().then((message) => {
  console.log(message);
});

// ------------------------------------------
// await Keyword
// await waits for a Promise to settle inside an async function.
// ------------------------------------------

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

async function fetchData() {
  let result = await getData();
  console.log(result);
}

fetchData();

// ------------------------------------------
// Multiple await Statements
// Each await waits for its Promise before continuing.
// ------------------------------------------

function getNumber() {
  return Promise.resolve(10);
}

async function calculate() {
  let num = await getNumber();
  let result = num * 2;

  console.log(result); // 20
}

calculate();

// ------------------------------------------
// Error Handling with try...catch
// Handles errors from awaited rejected Promises.
// ------------------------------------------

function getError() {
  return Promise.reject(new Error("Something went wrong!"));
}

async function handleError() {
  try {
    let result = await getError();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

handleError();

// ------------------------------------------
// Running Promises in Parallel
// Promise.all() waits for all Promises to fulfill.
// ------------------------------------------

async function getResults() {
  let results = await Promise.all([
    Promise.resolve("Task 1"),
    Promise.resolve("Task 2"),
  ]);

  console.log(results);
}

getResults();

// ------------------------------------------
// Important Notes
// ------------------------------------------

// async -> Makes a function return a Promise.
// await -> Waits for a Promise to settle inside an async function.
// try...catch -> Handles errors from awaited rejected Promises.
// Promise.all() -> Waits for multiple Promises together.
