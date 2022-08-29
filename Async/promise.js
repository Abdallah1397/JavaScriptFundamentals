import axios from "axios";
// Promise:
// Is a javascript object that links producing code with consuming code.
// Producing code: is code that can take some time.
// Consuming code: is code that must wait for the result.
// Promise avoid callback hell.
// It produces a value after an asynchronous (aka, async) operation completes successfully,
// or an error if it does not complete successfully due to time out, network error, and so on.

// Promise status:
// Pending   :  Initial state.
// Fulfilled :  Completed successfully.
// Rejected  :  Failed.

// Promise gibe us ability to make a promise without url.
let promise = new Promise((reslove, reject) => {
  let flag = true;
  if (flag) {
    reslove("Flag is True");
  } else {
    reject("Flag is false");
  }
});
promise.then((item) => {
  console.log(item);
});

// make a promise with axios third party
let getTheData = (url) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => err);
getTheData("https://jsonplaceholder.typicode.com/users").then((res) =>
  console.log(res)
);
