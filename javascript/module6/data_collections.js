/**
 * Arrays in JavaScript
 * 
 * An array is a special variable, which can hold more than one value at a time.
 * It is a list-like object used to store multiple values in a single variable.
 */

/**
 * ━━━━━━━━━━━━━━━━━━━━
 * Arrays in JavaScript
 * ━━━━━━━━━━━━━━━━━━━━
 */

console.log("━━━━━━━━━━━━━━━━━━━━");
console.log("Arrays in JavaScript");
console.log("━━━━━━━━━━━━━━━━━━━━");

// ─────────────────────────────────
// 1) Declaration and initialization
// ─────────────────────────────────
// An array literal uses square brackets []. Elements are separated by commas.
// In robotics and embedded systems, arrays commonly hold sensor readings,
// actuator commands, or joint angles sampled over time.

// distance readings from 6 ultrasonic sensors mounted around a robot (in cm)
// mounting order: front, front-left, left, rear-left, rear, front-right
let sensor_readings_cm = [42, 31, 18, 55, 60, 27];
console.log("Sensor readings array:", sensor_readings_cm);
console.log("Type:", typeof sensor_readings_cm); // "object" – arrays are objects in JavaScript

// joint angles for a 3-DOF robotic arm (in degrees)
let joint_angles_deg = [0, 90, -45];
console.log("Joint angles (deg):", joint_angles_deg);

// PWM duty-cycle commands for 4 motors in a mobile robot base (0–100 %)
const motor_pwm_percent = [75, 75, 75, 75];
console.log("Motor PWM (%):", motor_pwm_percent);

// ────────────────────────────────────
// 2) Accessing elements (zero-indexed)
// ────────────────────────────────────
// Arrays are zero-indexed: the first element is at index 0, the last at index length-1.
//
// Index:              0     1     2     3     4     5
//                   [42,   31,   18,   55,   60,   27]
//
// Reading a specific index lets the control system act on the exact sensor or
// joint it needs without processing the whole array.

console.log("\n──────────────────────────────");
console.log("Accessing elements (0-indexed)");
console.log("──────────────────────────────");

console.log("Front sensor      (index 0):", sensor_readings_cm[0], "cm");
console.log("Front-left sensor (index 1):", sensor_readings_cm[1], "cm");
console.log("Left sensor       (index 2):", sensor_readings_cm[2], "cm");
console.log("Rear sensor       (index 4):", sensor_readings_cm[4], "cm");

console.log("Joint 1 angle:", joint_angles_deg[0], "deg");
console.log("Joint 2 angle:", joint_angles_deg[1], "deg");
console.log("Joint 3 angle:", joint_angles_deg[2], "deg");

// ────────────────────────
// 3) Array length property
// ────────────────────────
// .length method returns the total number of elements in the array.
// In firmware and control loops this is essential: you drive the loop bound
// from the array itself, so adding/removing sensors never requires touching
// the loop code.

console.log("\n─────────────────────");
console.log("Array length property");
console.log("─────────────────────");

console.log("Number of sensors:", sensor_readings_cm.length); // 6
console.log("Number of joints :", joint_angles_deg.length);   // 3
console.log("Number of motors :", motor_pwm_percent.length);  // 4

// ──────────────────────────────────────────
// 4) Iterating over an array with a for loop
// ──────────────────────────────────────────
// Combine .length with a for loop (a counter-controlled iteration) to 
// process every element automatically. Using i < array.length as the 
// stop condition handles any array size.

console.log("\n──────────────────────────────────────────────");
console.log("Iterating over sensor readings with a for loop");
console.log("──────────────────────────────────────────────");

// robotics use case: proximity check – flag sensors reporting an obstacle
let danger_threshold_cm = 30;

for (let i = 0; i < sensor_readings_cm.length; ++i) {
    let reading = sensor_readings_cm[i];
    if (reading < danger_threshold_cm) {
        console.log("Sensor", i, "→", reading, "cm → WARNING: obstacle too close!");
    } else {
        console.log("Sensor", i, "→", reading, "cm → OK");
    }
}

// embedded systems use case: average an ADC sample buffer (noise filtering / oversampling)
// common in microcontroller firmware when reading analog sensors (current, temperature, voltage)
let adc_samples = [512, 508, 515, 510, 513, 507, 511, 514];
let adc_sum = 0;

for (let i = 0; i < adc_samples.length; i = i + 1) {
    adc_sum = adc_sum + adc_samples[i];
}

let adc_average = adc_sum / adc_samples.length;
console.log("\nADC samples        :", adc_samples);
console.log("Oversampled average:", adc_average); // smoothed ADC value fed to control loop

// ────────────────────────────────────────────────────────────────
// 5) The push() method – appending elements to the end of an array
// ────────────────────────────────────────────────────────────────
// push() adds one or more elements to the END of an array.
// It mutates (modifies) the original array in place and returns the new length.
//
// Robotics use case: a control loop accumulates joint-angle commands into a
// trajectory buffer tick by tick. Each new setpoint is pushed onto the log.

console.log("\n───────────────────────────────────────────────────");
console.log("push() – appending elements to the end of an array");
console.log("──────────────────────────────────────────────────");

let angle_history_deg = [0, 15, 30]; // joint angle log – first 3 control ticks
console.log("Before push        :", angle_history_deg);        // [0, 15, 30]
console.log("Length before push :", angle_history_deg.length); // 3

angle_history_deg.push(45); // tick 4 setpoint logged
console.log("After push(45)     :", angle_history_deg);        // [0, 15, 30, 45]
console.log("Length after push  :", angle_history_deg.length); // 4

angle_history_deg.push(60); // tick 5 setpoint logged
console.log("After push(60)     :", angle_history_deg);        // [0, 15, 30, 45, 60]
console.log("Length after push  :", angle_history_deg.length); // 5

// ─────────────────────────────────────────────────────────
// ⚠ push() and reference behavior – mutating a shared array
// ─────────────────────────────────────────────────────────
// Recall from module 2: assigning an object (including an array) to a new variable
// copies the REFERENCE (the memory address), NOT the array data itself.
// Both variables then point to the SAME array in memory.
//
// Consequence: calling push() through one variable changes the array seen by
// every other variable that references that same array.
//
// This is critical in robotics software where multiple components (e.g., a motion
// controller and a data logger) share a single command buffer.

console.log("\n────────────────────────────────────────────────────────");
console.log("push() and reference behavior (array as a shared object)");
console.log("────────────────────────────────────────────────────────");

// motion controller writes into this buffer
let command_buffer = [10, 20, 30];

// data logger is assigned the same array – it receives a reference, not a copy
let logger_view = command_buffer;

console.log("command_buffer before push:", command_buffer); // [10, 20, 30]
console.log("logger_view    before push:", logger_view);    // [10, 20, 30]
console.log("Same array in memory?", command_buffer === logger_view); // true

// the controller pushes a new velocity command
command_buffer.push(40);

// both variables reflect the mutation because they reference the same array
console.log("\nAfter command_buffer.push(40):");
console.log("command_buffer:", command_buffer); // [10, 20, 30, 40]
console.log("logger_view   :", logger_view);    // [10, 20, 30, 40]  ← also updated!

// same effect when push() is called through the second variable
logger_view.push(50);

console.log("\nAfter logger_view.push(50):");
console.log("command_buffer:", command_buffer); // [10, 20, 30, 40, 50]
console.log("logger_view   :", logger_view);    // [10, 20, 30, 40, 50]

// Summary:
// Declaring a new variable pointing to an existing array does NOT copy the data.
// It copies the reference to the same object in memory. push() (and any other
// array mutation) is immediately visible through every variable that holds
// that reference – the same behavior shown for objects in module 2. 
// 
// Thus, in short: reference sharing is an object-only feature. Primitives are 
// always independent copies.