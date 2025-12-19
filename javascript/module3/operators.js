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

/**
 * ━━━━━━━━━━━━━━━━━━━━
 * Comparison Operators
 * ━━━━━━━━━━━━━━━━━━━━
 * 
 * Comparison operators are used to compare two values 
 * and return a boolean result (true or false).
 */

console.log("━━━━━━━━━━━━━━━━━━━━");
console.log("Comparison Operators");
console.log("━━━━━━━━━━━━━━━━━━━━");

let x = 10;
let y = 20;

console.log("x = 10, y = 20");
console.log("──────────────");
console.log("x == y: " + (x == y));   // equal to
console.log("x != y: " + (x != y));   // not equal to
console.log("x > y: " + (x > y));     // greater than
console.log("x < y: " + (x < y));     // less than
console.log("x >= y: " + (x >= y));   // greater than or equal to
console.log("x <= y: " + (x <= y));   // less than or equal to

// <, >, <=, >= are used with numbers (thus they are not very useful
// with strings and are called arithmetic comparison operators)

/**
 * Equality operators are of two types:
 *
 * - Loose equality (==) which performs type coercion
 *      - JS compares values after converting them to a common type
 * - Strict equality (===) which does not perform type coercion
 *     - JS compares both value and type without conversion 
 */
console.log("\nA nounce on equality operators:");
let num = 5;   // number
let str = "5"; // string

console.log("num (5) == str ('5'): " + (num == str));   // true (loose equality)
console.log("num (5) === str ('5'): " + (num === str)); // false (strict equality)

/**
 * Inequality operators are also of two types:
 *
 * - Loose inequality (!=) which performs type coercion
 *      - JS compares values after converting them to a common type
 * - Strict inequality (!==) which does not perform type coercion
 *     - JS compares both value and type without conversion 
 */
console.log("\nA nuance on inequality operators:");
let num3 = 5;    // number
let str3 = "5";  // string

console.log("num3 (5) != str3 ('5'): " + (num3 != str3));   // false (loose inequality)
console.log("num3 (5) !== str3 ('5'): " + (num3 !== str3)); // true (strict inequality)

/**
 * ━━━━━━━━━━━━━━━━━
 * Logical Operators
 * ━━━━━━━━━━━━━━━━━
 * 
 * Logical operators are used to combine multiple boolean expressions
 * and return a single boolean result. Just remember mathematical elementary 
 * logic, i.e., propostional logic.
 * 
 * && (logical AND), || (logical OR), ! (logical NOT) 
 * 
 * This is an important topic on programming logic.
 */

console.log("━━━━━━━━━━━━━━━━━");
console.log("Logical Operators");
console.log("━━━━━━━━━━━━━━━━━");

// logical AND (&&)
// returns true only if both operands are true
console.log("\nLogical AND (&&):");
console.log("true && true: " + (true && true));     // true
console.log("true && false: " + (true && false));   // false
console.log("false && true: " + (false && true));   // false
console.log("false && false: " + (false && false)); // false

let hasLicense = true;
let hasInsurance = true;
console.log("Can drive (hasLicense && hasInsurance): " + (hasLicense && hasInsurance)); // true

// logical OR (||)
// returns true if at least one operand is true
console.log("\nLogical OR (||):");
console.log("true || true: " + (true || true));     // true
console.log("true || false: " + (true || false));   // true
console.log("false || true: " + (false || true));   // true
console.log("false || false: " + (false || false)); // false

let isWeekend = false;
let isHoliday = true;
console.log("Can rest (isWeekend || isHoliday): " + (isWeekend || isHoliday)); // true

// logical NOT (!)
// returns the opposite boolean value
console.log("\nLogical NOT (!):");
console.log("!true: " + (!true));   // false
console.log("!false: " + (!false)); // true

let isRaining = false;
console.log("Is sunny (!isRaining): " + (!isRaining)); // true