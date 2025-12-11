/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Fundamental Data Types in JavaScript
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * JavaScript has several fundamental data types (not many like some other languages) 
 * that are used to represent different kinds of values. Here are the primary data types:
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Fundamental Data Types in JavaScript");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// ──────
// number
// ──────
// represents both integer and floating-point numbers
// in javascript, there is no separate type for integers and floats 
console.log(typeof 42);
console.log(typeof 42.5);

// ──────
// string
// ──────
// some languages have a separate char type for single characters
// in javascript, there is no separate char type; single characters 
// are also represented as strings
console.log(typeof "Alex Alcón");
console.log(typeof 'Alex Alcón');
console.log(typeof 'A');
console.log(typeof ' ');
console.log(typeof '');

// ───────
// boolean
// ───────
// represents logical entities and can have two values: true and false
// false and true are keywords in javascript
console.log(typeof true);
console.log(typeof false);

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Data Object Collections (object data types) 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * Objects are data collections that can store multiple values and more complex data structures. 
 * They have an identifier and a value (like key-value pairs in Python).
 * 
 * (5) ['a', 'b', 'c', 'd', 'e']
 *      0: "a"
 *      1: "b"
 *      2: "c"
 *      3: "d"
 *      4: "e"
 *      length: 5
 * 
 * Array indices are the identifiers for each element in the array, starting from 0. And each 
 * element (index) has a corresponding value.
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Data Object Collections (object data types)");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// array (data collection)
console.log(typeof ["a", "b", "c", "d", "e"]);    
console.log(["a", "b", "c", "d", "e"]);    

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━
 * Native JavaScript Objects
 * ━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * - Identifiers are attributes or properties that are used to name and access values 
 *   within data collections.
 * - Values are the actual data stored within the data collections.
 * 
 * The structure (syntax) of data object collections in JavaScript is based on 
 * key-value pairs as illustrated below:
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Native JavaScript Objects");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

const example_object = {
    key1: "a",
    key2: "b",
    key3: "c",
};

console.log(typeof example_object);
console.log(example_object);

/**
 * ━━━━
 * NULL
 * ━━━━
 * 
 * This data type is an object type. This is a known quirk in JavaScript, because
 * it does not follow the object data type conventions or concept defined above. 
 */

console.log("━━━━");
console.log("NULL");
console.log("━━━━");

console.log(typeof null);

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━
 * UNDEFINED
 * ━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * This data type indicates that a variable has been declared but has not 
 * yet been assigned a value.
 */

console.log("━━━━━━━━━");
console.log("UNDEFINED");
console.log("━━━━━━━━━");

console.log(typeof undefined);

/**
 * ━━━━━━━━━━━━━━━━━━━━
 * JavaScript Variables   
 * ━━━━━━━━━━━━━━━━━━━━
 * 
 * Variables are containers for storing data values. In JavaScript, variables can be declared 
 * using three keywords: var, let, and const.
 * 
 * JavaScript is a dynamically typed language, which means that you do not need to specify 
 * the data type of a variable when you declare it. The data type is determined automatically 
 * based on the value assigned to the variable, which is also applied to reassignment of 
 * variable's data values.
 */

console.log("━━━━━━━━━━━━━━━━━━━━");
console.log("JavaScript Variables");
console.log("━━━━━━━━━━━━━━━━━━━━");

// variable declaration
var x;
console.log(x);


// variable declaration and assignment (or initialization)
let y = 10;
console.log(y);
console.log(typeof y);

// reassignment
y = true;
console.log(typeof y); 

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Assignment: Value vs. Reference
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * How a variable is assigned to another depends on whether the stored value
 * is a primitive or an object.
 * 
 * ── Primitive types (assigned by VALUE) ──────────────────────────────────
 * Primitive types: number, string, boolean, null, undefined, bigint, symbol.
 * When you assign a primitive variable to another variable, JavaScript copies
 * the actual VALUE into a new, independent memory slot. Both variables are
 * completely independent: modifying one has no effect on the other.
 * 
 * ── Object types (assigned by REFERENCE) ─────────────────────────────────
 * Object types: objects, arrays, functions.
 * When you assign an object variable to another variable, JavaScript copies
 * the REFERENCE (memory address) — not the data itself. Both variables point
 * to the exact same object in memory. Mutating the object through one variable
 * is immediately visible through the other.
 * 
 * Quick mental model:
 * ┌─────────────────┬──────────────────────┬──────────────────────────────┐
 * │ Type            │ Assignment copies    │ Mutation visible elsewhere?  │
 * ├─────────────────┼──────────────────────┼──────────────────────────────┤
 * │ Primitive       │ The VALUE            │ No  – variables are isolated │
 * │ Object / Array  │ The REFERENCE        │ Yes – they share one object  │
 * └─────────────────┴──────────────────────┴──────────────────────────────┘
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Assignment: Value vs. Reference");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// ───────────────────────────────────────────────────
// Primitives – assigned by VALUE (independent copies)
// ───────────────────────────────────────────────────
// Assigning a1 to a2 creates a completely separate copy of the string.
// Reassigning a1 later does not affect a2 in any way.

let a1 = "var a1";
let a2 = a1;      // a2 receives its own copy of the string "var a1"

a1 = "var a1 modified"; // only a1 is updated; a2 still holds its own copy

console.log(a1); // "var a1 modified"
console.log(a2); // "var a1"  ← unaffected: primitives are independent copies

// ────────────────────────────────────────────────────────
// Objects / Arrays – assigned by REFERENCE (shared object)
// ────────────────────────────────────────────────────────
// Assigning obj1 to obj2 copies the reference (memory address), not the data.
// Both variables point to the same object; mutating through one is visible in the other.

let obj1 = { sensor: "lidar", range_m: 10 };
let obj2 = obj1; // obj2 holds a reference to the SAME object as obj1

console.log("Same object in memory?", obj1 === obj2); // true

obj1.range_m = 25; // mutate through obj1

console.log(obj1.range_m); // 25
console.log(obj2.range_m); // 25 ← also updated: both variables share one object

/**
 * ━━━━━━━━━
 * Constants
 * ━━━━━━━━━
 * 
 * Constants are variables whose values cannot be changed once they are assigned.
 */

console.log("━━━━━━━━━");
console.log("Constants");
console.log("━━━━━━━━━");

const PI = 3.14159;
console.log(PI);
console.log(typeof PI);