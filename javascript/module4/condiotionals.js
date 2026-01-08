/**
 * Conditionals in JavaScript
 *
 * Goal: learn how to write conditionals by using robotics-style examples.
 * 
 * We will cover:
 *  - Single selection:      if
 *  - Double selection:      if / else
 *  - Multiple selection:    else if chains and switch
 */

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Conditionals in JavaScript");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log("\n───────────────────────");
console.log("1) Single selection: if");
console.log("───────────────────────");

// robotics example: obstacle sensor (ultrasonic / lidar) distance in centimeters
let front_distance_cm = 18;
let stop_distance_cm = 20;

console.log("front_distance_cm =", front_distance_cm);
console.log("stop_distance_cm  =", stop_distance_cm);

// if the robot is too close to an obstacle, it should stop
if (front_distance_cm < stop_distance_cm) {
	console.log("Decision: STOP (obstacle too close)");
	console.log("Actuator: motor_power = 0% (simulate)");
}

// if condition is false, nothing happens and the program continues
console.log("Program continues after the if...");

console.log("\n──────────────────────────────");
console.log("2) Double selection: if / else");
console.log("──────────────────────────────");

// robotics example: battery safety.
let battery_percent = 12;
let minimum_safe_battery_percent = 15;

console.log("battery_percent =", battery_percent);

if (battery_percent >= minimum_safe_battery_percent) {
	console.log("Decision: OK to move");
	console.log("Actuator: drive_enabled = true (simulate)");
} else {
	console.log("Decision: NOT OK to move (battery too low)");
	console.log("Actuator: drive_enabled = false (simulate)");
	console.log("Action: return-to-base / dock request (simulate)");
}

console.log("\n─────────────────────────────────────────────");
console.log("3) else-if chain: multiple choices (one path)");
console.log("─────────────────────────────────────────────");

// robotics example: motor temperature protection
// typical pattern: define thresholds, then classify into states
let motor_temp_c = 72;

console.log("motor_temp_c =", motor_temp_c);

if (motor_temp_c < 60) {
	console.log("State: COOL → normal driving");
	console.log("Actuator: power_limit = 100% (simulate)");
} else if (motor_temp_c < 75) {
	console.log("State: WARM → reduce speed a bit");
	console.log("Actuator: power_limit = 70% (simulate)");
} else if (motor_temp_c < 85) {
	console.log("State: HOT → heavy limiting + warning");
	console.log("Actuator: power_limit = 40% (simulate)");
} else {
	console.log("State: CRITICAL → emergency stop");
	console.log("Actuator: power_limit = 0% (simulate)");
}

console.log("\n───────────────────────────────────────");
console.log("4) Compound conditions (AND / OR / NOT)");
console.log("───────────────────────────────────────");

// robotics example: allow movement only if multiple safety checks pass
let estop_pressed = false;
let cliff_detected = false;
let radio_link_ok = true;

console.log("estop_pressed =", estop_pressed);
console.log("cliff_detected =", cliff_detected);
console.log("radio_link_ok  =", radio_link_ok);

// AND: all must be true
// NOT: invert a boolean
if (!estop_pressed && !cliff_detected && radio_link_ok) {
	console.log("Decision: SAFE → movement allowed");
} else {
	console.log("Decision: UNSAFE → movement blocked");
    // non-exclusive conditions
	if (estop_pressed) {
		console.log("Reason: E-STOP is pressed");
	}
	if (cliff_detected) {
		console.log("Reason: cliff detected (drop-off sensor)");
	}
	if (!radio_link_ok) {
		console.log("Reason: radio link lost");
	}
}

console.log("\n────────────────────────────────────────");
console.log("5) Nested if: decisions inside decisions");
console.log("────────────────────────────────────────");

// robotics example: gripper control based on object detection and fragility
let object_detected = true;
let object_fragile = true;

console.log("object_detected =", object_detected);
console.log("object_fragile  =", object_fragile);
if (object_detected) {
	console.log("Decision: attempt grasp");

	if (object_fragile) {
		console.log("Grasp mode: GENTLE");
		console.log("Actuator: gripper_force = low (simulate)");
	} else {
		console.log("Grasp mode: STANDARD");
		console.log("Actuator: gripper_force = medium (simulate)");
	}
} else {
	console.log("Decision: do not grasp (no object)");
}

console.log("\n────────────────────────────────────────────");
console.log("6) switch: clean branching on a single value");
console.log("────────────────────────────────────────────");

// robotics example: robot mode selector
// switch is great when you compare ONE variable to many exact values
let robot_mode = "AUTO"; // Try: "IDLE", "AUTO", "TELEOP", "DIAGNOSTICS"

console.log("robot_mode =", robot_mode);

switch (robot_mode) {
	case "IDLE":
		console.log("Mode: IDLE → motors disabled, waiting");
		break;
	case "AUTO":
		console.log("Mode: AUTO → follow mission plan (simulate)");
		break;
	case "TELEOP":
		console.log("Mode: TELEOP → accept remote joystick commands (simulate)");
		break;
	case "DIAGNOSTICS":
		console.log("Mode: DIAGNOSTICS → run checks (simulate)");
		break;
	default:
		console.log("Mode: UNKNOWN → fail safe (treat as IDLE)");
		break;
}

console.log("\n──────────────────────────────────");
console.log("7) Common conditional tips (quick)");
console.log("──────────────────────────────────");

console.log("- Prefer strict equality: === and !==");
console.log("- Put the most common / safest case first (especially in else-if chains)");
console.log("- Use clear thresholds and names: stop_distance_cm, minimum_safe_battery_percent");
console.log("- In switch: remember break (otherwise it falls through)");