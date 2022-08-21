// Functions
// Is a block of code designed to perform a particular task
// Function parameters are listed inside the parentheses () in the function definition.
// Function arguments are the values received by the function when it is invoked.
// Regular functions used in :
// Object methods
// Callback functions with dynamic context
// When it makes your code less readable

function Sum(x,y){
    console.log(x+y);
}
// to call Sum function we should invoke it 
Sum(20,30);

// if we need to make the function invoke it self:
(function Add(){
    console.log(5+4)
})();

