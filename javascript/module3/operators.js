/**
 * ━━━━━━━━━━━━━━━━━━━━
 * Assignment Operators
 * ━━━━━━━━━━━━━━━━━━━━
 */

console.log("━━━━━━━━━━━━━━━━━━━━");
console.log("Assignment Operators");
console.log("━━━━━━━━━━━━━━━━━━━━");

let a = 10; // assignment operator (=)
console.log(a);

a += 5; // addition assignment operator (+=)
console.log(a);

a -= 3; // subtraction assignment operator (-=)
console.log(a);

a *= 2; // multiplication assignment operator (*=)
console.log(a);

a /= 4; // division assignment operator (/=)
console.log(a);

a %= 3; // modulus assignment operator (%=)
console.log(a);

let b = 5;
let c = 3;
b**=c; // exponentiation assignment operator (**=)
       // not used very often as a compund assignment
console.log(b);

/**
 * ━━━━━━━━━━━━━━━━━━━━
 * Arithmetic Operators
 * ━━━━━━━━━━━━━━━━━━━━
 * 
 * Arithmetic operators are used to perform basic arithmetic 
 * mathematical operations on numeric values.
 * 
 * +, -, *, / %
 */


console.log("━━━━━━━━━━━━━━━━━━━━");
console.log("Arithmetic Operators");
console.log("━━━━━━━━━━━━━━━━━━━━");

let num1 = 15;
let num2 = 4;

console.log("Addition: " + (num1 + num2));        // addition
console.log("Subtraction: " + (num1 - num2));     // subtraction
console.log("Multiplication: " + (num1 * num2));  // multiplication
console.log("Division: " + (num1 / num2));        // division
console.log("Modulus: " + (num1 % num2));         // modulus
console.log("Exponentiation: " + (num1 ** num2)); // exponentiation

/**
 * ━━━━━━━━━━━━━━━━━━━━━━
 * Concatenation Operator
 * ━━━━━━━━━━━━━━━━━━━━━━
 * 
 * The concatenation operator (+) is used to combine two or more strings together.
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━");
console.log("Concatenation Operator");
console.log("━━━━━━━━━━━━━━━━━━━━━━");

let str1 = "Hello, ";
let str2 = "world!";
let greeting = str1 + str2; // concatenation
console.log(greeting);      // output: Hello, world!

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Template Strings (Template Literals)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * Template strings allow for easier string interpolation and multi-line strings.
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Template Strings (Template Literals)");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

let name = "Alex Alcón";
let age = 29;

// using template literals with backticks (` `)
let introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction); // output: My name is Alex Alcón and I am 29 years old.