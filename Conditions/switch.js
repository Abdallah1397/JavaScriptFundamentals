// Switch
// Is used to perform different actions based on different conditions.
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

// Calculator function 
function Calculator(x, y, arithmeticOperator) {
    switch (arithmeticOperator) {
      case "+":
        return `Result of x ${arithmeticOperator} y = ${x+y}`;
      case "-":
        return `Result of x ${arithmeticOperator} y = ${x-y}`;
      case "*":
        return `Result of x ${arithmeticOperator} y = ${x*y}`;
      case "/":
        return `Result of x ${arithmeticOperator} y = ${x/y}`;
      case "**":
        return `Result of x ${arithmeticOperator} y = ${x**y}`;
      case "%":
        return `Result of x ${arithmeticOperator} y = ${x%y}`;
      default:
          return "Please enter a valid arithemtic operator!";
    }
  }
  
  console.log(Calculator(5,4,'+'));
  console.log(Calculator(5,4,'-'));
  console.log(Calculator(5,4,'*'));
  console.log(Calculator(5,4,'/'));
  console.log(Calculator(5,4,'**'));
  console.log(Calculator(5,4,'%'));
  console.log(Calculator(5,4,'+5'));