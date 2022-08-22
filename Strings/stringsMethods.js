// Strings methods help you to work with strings
// Javascript treats primitive values as objects when executing methods and properties.
// Note when we pass negative values we will count from the end of the string.

// 1- Length
let text = "ABCDE FGHIJ KLMNOP QRSTU VWXYZ";
console.log(text.length); // Logs 30

// 2-Extracting String Parts
// There are 3 extracting methods in js.
//  2-a Slice(start,end)
console.log(text.slice(7, 13)); // logs "GHIJ K"
//  2-b Substring(start,end) is similar to slice but the negative values represented as 0
console.log(text.substring(-5, -13)); // logs ""
//  2-c substr(start,length)
console.log(text.substr(5, 5)); // logs " FGHI"


// 3-Replacing 
// Replacing the first match only.
// we can use regular experations with it like case insenitive /abcde/i 
console.log(text.replace("ABCDE","Hello")); // logs "Hello FGHIJ KLMNOP QRSTU VWXYZ"


// 4- Converting to Upper and Lower Case
console.log(text.toLowerCase());
// console.log(text.toUpperCase()); 

// 5- Concating
console.log(text.concat(" Hello ")); // logs  ABCDE FGHIJ KLMNOP QRSTU VWXYZ Hello 

// 6- Trim
// Removing whitespaces from the both sides
console.log(text.trim());


// 7- Extracting String Characters
// There are 3 methods for extracting string characters:
//  7-a charAt(position)
console.log(text.charAt(0)); // logs A
//  7-b charCodeAt(position)
console.log(text.charCodeAt(0)); // logs 65 unicode
//  7-c Property access [ ]
console.log(text[0]); // logs A


// 8- Converting String to an array
// Split()
console.log(text.split(""));
console.log(text.split("|"));
console.log(text.split(","));