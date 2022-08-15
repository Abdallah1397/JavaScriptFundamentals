// Function Constructor or Object Constructor
// A constructor is a special function that creates and initalizes an object instance of a class.
// A constructor gets called when an object is created using the "new" keyword.

// in ES6 we will use Class instead of function constructor.
// note : this keyword refers to the newly created object.
function Person(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age;
}

// create object instance 
const person1=new Person(1,"Abdallah",25);
console.log(person1);

// show the instanceof
console.log(person1 instanceof Person);