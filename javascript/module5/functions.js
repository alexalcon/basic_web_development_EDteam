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

console.log("\n");

/**
 * ━━━━━━━━━━━━━━━━━━━━━
 * First Class Functions
 * ━━━━━━━━━━━━━━━━━━━━━
 * 
 * In JavaScript, functions are first-class citizens. This means that functions can be:
 *
 *  - Assigned to variable (because fundamental data types are defined as 
 *    first-class citizens stored in variables).
 *  - Passed as arguments to other functions.
 *  - Returned from other functions.
 * 
 * This allows for higher-order functions and functional programming techniques.
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("First Class Functions in JavaScript");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// 1. assigning functions to variables
const stopRobot = function() {
    console.log("Robot stopped");
};

stopRobot(); // output: Robot stopped

// assigning with arrow function
const rotateRobot = (angle) => {
    console.log("Robot rotating " + angle + " degrees");
};

rotateRobot(90); // output: Robot rotating 90 degrees

console.log("\n");

// 2. passing functions as arguments (higher-order functions)
function executeRobotCommand(command) {
    console.log("Executing command...");
    command(); // call the function passed as argument
    console.log("Command completed");
}

function pickUpObject() {
    console.log("Gripper activated - Object picked up");
}

function releaseObject() {
    console.log("Gripper released - Object dropped");
}

executeRobotCommand(pickUpObject);
console.log("\n");
executeRobotCommand(releaseObject);

console.log("\n");

// 3. returning functions from other functions
function createSensorReader(sensor_type) {
    if (sensor_type === "temperature") {
        return function() {
            return "Temperature: " + (20 + Math.random() * 10).toFixed(2) + "°C";
        };
    } else if (sensor_type === "distance") {
        return function() {
            return "Distance: " + (Math.random() * 100).toFixed(2) + " cm";
        };
    }
}

const tempSensor = createSensorReader("temperature");
const distSensor = createSensorReader("distance");  

console.log(tempSensor()); // output: Temperature: XX.XX°C
console.log(distSensor()); // output: Distance: XX.XX cm

console.log("\n");

// 4. storing functions in arrays
const robotActions = [
    function() { console.log("Scanning environment"); },
    function() { console.log("Mapping obstacles"); },
    function() { console.log("Planning route"); },
    function() { console.log("Executing navigation"); }
];

console.log("Robot autonomous sequence:");
for (let i = 0; i < robotActions.length; i++) {
    robotActions[i]();
}

console.log("\n");

// 5. functions in objects (methods)
const robot = {
    name: "R2-D2",
    battery: 85,
    status: function() {
        console.log(this.name + " battery: " + this.battery + "%");
    },
    charge: function(amount) {
        this.battery = Math.min(100, this.battery + amount);
        console.log("Charged " + amount + "%. Current battery: " + this.battery + "%");
    }
};

robot.status();  // Output: R2-D2 battery: 85%
robot.charge(10); // Output: Charged 10%. Current battery: 95%
robot.status();  // Output: R2-D2 battery: 95%