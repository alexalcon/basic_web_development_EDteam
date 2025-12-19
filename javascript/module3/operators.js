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

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Unary and Ternary Operators
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * Unary operators operate on a single operand to produce a result.
 * Ternary operators operate on three operands.
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Unary and Ternary Operators");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// ━━━━━━━━━━━━━━━
// Unary Operators
// ━━━━━━━━━━━━━━━

console.log("\nUnary Operators:");

// increment (++)
let active_robots = 5;
console.log("active_robots: " + active_robots);       // 5
console.log("active_robots++: " + active_robots++);   // 5 (post-increment: returns then increments)
console.log("active_robots: " + active_robots);       // 6
console.log("++active_robots: " + (++active_robots)); // 7 (pre-increment: increments then returns)
console.log("active_robots: " + active_robots);       // 7

// decrement (--)
let battery_percentage = 10;
console.log("\nbattery_percentage: " + battery_percentage);     // 10
console.log("battery_percentage--: " + battery_percentage--);   // 10 (post-decrement: returns then decrements)
console.log("battery_percentage: " + battery_percentage);       // 9
console.log("--battery_percentage: " + (--battery_percentage)); // 8 (pre-decrement: decrements then returns)
console.log("battery_percentage: " + battery_percentage);       // 8

// unary plus (+)
// converts operand to a number
console.log("\nUnary plus (+):");
let sensor_reading = "42";
console.log("typeof sensor_reading: " + typeof sensor_reading);     // string
console.log("+sensor_reading: " + (+sensor_reading));               // 42
console.log("typeof +sensor_reading: " + typeof (+sensor_reading)); // number

// unary negation (-)
// converts operand to a number and negates it
console.log("\nUnary negation (-):");
let motor_speed = 100;
console.log("-motor_speed: " + (-motor_speed));  // -100
let temperature_offset = "50";
console.log("-temperature_offset: " + (-temperature_offset)); // -50

// typeof operator
// returns the type of the operand as a string
console.log("\ntypeof operator:");
console.log("typeof 42: " + typeof 42);               // number
console.log("typeof 'ROS2': " + typeof 'ROS2');       // string
console.log("typeof true: " + typeof true);           // boolean
console.log("typeof undefined: " + typeof undefined); // undefined

// ━━━━━━━━━━━━━━━━
// Ternary Operator
// ━━━━━━━━━━━━━━━━

console.log("\nTernary Operator (? :):");
console.log("Syntax: condition ? valueIfTrue : valueIfFalse");

// basic example
let robot_battery = 18;
let battery_status = robot_battery >= 18 ? "Battery OK" : "Battery Low - Charge Required";
console.log("\nrobot_battery: " + robot_battery);
console.log("battery_status: " + battery_status); // output: Battery OK

// another example
let obstacle_distance = 85;
let proximity_alert = obstacle_distance >= 90 ? "Clear" : obstacle_distance >= 80 ? "Caution" : obstacle_distance >= 70 ? "Warning" : "Stop";
console.log("\nobstacle_distance: " + obstacle_distance);
console.log("proximity_alert: " + proximity_alert); // output: Caution

// practical example
let cpu_temperature = 25;
let thermal_status = cpu_temperature > 30 ? "Overheating" : cpu_temperature > 20 ? "Normal" : "Cool";
console.log("\ncpu_temperature: " + cpu_temperature);
console.log("thermal_status: " + thermal_status); // output: Normal

// using ternary with expressions
let pending_tasks = 3;
let dashboard_message = pending_tasks > 0 ? `Robot has ${pending_tasks} pending tasks` : "Robot idle - No pending tasks";
console.log("\n" + dashboard_message); // output: Robot has 3 pending tasks

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Type Coercion with Operators
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * Type coercion is the automatic or implicit conversion of values 
 * from one data type to another. This often occurs when using operators 
 * with mixed data types.
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Type Coercion with Operators");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// string + number = string concatenation
console.log("\nString + Number:");
let robot_id = "ROBOT-";
let robot_number = 42;
console.log("robot_id + robot_number: " + (robot_id + robot_number)); // "ROBOT-42"
console.log("typeof: " + typeof(robot_id + robot_number)); // string

// number + string = string concatenation
console.log("\nNumber + String:");
let sensor_count = 8;
let sensor_label = " sensors active";
console.log("sensor_count + sensor_label: " + (sensor_count + sensor_label)); // "8 sensors active"

// string - number = numeric subtraction (string coerced to number)
console.log("\nString - Number:");
let max_speed = "100";
let speed_reduction = 20;
console.log("max_speed - speed_reduction: " + (max_speed - speed_reduction)); // 80
console.log("typeof: " + typeof(max_speed - speed_reduction)); // number

// string * number = numeric multiplication
console.log("\nString * Number:");
let battery_cells = "4";
let voltage_per_cell = 3.7;
console.log("battery_cells * voltage_per_cell: " + (battery_cells * voltage_per_cell)); // 14.8

// boolean to number coercion
console.log("\nBoolean to Number:");
let is_connected = true;
let connection_multiplier = 100;
console.log("is_connected * connection_multiplier: " + (is_connected * connection_multiplier)); // 100
let is_offline = false;
console.log("is_offline * connection_multiplier: " + (is_offline * connection_multiplier)); // 0

// implicit boolean coercion in logical operations
console.log("\nImplicit Boolean Coercion:");
let motor_status = ""; // empty string is falsy
let default_status = "Standby";
console.log("motor_status || default_status: " + (motor_status || default_status)); // "Standby"

let wifi_signal = 0; // 0 is falsy
let backup_signal = 4;
console.log("wifi_signal || backup_signal: " + (wifi_signal || backup_signal)); // 4

// truthy and falsy values
console.log("\nTruthy and Falsy Values:");
console.log("Boolean(''): " + Boolean("")); // false (empty string)
console.log("Boolean('connected'): " + Boolean("connected")); // true
console.log("Boolean(0): " + Boolean(0)); // false
console.log("Boolean(42): " + Boolean(42)); // true
console.log("Boolean(null): " + Boolean(null)); // false
console.log("Boolean(undefined): " + Boolean(undefined)); // false

// practical dashboard example
console.log("\nPractical Dashboard Example:");
let robot_name = ""; // no name assigned
let display_name = robot_name || "Unnamed Robot";
console.log("Display name: " + display_name); // "Unnamed Robot"

let error_count = 0;
let status_indicator = error_count > 0 ? "Errors: " + error_count : "System OK";
console.log("Status: " + status_indicator); // "System OK"