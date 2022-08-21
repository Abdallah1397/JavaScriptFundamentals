// This keyword
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Alone, this refers to the global object.
console.log(this);

// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
function x(){
    console.log(this); // logs Undefiend.
}

// In an object method, this refers to the object.
const obj={
    name:"object1",
    getData(){
        console.log(this);
    }
}
obj.getData(); // logs obj 