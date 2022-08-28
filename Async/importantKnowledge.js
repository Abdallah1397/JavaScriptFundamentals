
// Call stack :
// -------------
// Mechanism to make interpreter track your calls.
// when you call a function its added to the stack.
// when function executed its removed from the stack.
// Interpreter continue calling from the last point reached.
// Call stack detect web api and leave it to the browser to handle it.


// Web api :
// -----------
// A Web API is an application programming interface for the Web.
// Available methods in environment in which javascript is running.
// When complete it add the callbacks to the callback queue


// Event Loop:
// -------------
// Wait the call stack to finish
// get callbacks from callback queue
// add callback to callback queue


// Callback queue:
// -------------------
// contain all web api methods


const add=(a,b)=>{
    console.log(a+b);                                                           
}
const subtract=(a,b)=>{
    console.log(a-b);
}

add(5,4);
window.setTimeout(()=>console.log("Hello,"),0);
subtract(5,1);

// Output
// ------------------
// 9
// 4
// Hello
// ------------------
// Let's deep on

// 1- Call stack track all methods except web apis methods.
// ------------------------------------------------------
// Call Stack
// --------------------------
// 1- add Function
// --------------------------
// 2- subtract Function
// --------------------------

// 2- Event loops wait the call stack to end and get callbacks from the callback queue to call stack.
// --------------------------
// Callback queue
// --------------------------
// 1- window.setTimeout
// --------------------------
