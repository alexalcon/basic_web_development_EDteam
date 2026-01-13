/**
 * Functions in JavaScript
 * 
 * A function is a block of code designed to perform a particular task. It 
 * is executed when "something" invokes it (calls it).
 */

/**
 * ━━━━━━━━━━━━━━━━━━━━
 * Bsic Function Syntax
 * ━━━━━━━━━━━━━━━━━━━━
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Functions Syntax in JavaScript");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// basic function declaration - robot initialization
function initializeRobot() {
    console.log("Robot initialized and ready for operation");
}

// calling the function
initializeRobot(); // output: Robot initialized and ready for operation

console.log("\n");

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Function Parameters and Return Values
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Function Parameters and Return Values");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// function with parameters - robot movement
function moveRobot(direction) {
    console.log("Robot moving " + direction);
}

// calling function with arguments
moveRobot("forward"); // output: Robot moving forward
moveRobot("left");    // output: Robot moving left
moveRobot("right");   // output: Robot moving right

console.log("\n");

// function with return value - calculate distance traveled
function calculateDistance(speed, time) {
    return speed * time; // assuming constant velocity
}

// calling function and storing result
let distanceTraveled = calculateDistance(5, 10);
console.log("Distance traveled: " + distanceTraveled + " meters"); // Output: Distance traveled: 50 meters

// using function result directly
console.log("New distance: " + calculateDistance(3, 8) + " meters"); // Output: New distance: 24 meters

console.log("\n");

// function to check battery level
function checkBatteryLevel(battery_percentage) {
    if (battery_percentage < 20) {
        return "Low battery - Return to charging station";
    } else if (battery_percentage < 50) {
        return "Battery moderate - Continue mission";
    } else {
        return "Battery optimal - Full operation mode";
    }
}

// using the battery check function
let batteryStatus = checkBatteryLevel(15);
console.log(batteryStatus); // Output: Low battery - Return to charging station
console.log(checkBatteryLevel(75)); // Output: Battery optimal - Full operation mode

// remember this type coersion in JavaScript: string + number = string concatenation
// thus, if a parameter is expected to be a number, ensure to pass a number type
// or if it is a number type it will be coerced to string during concatenation