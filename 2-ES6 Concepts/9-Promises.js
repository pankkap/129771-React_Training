// ES6 Promises
// Promises: It is a way of Communication with APIs
// It is an Object that returns a Future value, but not right now
// Promises is well suited for Handling Asynchronous Operation.

// Promise has three states:
// 1. Pending State
// 2. Fullfilled State
// 3. Rejected State

let isCompleted = true;

let leannJs = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isCompleted) {  // where we consume the API
      resolve("I have completed the ReactJS Training");
    } else {
      reject("I have not completed the React Training");
    }
  }, 3000);
});

// console.log(leannJs);
// Handle Promise or Consume the promise

leannJs.then((res) => console.log(res)).catch((err) => console.log(err));
