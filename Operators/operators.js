// Operators 
// Divided into various types (Logical, Arthmitic, Comparison, bitwise, Assignment )

// 1- Logical 
// Logical AND (&&), Logical OR (||), Logical Not (!)
let x=2;
if(x ==2 && typeof(x)=="number" ){
    console.log("X is a number");
}


// 2- bitwise
// It's a bit operators work on 32 bit numbers.
// (and &) , (or |) ,( xor ^) , (not ~) , (shift left <<) , (shift right >>) , (zero fill out shift <<<) 
let a=5,b=6; 
console.log(a&b); // 0110 & 0101 = 0100 => 4


// 3-Arthmitic 
// (Addition +) , (Subtraction - ), (Multiplication *) , (Exponentiation **) ,( / Division) , (% Modulus) ,
// (Increment ++) , (Decrement --) 
let q=5,w=8;
console.log(q+w);

// 4- Comparison
// (equal to ==) , (=== equal value and type) , (!= not equal) , (!== not equal value or not equal type)
// ( > greater than ), (< less than) , (>= greater or equal) , ( <= less or equal ) , ( ? ternary operator)
if(x ===2){
    console.log("X is a number");
}

// 5-Assignment
// assign values to JavaScript variables.
// = , += , -= , *= , /= , %= , **=
console.log(b**=x) // b=b**x