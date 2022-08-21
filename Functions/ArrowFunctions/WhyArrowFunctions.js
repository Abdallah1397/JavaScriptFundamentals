// Before delving into the arrow functions we will a fast clarifications about regular functions.
// In Regular functions each function has own this

// Example 
// in this ex we facing an error because this.age in callback function in the setInterval has own this keyword,
// so we can't call this.age 
// function RegularFunction(){
//     this.age=50;
//     setInterval(function(){
//         this.age++;
//         console.log(this.age);
//     },10000);
// }
// let user =new RegularFunction();
// console.log(user);

// To solve this problem we will use either the .bind or assign this function to another variable
// .bind to stop use own this 
function RegularFunction(){
    this.age=50;
    setInterval(function(){
        this.age++;
        console.log(this.age);
    }.bind(this),10000);
}
let user1 =new RegularFunction();
console.log(user1);

// assign this keyword to another variable.
function RegularFunction_1(){
    this.age=50;
    let that=this;
    setInterval(function(){
        that.age++;
        console.log(that.age);
    },1000);
}

let user2 =new RegularFunction_1();
console.log(user2);

// Note:
// Regular functions used in :
// Object methods
// Callback functions with dynamic context
// When it makes your code less readable
