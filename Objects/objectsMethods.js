let obj1={
    firstName: "Abdallah",
    lastName: "Mahmoud",
}
let obj={
    firstName: "Abdallah",
    lastName: "Mahmoud",
}
// 1- Object.entires()
// method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log(Object.entries(obj));

// 2-Object.freeze
// method freezes an object. 
// Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
Object.freeze(obj1);
// the first name will not be changed
obj1.firstName="Asd"; 

// 3-getOwnPropertyNames
//  method returns an array of all properties including enumerable.
console.log(Object.getOwnPropertyNames(obj)); 

// 4-hasOwn()
// static method returns true if the specified object has the indicated property as its own property.
// If the property is inherited, or does not exist, the method returns false.
console.log(Object.hasOwn(obj,'firstName'));

// 5-hasOwnProperty
// method returns a boolean indicating whether the object has the specified property 
// as its own property (as opposed to inheriting it).
console.log(obj.hasOwnProperty("firstName"));

// 6-object.keys()
// method returns an array of a given object's own enumerable property names, 
// iterated in the same order that a normal loop would.
console.log(Object.keys(obj));

let person = {
    name: 'gopal'
 };
 person.age = '21';
 person['country'] = 'India';
 Object.defineProperty(person, 'salary',{
    value : '80,000$',
    enumerable: false
 })
// 7-Object.values()
//  method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
console.log(Object.getOwnPropertyNames(person));
