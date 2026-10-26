// Application Programming Interface - API
// Fetch API in JS
// fetch() is used to make HTTP requests and get data from APIs.

// ------------------------------------------
// Basic fetch()
// fetch() returns a Promise.
// ------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json(); // Convert response to JSON
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// ------------------------------------------
// Fetch API using async/await
// ------------------------------------------

async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    let data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();

// ------------------------------------------
// Checking Response Status
// fetch() does not reject just because the server
// returns an HTTP error such as 404 or 500.
// ------------------------------------------

async function fetchUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

fetchUser();

// ------------------------------------------
// Sending Data using POST
// method: HTTP method
// headers: Request metadata
// body: Data sent to the server
// ------------------------------------------

async function createPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "JavaScript",
        body: "Learning Fetch API",
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

createPost();

// ------------------------------------------
// Important Notes
// ------------------------------------------

// fetch() returns a Promise containing a Response.
// response.json() returns a Promise that parses JSON.
// response.ok checks whether the HTTP status is successful.
// JSON.stringify() converts a JavaScript value into JSON text.
// catch() handles network errors and errors thrown in the chain.
// HTTP errors must be checked using response.ok.
