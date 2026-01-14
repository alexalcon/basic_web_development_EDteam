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

console.log("\n");

/**
 * ━━━━━━━━━━━━━━━━━━━
 * Anonymous Functions
 * ━━━━━━━━━━━━━━━━━━━
 * 
 * Anonymous functions are functions that are defined without a name.
 * They are often used as arguments to other functions or as immediately
 * invoked function expressions (IIFE).
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Anonymous Functions in JavaScript");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// 1. anonymous function assigned to a variable
const activateShield = function() {
    console.log("Force field shield activated");
};

activateShield(); // output: Force field shield activated

console.log("\n");

// 2. anonymous function as callback
function performRobotTask(taskName, callback) {
    console.log("Starting task: " + taskName);
    callback();
    console.log("Task completed: " + taskName);
}

performRobotTask("Obstacle Detection", function() {
    console.log("Scanning for obstacles...");
    console.log("No obstacles detected");
});

console.log("\n");

// 3. anonymous arrow functions
const scanEnvironment = () => {
    console.log("360° environmental scan in progress");
};

const moveToCoordinates = (x, y) => {
    console.log("Moving to coordinates: (" + x + ", " + y + ")");
};

scanEnvironment(); // output: 360° environmental scan in progress
moveToCoordinates(10, 205); // output: Moving to coordinates: (10, 205)

console.log("\n");

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("Robot system initialization sequence");
    console.log("Loading navigation module...");
    console.log("Loading sensors...");
    console.log("System ready");
})();

console.log("\n");

// IIFE with parameters
(function(robotName, mission) {
    console.log("Deploying " + robotName + " for mission: " + mission);
})("Explorer-5", "Mars terrain mapping");

console.log("\n");

// 5. anonymous functions in array methods
const sensors = ["camera", "lidar", "ultrasonic", "infrared"];

console.log("Activating sensors:");
sensors.forEach(function(sensor) {
    console.log("- " + sensor + " sensor: online");
});

console.log("\n");

// using arrow function in array methods
const batteryReadings = [95, 87, 92, 89, 94];

const averageBattery = batteryReadings.reduce((sum, reading) => {
    return sum + reading;
}, 0) / batteryReadings.length;

console.log("Average battery level: " + averageBattery.toFixed(2) + "%");

console.log("\n");

// filter with anonymous function
const robotTemperatures = [45, 58, 72, 88, 92, 67];

const overheatingComponents = robotTemperatures.filter(function(temp) {
    return temp > 80;
});

console.log("Overheating detected in " + overheatingComponents.length + " components");
console.log("Temperatures: " + overheatingComponents.join(", ") + "°C");

console.log("\n");

// map with anonymous function
const distances = [10, 25, 50, 100];

const timeToTravel = distances.map((distance) => {
    const speed = 5; // meters per second
    return distance / speed;
});

console.log("Time to travel distances (seconds): " + timeToTravel.join(", "));

console.log("\n");

// 6. anonymous function as event handler (simulated)
const robotControlPanel = {
    emergency_stop: function() {
        console.log("Emergency stop activated!");
    },
    on_low_battery: function() {
        console.log("Low battery warning - Returning to base");
    },
    on_obstacle_detected: function() {
        console.log("Obstacle ahead - Rerouting");
    }
};

// simulating event triggers
console.log("Simulating robot events:");
robotControlPanel.on_obstacle_detected();
robotControlPanel.on_low_battery();

console.log("\n");

// 7. self-executing anonymous function for data privacy
const robotModule = (function() {
    // private variables
    let serialNumber = "RBT-2024-X1";
    let maintenanceLog = [];
    
    // public interface
    return {
        logMaintenance: function(action) {
            maintenanceLog.push({
                action: action,
                timestamp: new Date().toISOString()
            });
            console.log("Maintenance logged: " + action);
        },
        getSerialNumber: function() {
            return serialNumber;
        },
        getMaintenanceCount: function() {
            return maintenanceLog.length;
        }
    };
})();

robotModule.logMaintenance("Oil change");
robotModule.logMaintenance("Sensor calibration");
console.log("Robot serial: " + robotModule.getSerialNumber());
console.log("Maintenance records: " + robotModule.getMaintenanceCount());