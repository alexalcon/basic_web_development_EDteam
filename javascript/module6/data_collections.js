/**
 * Arrays in JavaScript
 * 
 * An array is a special variable, which can hold more than one value at a time.
 * It is a list-like object used to store multiple values in a single variable.
 */

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Arrays in JavaScript — Array methods
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Arrays in JavaScript — Array methods");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

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
console.log("push() - appending elements to the end of an array");
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

// ───────
// Summary
// ───────
// Declaring a new variable pointing to an existing array does NOT copy the data.
// It copies the reference to the same object in memory. push() (and any other
// array mutation) is immediately visible through every variable that holds
// that reference – the same behavior shown for objects in module 2. 
// 
// Thus, in short: reference sharing is an object-only feature. Primitives are 
// always independent copies.

// ────────────────────
// push() method output
// ────────────────────
// The push() method returns the new length of the array after the element(s) have been added.

console.log("\n────────────────────");
console.log("push() method output");
console.log("────────────────────");

let arr = [1, 2, 3];
let new_length = arr.push(4); // arr becomes [1, 2, 3, 4], new_length is 4

console.log("\nArray after push(4):", arr); // [1, 2, 3, 4]
console.log("Return value of push(4) in 'new_length' variable:", new_length); // 4

// ────────────────────────────────────────────────────────────────
// 6) The pop() method – removing elements from the end of an array
// ────────────────────────────────────────────────────────────────
// pop() removes the last element from an array and returns that element.
// It mutates (modifies) the original array in place.
//
// Robotics use case: a control loop may need to discard the last setpoint
// if it becomes invalid or if the trajectory needs to be shortened.

console.log("\n──────────────────────────────────────────────────");
console.log("pop() - removing elements from the end of an array");
console.log("──────────────────────────────────────────────────");

// Robotics use case 1: trajectory rollback
// A motion planner builds a list of waypoints for a robotic arm.
// If the last waypoint is detected as unreachable (e.g. joint limit exceeded),
// the planner rolls it back by popping it off the trajectory buffer.

let waypoints_mm = [
    { x: 0,   y: 0   },
    { x: 100, y: 50  },
    { x: 200, y: 80  },
    { x: 350, y: 200 }   // last waypoint – detected as unreachable
];

console.log("Trajectory before rollback:", waypoints_mm.length, "waypoints");

let removed_waypoint = waypoints_mm.pop(); // removes and returns the last element
console.log("Removed waypoint          :", removed_waypoint); // { x: 350, y: 200 }
console.log("Trajectory after rollback :", waypoints_mm.length, "waypoints"); // 3

// Robotics use case 2: LIFO command stack (undo last motor command)
// An operator sends velocity commands to a drive base. Each command is logged.
// If the operator presses "undo", the most recent command is popped and the
// motor is rolled back to the previous state.

console.log("\n─── LIFO command stack (undo last motor command) ───");

let velocity_command_stack = [0, 20, 40, 60, 80]; // velocity setpoints (m/s × 100)
console.log("Command stack before undo:", velocity_command_stack); // [0, 20, 40, 60, 80]

let undone_command = velocity_command_stack.pop();
console.log("Undone command            :", undone_command, "→ reverting to previous setpoint");
console.log("Command stack after undo  :", velocity_command_stack); // [0, 20, 40, 60]

// Robotics use case 3: draining a sensor event queue
// A sensor interrupt handler pushes events onto a queue (treated as a stack here).
// The control loop processes events one at a time from the top (end) of the stack
// using pop(), stopping when the queue is empty.

console.log("\n─── Draining sensor event queue ───");

let event_queue = ["collision_front", "low_battery", "obstacle_left", "target_reached"];
console.log("Events queued:", event_queue.length);

while (event_queue.length > 0) {
    let current_event = event_queue.pop();
    console.log("Processing event:", current_event, "| remaining:", event_queue.length);
}

console.log("All events processed. Queue empty:", event_queue.length === 0); // true

// ────────────────────
// pop() method output
// ────────────────────
// pop() returns the element that was removed (the former last element of the array).
// If the array is empty, pop() returns undefined and the array is left unchanged.

console.log("\n────────────────────");
console.log("pop() method output");
console.log("────────────────────");

let joint_log = [10, 20, 30, 40];
let last_angle = joint_log.pop(); // joint_log becomes [10, 20, 30], last_angle is 40

console.log("\nArray after pop():", joint_log); // [10, 20, 30]
console.log("Return value of pop() in 'last_angle' variable:", last_angle); // 40

// pop() on an empty array
let empty_log = [];
let result = empty_log.pop();
console.log("pop() on empty array returns:", result); // undefined

// ─────────────────────────────────────────────────────────────────────────────
// push() and pop() are MUTATING (in-place) array methods
// ─────────────────────────────────────────────────────────────────────────────
// Both push() and pop() directly modify the original array in place – they are
// called *mutating* (or *destructive*) methods. After calling either method,
// the array that was operated on is permanently changed; there is no way to
// recover the previous state without having saved a copy beforehand.
//
//   push(value)  →  adds an element to the END   of the array; 
//                   returns new length.
//   pop()        →  removes the element from END  of the array; 
//                   returns removed element.
//
// Because arrays are objects and variables hold references (not copies), any
// other variable that points to the same array will also "see" the mutation –
// exactly as demonstrated in the push() reference-behavior section above.
//
// ─────────────────────────────────────────────────────────────────────────────
// Non-mutating array methods (next section)
// ─────────────────────────────────────────────────────────────────────────────
// Not all array methods modify the original array. Non-mutating methods return
// a NEW array (or a derived value) and leave the original array completely
// unchanged. Examples include slice(), map(), filter(), and concat().
// These are preferred when the original data must be preserved – a common
// requirement in safety-critical robotics and embedded systems software.

// ───────────────────────────────────────────────────────────
// 7) The slice() method – creating a shallow copy of an array
// ───────────────────────────────────────────────────────────
// slice() creates a shallow copy of a portion of an array into a new array object, i.e.,
// it does not mutate the original array. As arguments, it takes the start index (inclusive)
// and end index (exclusive) of the portion to copy.
//
// Syntax: array.slice(start, end)
//
//   start  – index at which to begin extraction (inclusive). Negative values count
//            from the end of the array (-1 is the last element).
//   end    – index at which to stop extraction (exclusive). If omitted, slice copies
//            through the end of the array.
//
// The returned array is a NEW array; the original array is never modified.

console.log("\n───────────────────────────────────────────────────────────────");
console.log("slice() - extracting a sub-array without modifying the original");
console.log("───────────────────────────────────────────────────────────────");

// ──────────────────────────────────────────────────────────────────────────
// Robotics use case 1: extracting a window of sensor readings for processing
// ──────────────────────────────────────────────────────────────────────────
// A lidar scanner returns 360 distance samples (one per degree).
// The navigation algorithm only needs the 60-sample forward-facing arc
// (index 0-59) to decide whether to advance or stop.
// slice() extracts that window without touching the full scan buffer.

let lidar_scan = [];
for (let i = 0; i < 360; i++) {
    lidar_scan.push(200 + Math.round(Math.sin(i * Math.PI / 180) * 50)); // synthetic distances
}

let forward_arc = lidar_scan.slice(0, 60); // indices 0 – 59 (60 samples)

console.log("Full scan length        :", lidar_scan.length); // 360
console.log("Forward arc length      :", forward_arc.length); // 60
console.log("Original scan unchanged :", lidar_scan.length === 360); // true
console.log("First 5 forward samples :", forward_arc.slice(0, 5));

// ────────────────────────────────────────────────────────────────────
// Robotics use case 2: isolating the last N samples from a rolling log
//                      (negative index shorthand)
// ────────────────────────────────────────────────────────────────────
// A temperature sensor on a motor controller logs readings every 100 ms.
// Before triggering an overheat alert, the safety monitor averages only
// the last 5 samples to ignore transient spikes.
// Using a negative start index lets the code work regardless of log length.

console.log("\n─── Last-N samples using negative index ───");

let temp_log_c = [68, 70, 71, 73, 72, 75, 78, 82, 85, 89]; // °C readings over time
let last_5_temps = temp_log_c.slice(-5); // last 5 elements

console.log("Full temperature log :", temp_log_c);
console.log("Last 5 samples       :", last_5_temps);      // [78, 82, 85, 89] — wait, 5 items
console.log("Original log length  :", temp_log_c.length); // 10 – unchanged

// callback arrow function to sum the last 5 temps, then divide by count for average
let avg_temp = last_5_temps.reduce((sum, t) => sum + t, 0) / last_5_temps.length;
console.log("Average of last 5 :", avg_temp.toFixed(1), "°C");

// ──────────────────────────────────────────────────────────────────────────
// Robotics use case 3: cloning an array to preserve the original (safe copy)
// ──────────────────────────────────────────────────────────────────────────
// Before running a simulation that may mutate the planned trajectory, the
// motion planner clones the array with slice() (no arguments = full copy).
// This guarantees the master plan is never altered by the simulation pass.

console.log("\n─── Cloning a trajectory plan for simulation ───");

let planned_trajectory = [0, 30, 60, 90, 120, 150]; // joint angles along planned path
let simulation_copy    = planned_trajectory.slice(); // full shallow copy – no arguments needed

console.log("planned_trajectory :", planned_trajectory);
console.log("simulation_copy    :", simulation_copy);
console.log("Same reference?    :", planned_trajectory === simulation_copy); // false – separate arrays

// mutate only the simulation copy (e.g. optimizer adjusting angles)
simulation_copy.push(180);
simulation_copy[0] = 5; // small offset applied by optimizer

console.log("\nAfter simulation mutations:");
console.log("planned_trajectory :", planned_trajectory); // [0, 30, 60, 90, 120, 150] – unchanged
console.log("simulation_copy    :", simulation_copy);    // [5, 30, 60, 90, 120, 150, 180]

// ─────────────────────────────────────────────────────────────────────────────
// Robotics use case 4: extracting a sub-trajectory between two waypoint indices
// ─────────────────────────────────────────────────────────────────────────────
// A long pre-computed trajectory has 10 waypoints. The robot only needs to
// execute steps 3 through 6 (indices 3–6) for the current sub-task.
// slice(3, 7) extracts exactly those four waypoints.

console.log("\n─── Sub-trajectory extraction (slice with start + end) ───");

let full_path = [
    { id: 0, angle: 0   },
    { id: 1, angle: 15  },
    { id: 2, angle: 30  },
    { id: 3, angle: 45  },  // ← sub-task start
    { id: 4, angle: 60  },
    { id: 5, angle: 75  },
    { id: 6, angle: 90  },  // ← sub-task end
    { id: 7, angle: 105 },
    { id: 8, angle: 120 },
    { id: 9, angle: 135 }
];

let sub_task = full_path.slice(3, 7); // indices 3, 4, 5, 6

console.log("Full path waypoints :", full_path.length);   // 10
console.log("Sub-task waypoints  :", sub_task.length);    // 4
sub_task.forEach(wp => console.log("  id:", wp.id, "| angle:", wp.angle, "°"));
console.log("Full path unchanged :", full_path.length === 10); // true

// ─────────────────────
// slice() method output
// ─────────────────────
// slice() always returns a NEW array containing the copied elements.
// The original array is NEVER modified (non-mutating).
// If start >= end, or the array is empty in that range, an empty array is returned.
// If end is omitted, the copy extends to the last element of the array.

console.log("\n─────────────────────");
console.log("slice() method output");
console.log("─────────────────────");

let encoder_ticks = [100, 200, 300, 400, 500];

let middle   = encoder_ticks.slice(1, 4); // [200, 300, 400]
let from_end = encoder_ticks.slice(-2);   // [400, 500]
let full     = encoder_ticks.slice();     // [100, 200, 300, 400, 500]
let empty    = encoder_ticks.slice(3, 3); // []

console.log("\nOriginal          :", encoder_ticks); // [100, 200, 300, 400, 500]
console.log("slice(1, 4)       :", middle);          // [200, 300, 400]
console.log("slice(-2)         :", from_end);        // [400, 500]
console.log("slice() – full    :", full);            // [100, 200, 300, 400, 500]
console.log("slice(3, 3) – empty:", empty);          // []
console.log("Original after all slice() calls:", encoder_ticks); // unchanged