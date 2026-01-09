/**
 * Loops in JavaScript
 *
 * Goal: learn how to repeat actions with robotics-style examples.
 *
 * We will cover:
 *  - while loop
 *  - for loop
 *  - nested for loops
 *  - nested while loops
 *
 * Note:
 *  - No functions are used in this file (fundamentals / structured programming).
 *  - Every loop has a clear stop condition to avoid infinite loops.
 */

console.log("━━━━━━━━━━━━━━━━━━━━");
console.log("Loops in JavaScript");
console.log("━━━━━━━━━━━━━━━━━━━━");

console.log("\n──────────────────────────────────────────");
console.log("1) while: repeat until a condition changes");
console.log("──────────────────────────────────────────");

// robotics example: drive forward and keep checking front distance.
// we'll simulate the robot moving closer to an obstacle
let simulated_front_distance_cm = 120;
let stop_distance_cm = 25;

// safety cap to prevent infinite loops in this demo
let max_control_ticks = 20;
let control_tick = 0;

console.log("Start distance (cm):", simulated_front_distance_cm);
console.log("Stop distance  (cm):", stop_distance_cm);

while (simulated_front_distance_cm > stop_distance_cm && control_tick < max_control_ticks) {
	control_tick = control_tick + 1;

	// pretend this is one control cycle (e.g., 50 ms)
	console.log("Tick", control_tick, "→ distance =", simulated_front_distance_cm, "cm → motor = 30% (simulate)");

	// obstacle gets closer each tick (simulated)
	simulated_front_distance_cm = simulated_front_distance_cm - 8;
}

if (simulated_front_distance_cm <= stop_distance_cm) {
	console.log("Decision: STOP (safe distance reached)");
	console.log("Actuator: motor = 0% (simulate)");
} else {
	console.log("Decision: STOP (max ticks reached in demo)");
}

console.log("\n──────────────────────────────────────");
console.log("2) for: repeat a known number of times");
console.log("──────────────────────────────────────");

// robotics example: take N readings during sensor calibration
// (e.g., IMU bias sampling, ultrasonic averaging, line sensor calibration)
let samples_to_take = 6;
let sum_readings = 0;

console.log("Taking", samples_to_take, "calibration samples...");

for (let sample_index = 1 ; sample_index <= samples_to_take ; sample_index = sample_index + 1) {
	// simulate readings: values might come from an ADC / sensor
	let simulated_reading = 500 + (sample_index * 3); // arbitrary but predictable
	console.log("Sample", sample_index, "=", simulated_reading);
	sum_readings = sum_readings + simulated_reading;
}

let average_reading = sum_readings / samples_to_take;
console.log("Average reading =", average_reading);
console.log("Use case: set sensor baseline / bias (simulate)");

console.log("\n───────────────────────────────────────────");
console.log("3) nested for: 2D work (grid / map / image)");
console.log("───────────────────────────────────────────");

// robotics example: update an occupancy grid (very simplified)
// grid cells store a number representing confidence of obstacle presence
let grid_rows = 3;
let grid_cols = 5;

// we'll simulate a scan line across row 2 that detects obstacles in columns 2 and 4.
let scan_row = 2;
let obstacle_col_a = 2;
let obstacle_col_b = 4;

console.log("Occupancy grid update:");
console.log("rows =", grid_rows, ", cols =", grid_cols);
console.log("scan_row =", scan_row, ", obstacles at cols", obstacle_col_a, "and", obstacle_col_b);

// 2D matrix column filling logic
for (let r = 1 ; r <= grid_rows ; ++r) {
	let row_text = "";
	for (let c = 1 ; c <= grid_cols ; ++c) {
		// mark obstacles in the scanned row, otherwise mark free space
		let cell;
		if (r === scan_row && (c === obstacle_col_a || c === obstacle_col_b)) {
			cell = "X"; // obstacle
		} else {
			cell = "."; // free/unknown
		}
		row_text = row_text + cell + " ";
	}
	console.log("row", r, ":", row_text);
}

console.log("\n───────────────────────────────────────");
console.log("4) nested while: retries inside retries");
console.log("───────────────────────────────────────");

// robotics example: send multiple command packets; each packet can be retried
// real world: radio packet loss, CAN bus retries, UART timeouts
let packets_to_send = 3;
let packet_id = 1;

while (packet_id <= packets_to_send) {
	let attempt = 1;
	let max_attempts = 4;
	let ack_received = false;

	console.log("\nSending packet", packet_id);

	while (attempt <= max_attempts && ack_received === false) {
		// simulate ACK behavior: only packet 2 fails twice before succeeding
		let simulated_ack_ok;
		if (packet_id === 2 && attempt <= 2) {
			simulated_ack_ok = false;
		} else {
			simulated_ack_ok = true;
		}

		console.log("Attempt", attempt, "→ ACK =", simulated_ack_ok);
		if (simulated_ack_ok) {
			ack_received = true;
		} else {
			attempt = attempt + 1;
		}
	}

	if (ack_received) {
		console.log("Result: packet", packet_id, "delivered");
	} else {
		console.log("Result: packet", packet_id, "failed → enter safe mode (simulate)");
	}

	packet_id = packet_id + 1;
}

console.log("\n─────────────────────");
console.log("5) Quick tips (loops)");
console.log("─────────────────────");
console.log("- Always ensure your loop condition can become false");
console.log("- Use a safety cap in demos (max ticks / max attempts)");
console.log("- Prefer clear variable names: max_attempts, control_tick, samples_to_take");