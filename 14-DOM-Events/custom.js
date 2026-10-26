// DOM Manipulation & Events in JS
// DOM allows JavaScript to access and modify HTML elements.
// ------------------------------------------
// Window Object
// The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
// & is automatically created by browser.
// It is a global object with lots of properties & methods
// ------------------------------------------
// What is DOM?
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page

// ------------------------------------------
// Selecting Elements
// ------------------------------------------
let heading = document.getElementById("heading");
console.log(heading);

let description = document.querySelector(".description");
console.log(description);

// querySelector() selects the first matching element.
let button = document.querySelector("#btn");

// ------------------------------------------
// Changing Content
// ------------------------------------------

heading.textContent = "Welcome, Priyansh!";

// innerHTML can read or change HTML content.
description.innerHTML = "Learning <b>DOM</b> manipulation.";

// ------------------------------------------
// Changing Styles
// ------------------------------------------

heading.style.color = "blue";
heading.style.backgroundColor = "lightyellow";

// ------------------------------------------
// Events
// An event occurs when the user interacts with a page.
// ------------------------------------------

button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// ------------------------------------------
// Changing Content on an Event
// ------------------------------------------

button.addEventListener("click", () => {
  heading.textContent = "You clicked the button!";
});

// ------------------------------------------
// Creating and Adding Elements
// ------------------------------------------

let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created using JavaScript.";

document.body.append(newPara);

// ------------------------------------------
// Removing Elements
// ------------------------------------------

// newPara.remove();

// ------------------------------------------
// Important Notes
// ------------------------------------------

// getElementById() selects an element by its ID.
// querySelector() selects the first CSS selector match.
// textContent changes text without interpreting HTML.
// addEventListener() runs a function when an event occurs.
// DOM code must run in a browser with the relevant HTML.
