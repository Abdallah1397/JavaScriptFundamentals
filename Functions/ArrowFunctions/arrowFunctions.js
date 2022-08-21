// Why Arrow Functions ?
// According to the pervious explanations in the WhyArrowFunctions File
// Arrow function solve the problem when we need to use this in other method scope.
// Arrow function short and concise
// More Readable
// Not has own this

function Person() {
  this.age = 0;
  setInterval(()=> {
    console.log(this.age++);
  }, 200);
}
const p1 = new Person();
console.log(p1);
