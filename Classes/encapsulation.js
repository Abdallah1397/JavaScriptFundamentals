import {Person} from './class.js';
// Encapsulations
// Avoid direct access and illegal access.
// Reduce human errors.
// Make the app more felxbile and readable.
// we can declare private properties or methods by using # or _ 
// Getters and Setters are used to protect our data and allow to contorl how important variable are accessed and updated in the code.
class Empolyee extends Person{
     #salary;
     constructor(id,name,age,currentSalary){
        super(id,name,age);
        this.#salary=currentSalary;
     }
     getTheSalary(){
        return this.#salary;
     }
     setTheSalary(newSalary){
         this.#salary=newSalary;
     }
}
// Create a new instance from the employee
const Empolyee1=new Empolyee(1,"Alice",24,5000);
// We will get the salary by using get method
const userSalary=Empolyee1.getTheSalary();
// We will check the salary
if(userSalary <6000){
   Empolyee1.setTheSalary(8000);
}
console.log(Empolyee1.getTheSalary());