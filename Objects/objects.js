// Definig Object
// 1- Object Literal
// if we want to make the object properties changes based on its object we should use the traditional function
// to have the ability to work with "This" keyword.
let obj = {
  firstName: "Abdallah",
  lastName: "Mahmoud",
  getFullName: function () {
    return `My full name is ${this.firstName} ${this.lastName}`;
  },
};
// if we call getFullName method without braces the output will be the code of this method.
// console.log(obj.getFullName);
console.log(obj.getFullName());

// 2- With #new keyword
let obj2 = new Object();
obj2.firstName = "Mahmoud";
obj2.lastName = "Attallah";
obj2.getFullName = () => `My Father Name is ${obj2.firstName} ${obj2.lastName}`;
console.log(obj2.getFullName());

// 3- With object.create
// method creates a new object, using an existing object as the prototype of the newly created object.
let obj3 = Object.create(obj);
obj3.firstName = "Abdelwahab";
obj3.lastName = "Attallah";
console.log(obj3.getFullName());

// 4- With Object.assign
// method copies all enumerable own properties from one or more source objects to a target object.
// it returns the modified target object.
let obj4 = {
  firstName: "Abdelrahman",
};
Object.assign(obj4, {
  lastName: "Mahmoud",
  getFullName: function () {
    return `My full name is ${this.firstName} ${this.lastName}`;
  },
});
console.log(obj4.getFullName());


// We can delete any property from any object by use delete keyword
delete obj4.lastName;
console.log(obj4.getFullName());

