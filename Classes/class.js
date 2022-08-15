// ES6 introduced JS Classes.
// Classes are the templates for JavaScript Objects.
// Static class methods/properties are defined on the class itself
export class Person {
    static counter=0;
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
        Person.counter++;
    }
    getThePersonInformation(){
        console.log(`Hello ${this.name} your id is ${this.id} and your age is ${this.age} ${Person.counter}`);
    }

}

// create new instances
const person1=new Person(1,"Abdallah",25);
person1.getThePersonInformation();
const person2=new Person(2,"Mahmoud",63);
person1.getThePersonInformation();
const person3=new Person(3,"Abdelwahab",23);
person1.getThePersonInformation();