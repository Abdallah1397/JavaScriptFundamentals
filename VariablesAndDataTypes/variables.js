// Variables
// are containers for storing data.
// var, let and const

// *******************************************************************************************************************************
//                         |        var              |             let                    |                    const
// *******************************************************************************************************************************
// Scope                   |      Function           |             Block                  |                    Block
//                         |                         |                                    |
// Redeclar                |      Can be             |             Can't                  |                    Can't
//                         |                         |                                    |
// Reassign                |      Can be             |             Can be                 |                    Can't
//                         |                         |                                    |
// Acessing variable       |                         |                                    |                   
// before it's defiend     |      undefiend          |         Reference Error            |                 Refference Error  
//                         |                         |                                    | 
// Create properties in    |                         |                                    |
// window object           |       Create            |             Doesn't                |                     Doesn't
//                         |                         |                                    |
// *******************************************************************************************************************************

// Examples 
// 1- redclaration
var x=2;
var x=3;
console.log(x); // it will be 3 because var support redeclaration

let y=2;
// let y=3; can not redeclar alse the same thing in const

// 2- Reassign 
var g=3;
g=4;
console.log(g); // it will be 4 beacuse var support reassign, the same in let

const f=2;
// f=9; // will return error 


// 3-Acessing variable before it's defiend
console.log(w);  // print undefiend
var w=5; 

// console.log(z);  //  reference error
let z=5; 