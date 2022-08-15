import {Person} from './class.js';

// Inhertance to make our code reusable and to use properties and methods of parents.
class Student extends Person{
    constructor(id,name,age,educationLevel){
        // inherate parent properties
        super(id,name,age);
        this.educationLevel=educationLevel;
    }
}

const Student1=new Student(1,"Bakr",27,"A+");
Student1.getThePersonInformation();