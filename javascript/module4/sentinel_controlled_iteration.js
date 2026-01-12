/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 
 * Sentinel-Controlled Iteration (Looping Until a Special Value)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 
 * 
 * A sentinel-controlled loop always has these essential elements:
 * 
 *      1) a sentinel value (the special value that signals termination)
 *      2) reading/obtaining an input value
 *      3) a loop-continuation condition that checks if input is NOT the sentinel
 *      4) processing the input (if not sentinel)
 *      5) reading the next input value
 */

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Example 1 (Robotics): Robot scanning packages until "STOP" barcode is found (while loop)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * Scenario:
 * 
 * A sorting robot scans package barcodes coming down a conveyor belt.
 * When it scans the special "STOP" barcode, it knows the batch is complete.
 * The robot doesn't know in advance how many packages are in the batch.
 */

// 1) sentinel value: the special barcode "STOP" signals the end
const sentinel_barcode = "STOP";

// simulated package barcodes on the conveyor belt
const package_barcodes = ["PKG001", "PKG002", "PKG003", "PKG004", "STOP", "PKG005"];

let package_index = 0;
let packages_scanned = 0;

console.log("Robot starting package scan...");

// 2) read the first barcode
let current_barcode = package_barcodes[package_index];
package_index++;

// 3) loop-continuation condition: keep looping while current_barcode is NOT the sentinel
while (current_barcode !== sentinel_barcode) {
	// 4) process the input (scan and sort the package)
  	console.log("Scanning package: " + current_barcode);
  	packages_scanned++;
	
  	// (robot would sort the package here in a real system)
	
  	// 5) read the next barcode
  	current_barcode = package_barcodes[package_index];
  	package_index++;
}

console.log("STOP barcode detected. Batch complete.");
console.log("Total packages scanned: " + packages_scanned);

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Example 2 (Robotics): Robot receiving movement commands until "END" command (while loop)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * Scenario:
 * 
 * A delivery robot receives a series of movement commands (FORWARD, LEFT, RIGHT).
 * When it receives the "END" command, it stops accepting commands.
 * The robot doesn't know how many commands it will receive.
 */

// 1) sentinel value: the special command "END" signals termination
const sentinel_command = "END";

// simulated command sequence from a control system
const command_sequence = ["FORWARD", "FORWARD", "LEFT", "FORWARD", "RIGHT", "FORWARD", "END", "BACKWARD"];

let command_index = 0;
let commands_executed = 0;

console.log("\nRobot ready to receive movement commands...");

// 2) read the first command
let current_command = command_sequence[command_index];
command_index++;

// 3) loop-continuation condition: keep looping while current_command is NOT the sentinel
while (current_command !== sentinel_command) {
	// 4) process the input (execute the movement command)
  	console.log("Executing command: " + current_command);
  	commands_executed++;
	
  	// (robot would execute the actual movement here in a real robot)
	
  	// 5) read the next command
  	current_command = command_sequence[command_index];
  	command_index++;
}

console.log("END command received. Robot stopped.");
console.log("Total commands executed: " + commands_executed);