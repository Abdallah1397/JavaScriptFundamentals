const propmt=require("prompt-sync")();

const sum =(a,b)=>a+b;
const num1=parseInt(propmt("Enter num1"));
const num2=parseInt(propmt("Enter num2"));
console.log(sum(num1,num2));