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


// ─────────────────────────────────────────────────────────────
// 8) The forEach() and map() methods – iterating with callbacks
// ─────────────────────────────────────────────────────────────
// forEach() and map() are non-mutating array methods that take a callback function
// and apply it to each element of the array. forEach() executes the callback for
// side effects (e.g., logging), while map() returns a new array containing the
// results of applying the callback to each element.

// ─────────────────────────────────────────────────────────────────────────────
// Callback functions – anonymous functions and arrow functions
// ─────────────────────────────────────────────────────────────────────────────
// Both forEach() and map() receive a *callback* – a function passed as an
// argument that the method calls for each element. There are three equivalent
// ways to write that callback:
//
//  1. Named function reference (defined elsewhere):
//        function double(x) { return x * 2; }
//        array.map(double);
//
//  2. Anonymous function expression (inline, no name):
//        array.map(function(x) { return x * 2; });
//
//  3. Arrow function (concise inline, most common in modern JS):
//        array.map(x => x * 2);
//        array.map((x, i) => x * 2);        // with index
//        array.map((x, i, arr) => x * 2);   // with index + original array
//
// The callback always receives up to three arguments (in order):
//   • element  – the current array element
//   • index    – the element's index (optional)
//   • array    – the array itself (optional, rarely needed)
//
// Arrow functions are preferred for callbacks because they are shorter and
// avoid binding their own `this`, which sidesteps common scoping bugs in
// class-based code (e.g., a RobotController class calling map() inside a method).

// ─────────────────────────────────────────────────────────────────────────────
// forEach() – "do something FOR EACH element" (side-effect iteration)
// ─────────────────────────────────────────────────────────────────────────────
// forEach() calls the callback once per element strictly for its SIDE EFFECTS –
// writing to hardware registers, logging, updating external state, etc.
// It always returns undefined; the return value of the callback is discarded.
// Because it produces nothing, forEach() CANNOT be chained with map/filter/etc.
//
// Syntax:
//   array.forEach(function(element, index, array) { /* side effect */ });
//   array.forEach((element, index) => { /* side effect */ });

console.log("\n─────────────────────────────────────────────────────────────────");
console.log("forEach() – side-effect iteration (returns undefined)");
console.log("─────────────────────────────────────────────────────────────────");

// ── Robotics use case 1: sending PWM commands to motor drivers ──
// The motion controller loops over duty-cycle values and writes each one
// to the corresponding motor driver register (simulated with console.log).
// This is a pure side effect – there is no new array to build.

let pwm_commands = [70, 80, 60, 75]; // duty cycles for motors 0-3

console.log("\n── forEach: writing PWM commands to motor drivers ──");

pwm_commands.forEach(function(duty, motor_id) {           // anonymous function form
    console.log(`Motor ${motor_id} → PWM set to ${duty}%`);
    // hardware call would be: writeRegister(MOTOR_BASE + motor_id, duty);
});

// Same thing with an arrow function (preferred, more concise):
console.log("\n── forEach (arrow function): same operation ──");
pwm_commands.forEach((duty, motor_id) => {
    console.log(`Motor ${motor_id} → PWM set to ${duty}%`);
});

// ── Embedded systems use case 2: writing to GPIO pins ──
// Each entry maps a pin number to its desired output state (0 = LOW, 1 = HIGH).
// forEach drives each write sequentially – order matters for hardware.

console.log("\n── forEach: writing GPIO output states ──");

const gpio_states = [
    { pin: 4, state: 1 },
    { pin: 7, state: 0 },
    { pin: 12, state: 1 },
    { pin: 15, state: 1 }
];

gpio_states.forEach(({ pin, state }) => {                 // destructuring in callback param
    const level = state === 1 ? "HIGH" : "LOW";
    console.log(`GPIO pin ${pin} → set ${level}`);
    // hardware call: digitalWrite(pin, state);
});

// ── Robotics use case 3: accumulating a sum (external state mutation) ──
// Summing sensor voltages to compute total power draw.
// forEach is acceptable here because the accumulation lives OUTSIDE the array
// (in an external variable), which is inherently a side effect.

console.log("\n── forEach: accumulating total power draw ──");

let current_draw_a = [0.35, 0.50, 0.28, 0.42, 0.61]; // per-motor currents (Amperes)
let total_current  = 0;

current_draw_a.forEach(current => {
    total_current += current;
});

console.log("Per-motor currents (A) :", current_draw_a);
console.log("Total current draw (A) :", total_current.toFixed(2));

// ─────────────────────────────────────────────────────────────────────────────
// map() – "TRANSFORM each element into something new" (non-mutating)
// ─────────────────────────────────────────────────────────────────────────────
// map() calls the callback on every element and collects each return value into
// a brand-new array of the same length. The original array is untouched.
// Because map() RETURNS a new array, it can be chained with other methods
// (filter, reduce, slice, …), making it the workhorse of functional pipelines.
//
// Syntax:
//   const result = array.map(function(element, index) { return transform(element); });
//   const result = array.map(element => transform(element));   // arrow shorthand

console.log("\n─────────────────────────────────────────────────────────────────");
console.log("map() – transform each element, return a new array");
console.log("─────────────────────────────────────────────────────────────────");

// ── Robotics use case 1: unit conversion (degrees → radians) ──
// Joint-angle setpoints stored in degrees must be converted to radians before
// being sent to the inverse-kinematics solver. map() produces the converted
// array in one line without altering the source data.

let joint_setpoints_deg = [0, 45, 90, 135, 180];
let joint_setpoints_rad = joint_setpoints_deg.map(deg => deg * (Math.PI / 180));

console.log("\n── map: degrees → radians conversion ──");
console.log("Degrees :", joint_setpoints_deg);
console.log("Radians :", joint_setpoints_rad.map(r => parseFloat(r.toFixed(4))));
console.log("Original array unchanged:", joint_setpoints_deg); // [0, 45, 90, 135, 180]

// ── Embedded systems use case 2: ADC raw value → voltage ──
// A 12-bit ADC (range 0–4095) reads voltages in a 0–3.3 V range.
// map() converts every raw count to its physical voltage equivalent.

console.log("\n── map: ADC raw counts → physical voltage ──");

const V_REF    = 3.3;
const ADC_MAX  = 4095;
let adc_raw    = [0, 1024, 2048, 3072, 4095];
let voltages_v = adc_raw.map(raw => parseFloat((raw * V_REF / ADC_MAX).toFixed(4)));

console.log("ADC raw counts :", adc_raw);
console.log("Voltages (V)   :", voltages_v); // [0, 0.825, 1.65, 2.475, 3.3]

// ── Robotics use case 3: extracting a property from an array of objects ──
// A sensor registry holds descriptor objects. map() plucks a single field
// to build a flat array of sensor names for display or logging.

console.log("\n── map: extracting a property from an array of objects ──");

const sensors = [
    { id: 0, name: "front_ultrasonic", range_cm: 400 },
    { id: 1, name: "left_ir",          range_cm: 80  },
    { id: 2, name: "rear_ultrasonic",  range_cm: 400 },
    { id: 3, name: "top_tof",          range_cm: 200 }
];

let sensor_names   = sensors.map(s => s.name);
let sensor_ranges  = sensors.map(({ range_cm }) => range_cm);  // destructuring shorthand

console.log("Sensor names  :", sensor_names);
console.log("Sensor ranges :", sensor_ranges);

// ── Robotics use case 4: chaining map() with other methods ──
// From all sensor readings, compute the deviation from a target distance,
// then filter out sensors already within tolerance – all in a single pipeline.

console.log("\n── map + filter pipeline: sensors outside tolerance ──");

const target_cm   = 50;
const tolerance   = 10;
const readings_cm = [42, 31, 18, 55, 60, 27];

const out_of_range = readings_cm
    .map((reading, index) => ({ index, reading, deviation: Math.abs(reading - target_cm) }))
    .filter(entry => entry.deviation > tolerance);

out_of_range.forEach(({ index, reading, deviation }) => {
    console.log(`Sensor ${index}: ${reading} cm | deviation ${deviation} cm → ADJUST`);
});

// ─────────────────────────────────────────────────────────────────────────────
// Why forEach() is less commonly used than map() – and when to use it
// ─────────────────────────────────────────────────────────────────────────────
//
// PREFER map() when:
//   • You want to TRANSFORM an array and USE the result:
//       const volts = raw.map(r => r * 3.3 / 4095);
//   • You need to CHAIN operations (map → filter → reduce):
//       raw.map(...).filter(...).reduce(...)
//   • You want short, expressive, functional-style code.
//   • The transformation is side-effect-free (pure function) – important in
//     safety-critical robotics code where predictable behavior is required.
//
// map() forces you to RETURN a value from every callback invocation, which
// makes the intent explicit: "I am producing a new array". Reviewers and
// static-analysis tools can verify this at a glance.
//
// USE forEach() only when:
//   • The operation is a SIDE EFFECT and you DO NOT need a new array:
//       – Sending commands to hardware registers / GPIO
//       – Writing data to a serial/CAN bus
//       – Logging / printing diagnostics
//       – Mutating something that lives OUTSIDE the array (accumulator, DOM, etc.)
//   • Returning a value from the callback would be meaningless.
//
// A common anti-pattern to avoid:
//   ✗  const doubled = [];
//      values.forEach(v => doubled.push(v * 2));   // needless mutation + verbose
//
//   ✓  const doubled = values.map(v => v * 2);     // concise, pure, chainable
//
// In embedded / robotics firmware, forEach is appropriate for the "output stage"
// of a control loop (the step that physically writes to actuators), while map()
// belongs to the "computation stage" (unit conversions, scaling, filtering).
//
//   Computation stage  → map(), filter(), reduce()   (pure transforms)
//   Output/effect stage → forEach()                  (hardware writes, logging)

// ─────────────────────────────────────────────────────────────────
// 9) The filter() method – selecting elements that meet a condition 
// ─────────────────────────────────────────────────────────────────
// filter() tests each element with a callback function and returns 
// a NEW array containing only the elements for which the callback 
// returns true. It does not mutate the original array.
//
// Syntax:
//   const result = array.filter(function(element, index, array) {
//       return condition;
//   });
//
//   const result = array.filter((element, index) => condition);
//
// The callback receives up to three arguments:
//   • element  – current element being tested
//   • index    – index of the current element
//   • array    – the original array itself
//
// The callback must return a BOOLEAN-LIKE result:
//   • true   → keep the element in the new array
//   • false  → discard the element
//
// As with map() and forEach(), the callback can be written as either:
//   • an anonymous function expression: function(x) { return x > 0; }
//   • an arrow function: x => x > 0

console.log("\n───────────────────────────────────────────────────────────────");
console.log("filter() – selecting only elements that satisfy a condition");
console.log("───────────────────────────────────────────────────────────────");

// ── Robotics use case 1: obstacle detection from distance sensors ──
// A mobile robot has six proximity sensors around its chassis.
// The navigation system only cares about readings below the danger threshold.
// filter() extracts just the dangerous readings while leaving the full sensor
// buffer untouched for other modules.

let proximity_readings_cm = [42, 31, 18, 55, 60, 27];
let obstacle_threshold_cm = 30;

let dangerous_readings = proximity_readings_cm.filter(
    reading => reading < obstacle_threshold_cm);

console.log("\n── filter: obstacle readings below threshold ──");
console.log("All proximity readings :", proximity_readings_cm);
console.log("Danger threshold (cm)  :", obstacle_threshold_cm);
console.log("Dangerous readings     :", dangerous_readings); // [18, 27]
console.log("Original array unchanged:", proximity_readings_cm);

// ── Robotics use case 2: keep only active fault codes ──
// A diagnostic module stores fault objects coming from different controllers.
// Only active faults should be sent to the operator console.
// filter() selects exactly those objects whose `active` flag is true.

console.log("\n── filter: active fault codes only ──");

let fault_log = [
    { code: "MOTOR_OVERCURRENT", active: true  },
    { code: "LOW_BATTERY",       active: false },
    { code: "ENCODER_TIMEOUT",   active: true  },
    { code: "TEMP_WARNING",      active: false }
];

let active_faults = fault_log.filter(fault => fault.active);

console.log("Fault log      :", fault_log);
console.log("Active faults  :", active_faults);
console.log("Number active  :", active_faults.length);

// ── Embedded systems use case 3: removing noisy ADC samples ──
// A current sensor is sampled multiple times. Samples outside the valid range
// are treated as noise or transient spikes and discarded before averaging.
// filter() is ideal because it keeps only valid samples in a new array.

console.log("\n── filter: reject noisy ADC samples ──");

let adc_current_samples_ma = [510, 498, 505, 1200, 503, 495, -40, 508];
let valid_current_samples  = adc_current_samples_ma.filter(sample => sample >= 0 && sample <= 600);

console.log("Raw ADC current samples (mA) :", adc_current_samples_ma);
console.log("Valid samples only (mA)      :", valid_current_samples);

let filtered_average_ma = valid_current_samples.reduce((sum, sample) => sum + sample, 0)
    / valid_current_samples.length;
console.log("Average after filtering (mA) :", filtered_average_ma.toFixed(2));

// ── Robotics use case 4: selecting only waypoints inside a safe workspace ──
// A planner produces candidate waypoints. The manipulator can only reach
// positions inside its safe workspace radius. filter() discards unreachable
// points before the final trajectory is built.

console.log("\n── filter: reachable waypoints only ──");

let candidate_waypoints = [
    { id: 0, x: 100, y:  50 },
    { id: 1, x: 220, y: 180 },
    { id: 2, x: 140, y:  90 },
    { id: 3, x: 310, y: 260 },
    { id: 4, x: 160, y: 120 }
];

let max_workspace_radius_mm = 220;

let reachable_waypoints = candidate_waypoints.filter(({ x, y }) => {
    let radius = Math.sqrt(x * x + y * y);
    return radius <= max_workspace_radius_mm;
});

console.log("Candidate waypoints :", candidate_waypoints.length);
console.log("Reachable waypoints :", reachable_waypoints.length);
reachable_waypoints.forEach(({ id, x, y }) => {
    console.log(`  waypoint ${id} → (${x}, ${y}) mm`);
});

// ── Embedded systems use case 5: keep only pins configured as outputs ──
// A board configuration table contains both input and output pins.
// Before writing a state update, firmware selects only output-capable pins.

console.log("\n── filter: pins configured as outputs ──");

let pin_config = [
    { pin: 2, mode: "INPUT"  },
    { pin: 3, mode: "OUTPUT" },
    { pin: 4, mode: "OUTPUT" },
    { pin: 5, mode: "INPUT"  },
    { pin: 6, mode: "OUTPUT" }
];

let output_pins = pin_config.filter(config => config.mode === "OUTPUT");

console.log("All pins    :", pin_config);
console.log("Output pins :", output_pins);

// ─────────────────────────────────────────────────────────────────────────────
// filter() with anonymous functions vs arrow functions
// ─────────────────────────────────────────────────────────────────────────────
// Both callback styles do the same job. The difference is mainly syntax.
// Anonymous functions use the `function` keyword and explicit `return`.
// Arrow functions are shorter and are the most common style in modern JS.

console.log("\n────────────────────────────────────────────────────────");
console.log("filter() callback styles: anonymous vs arrow function");
console.log("────────────────────────────────────────────────────────");

let battery_levels_percent = [95, 72, 49, 18, 83, 26];

let low_battery_anon = battery_levels_percent.filter(function(level) {
    return level < 30;
});

let low_battery_arrow = battery_levels_percent.filter(level => level < 30);

console.log("Battery levels         :", battery_levels_percent);
console.log("Anonymous function     :", low_battery_anon);
console.log("Arrow function         :", low_battery_arrow);

// If you need more callback parameters, you can include them explicitly:
let low_battery_with_index = battery_levels_percent.filter((level, index) => {
    return level < 30 && index >= 2;
});

console.log("Arrow with index       :", low_battery_with_index);

// ─────────────────────────────────────────────────────────────────────────────
// Why filter() is widely used
// ─────────────────────────────────────────────────────────────────────────────
// filter() is widely used because it expresses intent very clearly:
//   "From this array, keep only the elements that satisfy a condition."
//
// It is preferred over manual loops when:
//   • You want concise, declarative code.
//   • You need a NEW array instead of mutating the original.
//   • You want to chain operations cleanly:
//       readings.filter(...).map(...).reduce(...)
//   • You are building a data-processing pipeline, common in robotics software
//     for sensor filtering, event selection, diagnostics, and safety checks.
//
// A manual loop can do the same thing, but is more verbose:
//   let result = [];
//   for (let i = 0; i < values.length; ++i) {
//       if (condition(values[i])) {
//           result.push(values[i]);
//       }
//   }
//
// filter() packages that pattern into a single method call, making the code
// easier to read and less error-prone.
//
// Use filter() when:
//   • You are SELECTING a subset of elements.
//   • You need to preserve the original array.
//   • The condition can be expressed independently for each element.
//
// Do NOT use filter() when:
//   • You need side effects only → use forEach().
//   • You need to transform every element → use map().
//   • You need one final accumulated value → use reduce().
//
// In robotics and embedded systems, filter() is especially useful for:
//   • Keeping only unsafe sensor readings
//   • Selecting active alarms / faults
//   • Removing noisy or invalid measurements
//   • Keeping only valid actuator or pin configurations
//   • Building safe sublists before sending commands downstream

// ──────────────────────
// filter() method output
// ──────────────────────
// filter() always returns a NEW array.
// The new array may have:
//   • fewer elements than the original
//   • the same number of elements
//   • zero elements (empty array)
//
// The original array is never modified.

// ────────────────────────────────────────────────────────────────────────────
// 10) The find(), includes(), some() and every() methods – checking conditions
// ────────────────────────────────────────────────────────────────────────────
// These methods are commonly used when the goal is not to transform an array,
// but to ASK A QUESTION about its contents.
//
//   • find()      → returns the FIRST element that matches a condition
//   • includes()  → returns true if the array contains a given value
//   • some()      → returns true if AT LEAST ONE element matches a condition
//   • every()     → returns true only if ALL elements match a condition
//
// All four methods are non-mutating: they never modify the original array.
//
// Modern JavaScript style notes:
//   • find(), some(), and every() use a callback function.
//   • Arrow functions are the most common callback style in modern JS.
//   • find() is often paired with optional chaining (?.) and nullish coalescing (??)
//     because it may return undefined when no element matches.
//   • includes() does not use a callback; it directly checks whether a specific
//     value exists in the array.

// ─────────────
// find() method
// ─────────────
// find() returns the FIRST element whose callback evaluates to true.
// If no element matches, it returns undefined.
//
// Syntax:
//   const match = array.find((element, index, array) => condition);

console.log("\n─────────────");
console.log("find() method");
console.log("─────────────");

// Robotics use case: locating the first sensor that needs service.
// A diagnostics table stores sensor metadata. The maintenance routine needs
// the first sensor whose health state is not "OK".

const sensor_registry = [
    { id: 0, name: "front_ultrasonic", health: "OK" },
    { id: 1, name: "left_ir",          health: "OK" },
    { id: 2, name: "rear_encoder",     health: "FAULT" },
    { id: 3, name: "imu",              health: "OK" }
];

const first_faulty_sensor = sensor_registry.find(sensor => sensor.health !== "OK");

console.log("First faulty sensor:", first_faulty_sensor);
console.log(
    "Sensor requiring service:",
    `${first_faulty_sensor?.name ?? "none"} (${first_faulty_sensor?.health ?? "N/A"})`
);

// ─────────────────
// includes() method
// ─────────────────
// includes() checks whether an array contains a specific value.
// It returns true or false.
//
// Syntax:
//   const exists = array.includes(value);
//   const exists = array.includes(value, fromIndex); // optional start index

console.log("\n─────────────────");
console.log("includes() method");
console.log("─────────────────");

// Embedded systems use case: validating the current operating mode.
// Firmware receives a mode string from a serial command parser.
// The mode is accepted only if it belongs to the allowed set.

const allowed_modes = ["IDLE", "ARMED", "CALIBRATION", "SHUTDOWN"];
const requested_mode = "CALIBRATION";

const is_valid_mode = allowed_modes.includes(requested_mode);

console.log("Allowed modes  :", allowed_modes);
console.log("Requested mode :", requested_mode);
console.log("Mode accepted? :", is_valid_mode);

// ─────────────
// some() method
// ─────────────
// some() returns true if AT LEAST ONE element satisfies the condition.
// It stops as soon as it finds the first match.
//
// Syntax:
//   const result = array.some((element, index, array) => condition);

console.log("\n─────────────");
console.log("some() method");
console.log("─────────────");

// Robotics use case: checking whether any motor is overheating.
// If any motor exceeds the safe temperature threshold, the controller must
// raise an alert and possibly reduce power.

const motor_temperatures_c = [58, 63, 71, 66];
const overheat_limit_c = 70;

const any_motor_overheating = motor_temperatures_c.some(temp => temp > overheat_limit_c);

console.log("Motor temperatures (°C):", motor_temperatures_c);
console.log("Overheat limit (°C)   :", overheat_limit_c);
console.log("Any motor overheating?:", any_motor_overheating);

// ──────────────
// every() method
// ──────────────
// every() returns true only if ALL elements satisfy the condition.
// It stops as soon as one element fails the test.
//
// Syntax:
//   const result = array.every((element, index, array) => condition);

console.log("\n──────────────");
console.log("every() method");
console.log("──────────────");

// Embedded systems use case: confirming that all ADC samples are inside the
// valid 12-bit range before the control loop uses them.
// If even one sample is invalid, the dataset should be rejected.

const adc_packet = [1023, 2047, 3072, 4095];

const all_samples_valid = adc_packet.every(sample => sample >= 0 && sample <= 4095);

console.log("ADC packet        :", adc_packet);
console.log("All samples valid?:", all_samples_valid);

// ────────────────────────────────────────────────────────────────────────────
// When to use each one
// ────────────────────────────────────────────────────────────────────────────
// Use find() when:
//   • You need the FIRST matching element itself.
//   • You want to retrieve an object, not just a true/false answer.
//
// Use includes() when:
//   • You need to know whether an exact primitive value exists in the array.
//   • The check is simple membership: mode names, IDs, labels, states, etc.
//
// Use some() when:
//   • You want a boolean answer to the question: "Does at least one match?"
//   • You are checking for alarms, faults, hazards, or threshold violations.
//
// Use every() when:
//   • You want a boolean answer to the question: "Do all elements pass?"
//   • You are validating a full dataset before continuing processing.
//
// Quick comparison:
//   • find()     → returns one element or undefined
//   • includes() → returns true/false for exact value membership
//   • some()     → returns true/false if at least one element passes
//   • every()    → returns true/false if all elements pass

// ────────────────────────────────────────────────────────────────────────────
// Method output summary
// ────────────────────────────────────────────────────────────────────────────

console.log("\n──────────────────────────────");
console.log("find / includes / some / every");
console.log("──────────────────────────────");

const test_values = [10, 20, 30, 40];

console.log("find(v > 25)   :", test_values.find(v => v > 25));   // 30
console.log("includes(20)   :", test_values.includes(20));        // true
console.log("some(v > 35)   :", test_values.some(v => v > 35));   // true
console.log("every(v >= 10) :", test_values.every(v => v >= 10)); // true
console.log("Original array :", test_values);                     // unchanged

/**
 * ━━━━━━━━━━━━━━━━━━━
 * String manipulation 
 * ━━━━━━━━━━━━━━━━━━━
 */

console.log("\n━━━━━━━━━━━━━━━━━━━");
console.log("String manipulation");
console.log("━━━━━━━━━━━━━━━━━━━");

// ──────────────────────────────────────────
// 1) String.slice() – extracting a substring
// ──────────────────────────────────────────
// String.slice(start, end) works identically to Array.slice():
//   • start  – index of the first character to include (inclusive).
//   • end    – index at which to stop (exclusive). If omitted, copies to the
//              end of the string.
//   • Negative indices count from the end of the string.
// The original string is never modified (strings in JavaScript are immutable).
//
// Syntax:
//   const sub = str.slice(start, end);

console.log("\n──────────────────────────────────────────");
console.log("1) String.slice() – extracting a substring");
console.log("──────────────────────────────────────────");

// ─── Robotics use case 1: extracting a numeric payload from a fixed-width protocol frame ───
// A serial protocol sends frames in the format: "CMD:MOVE;POS:+0123.45;CHK:A3"
// The position value always occupies characters 13–20. slice() cuts it out
// directly by index without any splitting or regex, then parseFloat() converts it.

const serial_frame = "CMD:MOVE;POS:+0123.45;CHK:A3";
                    
//                    CMD:MOVE;POS:+0123.45;CHK:A3
//                                 ^       ^
//                                13      21
//                    index 13 ('+') to index 21 (';')

const position_str = serial_frame.slice(13, 21); // "+0123.45"
const position_val = parseFloat(position_str);

console.log("\n── slice with start + end: extracting position from protocol frame ──");
console.log("Full frame   :", serial_frame);
console.log("Slice(13,21) :", position_str); // "+0123.45"
console.log("Parsed value :", position_val,  "mm");

// ─── Robotics use case 2: reading the last N characters (negative start) ───
// A CAN bus message string ends with a 2-character hex checksum.
// Using a negative start index extracts the suffix regardless of message length.

const can_message = "0x18FF50E5:DATA:FF0A3C:CS:B7";
const checksum    = can_message.slice(-2); // last 2 characters

console.log("\n── slice(-2): extracting trailing checksum ──");
console.log("CAN message :", can_message);
console.log("Checksum    :", checksum); // "B7"

// ─── slice(" ") – splitting a string on the first space ───
// When the separator argument is a single space character " ", slice() is typically
// combined with indexOf(" ") to split a string at the first word boundary.
// This is a common pattern when parsing command strings received over a
// serial or wireless link where the first token is a command keyword and the
// rest is the argument payload.

console.log("\n─── slice with indexOf(\" \"): splitting command keyword from payload ───");

// A teleoperation system receives text commands over a UDP socket.
// Format: "<COMMAND> <PARAMETERS>"
// – MOVE 100 -45 0   → move to coordinates (100, -45, 0)
// – SPEED 0.75        → set drive speed to 75 %

const raw_command_1  = "MOVE 100 -45 0";
const raw_command_2  = "SPEED 0.75";

const space_index_1  = raw_command_1.indexOf(" "); // 4
const command_word_1 = raw_command_1.slice(0, space_index_1);  // "MOVE"
const parameters_1   = raw_command_1.slice(space_index_1 + 1); // "100 -45 0"

const space_index_2  = raw_command_2.indexOf(" ");
const command_word_2 = raw_command_2.slice(0, space_index_2);  // "SPEED"
const parameters_2   = raw_command_2.slice(space_index_2 + 1); // "0.75"

console.log("Raw command 1 :", raw_command_1);
console.log("  keyword     :", command_word_1); // "MOVE"
console.log("  parameters  :", parameters_1);   // "100 -45 0"

console.log("Raw command 2 :", raw_command_2);
console.log("  keyword     :", command_word_2); // "SPEED"
console.log("  parameters  :", parameters_2);   // "0.75"

// ── split("") – splitting a string into individual characters ──
// Passing an empty string "" to split() (not slice()) produces an array of
// single characters. Here, using slice in conjunction with split("") allows
// character-by-character processing.
//
// A more direct use of slice("") equivalent: split("") to decompose a string.
// Robotics use case: a firmware log entry uses a compact hex byte string to
// represent a sensor status register. Each character is a hex nibble.
// Splitting on "" yields each nibble as a separate element for bitfield parsing.

console.log("\n── split(\"\"): decomposing a hex status register into nibbles ──");

const status_register_hex = "A3F7"; // 16-bit status register in hex
const nibbles = status_register_hex.split(""); // ["A", "3", "F", "7"]

console.log("Status register :", status_register_hex);
console.log("Nibbles         :", nibbles); // ["A", "3", "F", "7"]
console.log("Count           :", nibbles.length); // 4

nibbles.forEach((nibble, i) => {
    console.log(`  Nibble ${i} : 0x${nibble} = ${parseInt(nibble, 16)} (dec)`);
});

// ────────────────────────────────────────────────────────────────
// 2) String.search() – finding a pattern with a regular expression
// ────────────────────────────────────────────────────────────────
// search() tests a string against a regular expression (regex) and returns the
// index of the first match, or -1 if no match is found.
//
// Syntax:
//   const index = str.search(/pattern/flags);
//   const index = str.search(new RegExp("pattern", "flags"));
//
// ARGUMENT – regular expression (regex):
//   search() takes a REGULAR EXPRESSION as its argument (not a plain string).
//   A regular expression (or regex) is a formal language for describing patterns
//   in text. It is written between two forward slashes: /pattern/
//   with optional flags after the closing slash (e.g., /pattern/i for
//   case-insensitive matching, /pattern/g for global search).
//
//   Regular expressions are one of the most powerful and universal tools in
//   programming:
//
//     • They appear in virtually every programming language (JavaScript, Python,
//       C, C++, Java, Go, Rust, …) with a nearly identical syntax.
//     • They are the foundation of text processing in compilers and interpreters,
//       shell scripts, log analysis tools, network packet filters (e.g. tcpdump,
//       Wireshark display filters), and firmware diagnostic parsers.
//     • In robotics and embedded systems, regexes are used to validate incoming
//       serial / UDP / CAN frames, extract sensor values from structured log
//       strings, and parse configuration files where hand-coded parsers would
//       be brittle and verbose.
//     • Learning regex unlocks a reusable skill that transfers across domains:
//       the same pattern you write to validate a sensor frame in JavaScript
//       works (with minor dialect differences) in Python scripts that post-process
//       rosbag logs, in C++ with <regex>, or in a grep command on the terminal.
//
//   Common regex pattern elements:
//     \d      → any digit (0–9)
//     \w      → any word character (letters, digits, underscore)
//     \s      → any whitespace character
//     [A-Z]   → any uppercase letter
//     +       → one or more of the preceding element
//     *       → zero or more
//     ?       → zero or one (makes the preceding element optional)
//     ^       → start of string
//     $       → end of string
//     .       → any character except newline
//
//   search() is the simplest regex-based string method; other methods that also
//   accept a regex include match(), matchAll(), replace(), replaceAll(), and split().

// ──────────────────────────────────────────────────────────────────
// 3) String.toLowerCase() and String.toUpperCase() – case conversion
// ──────────────────────────────────────────────────────────────────
// toLowerCase() converts all characters of a string to lower case.
// toUpperCase() converts all characters of a string to upper case.
// Both methods return a NEW string; the original is not modified.
//
// Syntax:
//   const lower = str.toLowerCase();
//   const upper = str.toUpperCase();

console.log("\n──────────────────────────────────");
console.log("3) toLowerCase() and toUpperCase()");
console.log("──────────────────────────────────");

// ── Robotics use case: normalizing an incoming command string ──
// A voice-command module on a service robot transcribes speech to text.
// The transcription may mix upper and lower case depending on the engine.
// Before comparing against the command registry, the string is normalized
// to lower case so the comparison is case-insensitive.

const voice_input = "Move Forward PLEASE";
const normalized  = voice_input.toLowerCase();

console.log("\n── toLowerCase: normalizing a voice command ──");
console.log("Raw input  :", voice_input);
console.log("Normalized :", normalized); // "move forward please"

// ── Embedded systems use case: formatting an alarm message for display ──
// An alarm originated internally as a lowercase log token.
// Before showing it on the operator HMI, the firmware converts it to
// upper case so it appears as a prominent alert.

const alarm_token   = "motor_overcurrent";
const alarm_display = alarm_token.toUpperCase();

console.log("\n── toUpperCase: promoting an alarm token for the HMI display ──");
console.log("Internal token :", alarm_token);
console.log("HMI display    :", alarm_display); // "MOTOR_OVERCURRENT"

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Object values and property access
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Object values and property access");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// ─────────────────────────────────────────────────────────────────
// 1) Accessing object properties – dot notation vs bracket notation
// ─────────────────────────────────────────────────────────────────
// JavaScript objects store data as key–value pairs.
// There are two syntaxes for reading or writing a property:
//
//   Dot notation      → object.propertyName
//   Bracket notation  → object["propertyName"]
//
// Both notations read from (and write to) the exact same property.
// The difference is purely syntactic:
//
//   • Dot notation is shorter and more readable. Use it whenever the property
//     name is a valid identifier (no spaces, no hyphens, does not start with
//     a digit) and is known at write time.
//
//   • Bracket notation accepts ANY string as the key, including names with
//     spaces, hyphens, or names stored in a variable. Use it when:
//       – The property name contains special characters or spaces.
//       – The property name is computed at runtime (e.g. stored in a variable).
//       – You are iterating over properties dynamically.

console.log("\n─────────────────────────────────────────────────────");
console.log("1) Property access – dot notation vs bracket notation");
console.log("─────────────────────────────────────────────────────");

// ─── Robotics use case: reading IMU sensor data ───
// An IMU (Inertial Measurement Unit) is described by an object containing its
// identifier, model, firmware version, and current readings.

const imu_sensor = {
    id           : 2,
    name         : "imu_main",
    model        : "MPU-6050",
    firmware_ver : "1.4.2",
    roll_deg     : 3.7,
    pitch_deg    : -1.2,
    yaw_deg      : 178.5
};

// ─── Dot notation ───
console.log("\n─── Dot notation ───");
console.log("id          :", imu_sensor.id);           // 2
console.log("name        :", imu_sensor.name);         // "imu_main"
console.log("model       :", imu_sensor.model);        // "MPU-6050"
console.log("firmware    :", imu_sensor.firmware_ver); // "1.4.2"
console.log("roll (deg)  :", imu_sensor.roll_deg);     // 3.7
console.log("pitch (deg) :", imu_sensor.pitch_deg);    // -1.2
console.log("yaw (deg)   :", imu_sensor.yaw_deg);      // 178.5

// ─── Bracket notation with a string literal ───
// Functionally identical to dot notation; useful for property names that contain
// special characters such as hyphens that would not be valid in dot notation.

console.log("\n─── Bracket notation (string literal) ───");
console.log("id          :", imu_sensor["id"]);           // 2
console.log("name        :", imu_sensor["name"]);         // "imu_main"
console.log("model       :", imu_sensor["model"]);        // "MPU-6050"
console.log("firmware    :", imu_sensor["firmware_ver"]); // "1.4.2"
console.log("roll (deg)  :", imu_sensor["roll_deg"]);     // 3.7
console.log("pitch (deg) :", imu_sensor["pitch_deg"]);    // -1.2
console.log("yaw (deg)   :", imu_sensor["yaw_deg"]);      // 178.5

// ── Bracket notation with a variable key ──
// This is the main practical advantage of bracket notation: the property name
// can be computed at runtime. A control loop can select which axis to read
// based on a variable supplied by the caller, without writing a separate
// branch for each axis.

console.log("\n─── Bracket notation (variable key) ───");

const axes = ["roll_deg", "pitch_deg", "yaw_deg"];

axes.forEach(axis => {
    console.log(`${axis.padEnd(12)}: ${imu_sensor[axis]}°`);
});

// ── Bracket notation with special-character keys ──
// Dot notation would be a syntax error for keys that contain hyphens or spaces.
// Bracket notation handles them transparently.

console.log("\n─── Bracket notation (keys with hyphens / spaces – invalid for dot) ───");

const device_meta = {
    "device-id"   : "RBT-004",
    "hw-revision" : "rev3",
    "last status" : "nominal"
};

// These would cause a SyntaxError with dot notation:
// device_meta.device-id   → interpreted as subtraction
// device_meta.last status → invalid identifier (space)

console.log("device-id   :", device_meta["device-id"]);   // "RBT-004"
console.log("hw-revision :", device_meta["hw-revision"]); // "rev3"
console.log("last status :", device_meta["last status"]); // "nominal"

// ─────────────────────────────────────────────
// 2) Object.keys() – getting all property names
// ─────────────────────────────────────────────
// Object.keys(obj) returns a NEW array containing the names (keys) of all own,
// enumerable properties of obj, in insertion order.
//
// Syntax:
//   const keys = Object.keys(obj);
//
// It does NOT include inherited properties (from prototypes).
// The returned array can be iterated with forEach(), map(), filter(), etc.

console.log("\n────────────────────────────────────────────────");
console.log("2) Object.keys() – retrieving all property names");
console.log("────────────────────────────────────────────────");

// ── Robotics use case: enumerating the fields of a robot status snapshot ──
// A status report object is built at runtime. Before serialising it to JSON
// and sending it over a TCP socket, the diagnostics module lists every field
// name so the receiver can validate that no mandatory key is missing.

const robot_status = {
    timestamp_ms   : 1712648400000,
    battery_pct    : 87,
    velocity_ms    : 0.42,
    heading_deg    : 95.3,
    mode           : "AUTONOMOUS",
    active_faults  : 0
};

const status_keys = Object.keys(robot_status);

console.log("\nRobot status object :", robot_status);
console.log("Keys                :", status_keys);
// ["timestamp_ms", "battery_pct", "velocity_ms", "heading_deg", "mode", "active_faults"]
console.log("Number of fields    :", status_keys.length); // 6

// ── Using Object.keys() to iterate over all properties ──
// Combining Object.keys() with bracket notation lets you loop over every
// property without knowing the field names in advance – useful when the
// object schema varies at runtime.

console.log("\n─── Iterating over status fields with Object.keys() ───");
status_keys.forEach(key => {
    console.log(`  ${key.padEnd(16)}: ${robot_status[key]}`);
});

// ── Embedded systems use case: checking for required configuration keys ──
// A configuration object is loaded from a JSON file at boot.
// Before proceeding, firmware verifies that all mandatory keys are present.

console.log("\n── Object.keys(): checking for required config keys ──");

const loaded_config = {
    baud_rate      : 115200,
    can_bitrate    : 500000,
    watchdog_ms    : 50
    // "log_level" key is intentionally missing to simulate an incomplete config
};

const required_keys = ["baud_rate", "can_bitrate", "watchdog_ms", "log_level"];
const present_keys  = Object.keys(loaded_config);

required_keys.forEach(key => {
    const found = present_keys.includes(key);
    console.log(`  ${key.padEnd(16)}: ${found ? "✓ present" : "✗ MISSING"}`);
});

// ────────────────────────────────────────────────
// 3) Object.values() – getting all property values
// ────────────────────────────────────────────────
// Object.values(obj) returns a NEW array containing the values of all own,
// enumerable properties of obj, in the same insertion order as Object.keys().
//
// Syntax:
//   const values = Object.values(obj);
//
// The returned array can be passed directly to array methods such as
// reduce(), filter(), some(), and every().

console.log("\n───────────────────────────────────────────────────");
console.log("3) Object.values() – retrieving all property values");
console.log("───────────────────────────────────────────────────");

// ─── Robotics use case: computing total power consumption ───
// Each motor in a mobile base is described by its power draw in watts.
// Object.values() extracts all watt values so reduce() can sum them in one line.

const motor_power_w = {
    front_left  : 12.4,
    front_right : 11.9,
    rear_left   : 13.1,
    rear_right  : 12.7
};

const power_values   = Object.values(motor_power_w);
const total_power_w  = power_values.reduce((sum, w) => sum + w, 0);

console.log("\nMotor power object (W) :", motor_power_w);
console.log("Values array           :", power_values);             // [12.4, 11.9, 13.1, 12.7]
console.log("Total power draw (W)   :", total_power_w.toFixed(1)); // 50.1

// ─── Embedded systems use case: checking that all sensor voltages are in range ───
// A power-monitoring object stores the supply voltages read from multiple rails.
// Object.values() feeds every() to confirm all rails are within the ±5 % band.

console.log("\n── Object.values(): all power-rail voltages within spec? ──");

const supply_voltages_v = {
    rail_3v3  : 3.29,
    rail_5v   : 5.01,
    rail_12v  : 11.97,
    rail_neg5 : -5.03
};

const nominal_v       = { rail_3v3: 3.3, rail_5v: 5.0, rail_12v: 12.0, rail_neg5: -5.0 };
const voltage_tol_pct = 0.05; // 5 %

const all_in_spec = Object.keys(supply_voltages_v).every(rail => {
    const measured = supply_voltages_v[rail];
    const nominal  = nominal_v[rail];
    return Math.abs(measured - nominal) / Math.abs(nominal) <= voltage_tol_pct;
});

console.log("Supply voltages :", supply_voltages_v);
console.log("All rails in spec (±5%) :", all_in_spec); // true

/**
 * ━━━━━━━━━━━━━
 * Math and Date
 * ━━━━━━━━━━━━━
 */

console.log("\n━━━━━━━━━━━━━");
console.log("Math and Date");
console.log("━━━━━━━━━━━━━");

// ──────────────────────────────────────────────────────────────
// Math – built-in object with mathematical constants and methods
// ──────────────────────────────────────────────────────────────

// ─── constants ───
console.log("\n── Math constants ──");
console.log("Math.PI  :", Math.PI);   // 3.14159…  – circle ratio, used for arc/rotation calculations
console.log("Math.E   :", Math.E);    // 2.71828…  – Euler's number, used in exponential decay models

// ─── rounding ───
console.log("\n── Rounding ──");
console.log("Math.round(4.6) :", Math.round(4.6)); // 5  – nearest integer
console.log("Math.floor(4.9) :", Math.floor(4.9)); // 4  – round DOWN (e.g. grid-cell index)
console.log("Math.ceil(4.1)  :", Math.ceil(4.1));  // 5  – round UP  (e.g. buffer allocation)
console.log("Math.trunc(4.9) :", Math.trunc(4.9)); // 4  – drop fractional part (no rounding)

// ─── absolute value, power, square root ───
console.log("\n── abs / pow / sqrt ──");
let error_signal = -2.7; // PID error term (can be negative)
console.log("Math.abs(-2.7)  :", Math.abs(error_signal));  // 2.7  – magnitude regardless of sign
console.log("Math.pow(2, 10) :", Math.pow(2, 10));         // 1024 – 2^10 (e.g. ADC full-scale count)
console.log("Math.sqrt(144)  :", Math.sqrt(144));           // 12   – Euclidean distance component

// euclidean distance between two 2-D waypoints
let dx = 30, dy = 40;
let dist = Math.sqrt(dx * dx + dy * dy);
console.log(`Distance (${dx}, ${dy}) → origin: ${dist} mm`); // 50 mm

// ─── min / max ───
console.log("\n── min / max ──");
let sensor_a = 18, sensor_b = 42, sensor_c = 7;
console.log("Closest obstacle :", Math.min(sensor_a, sensor_b, sensor_c), "cm"); // 7
console.log("Farthest reading :", Math.max(sensor_a, sensor_b, sensor_c), "cm"); // 42

// clamp a PWM duty cycle to the valid range 0–100 %
let raw_pwm = 130;
let clamped_pwm = Math.min(100, Math.max(0, raw_pwm));
console.log(`PWM clamped (${raw_pwm}%) → ${clamped_pwm}%`); // 100

// ─── trigonometry (arguments in radians) ───
console.log("\n── trigonometry ──");
let angle_rad = Math.PI / 4; // 45°
console.log("sin(45°) :", Math.sin(angle_rad).toFixed(4)); // 0.7071
console.log("cos(45°) :", Math.cos(angle_rad).toFixed(4)); // 0.7071
console.log("atan2(1,1) rad :", Math.atan2(1, 1).toFixed(4)); // 0.7854 – heading from dx/dy

// ─── random ───
console.log("\n── Math.random() ──");
// Math.random() returns a float in [0, 1)
// Scale to an integer in [min, max] with: Math.floor(Math.random() * (max - min + 1)) + min
let rand_delay_ms = Math.floor(Math.random() * 100) + 1; // 1–100 ms jitter
console.log("Random jitter (ms) :", rand_delay_ms);

// ─────────────────────────────────────────
// Date – built-in object for time and dates
// ─────────────────────────────────────────
console.log("\n── Date ──");

// new Date() → current local date and time
let now = new Date();
console.log("Current date/time :", now.toString());

// ─── extracting components ───
console.log("\n── Extracting date/time components ──");
console.log("Full year  :", now.getFullYear());       // e.g. 2026
console.log("Month (0-indexed) :", now.getMonth());   // 0 = January … 11 = December
console.log("Day of month :", now.getDate());         // 1–31
console.log("Hours      :", now.getHours());          // 0–23
console.log("Minutes    :", now.getMinutes());        // 0–59
console.log("Seconds    :", now.getSeconds());        // 0–59

// ─── unix timestamp ───
// getTime() returns milliseconds elapsed since 1 Jan 1970 00:00:00 UTC.
// Commonly used to timestamp sensor readings, log events, or measure elapsed time.
console.log("\n── Unix timestamp (ms) ──");
let t_start = Date.now(); // equivalent to new Date().getTime()
console.log("Timestamp (ms) :", t_start);

// measure elapsed time for a simulated computation
let sum = 0;
for (let i = 0; i < 1_000_000; i++) sum += i;
let elapsed_ms = Date.now() - t_start;
console.log("Loop sum         :", sum);
console.log("Elapsed time (ms):", elapsed_ms);

// ─── constructing a specific date ───
console.log("\n── Constructing a specific date ──");
let launch_date = new Date(2026, 3, 9, 10, 0, 0); // month is 0-indexed: 3 = April
console.log("Launch date :", launch_date.toLocaleDateString());  // e.g. "4/9/2026"
console.log("Launch time :", launch_date.toLocaleTimeString());  // e.g. "10:00:00 AM"
console.log("ISO 8601    :", launch_date.toISOString());         // "2026-04-09T…"