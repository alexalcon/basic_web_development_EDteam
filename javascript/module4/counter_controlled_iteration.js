/** 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Counter-Controlled Iteration (Looping with a Counter)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * A counter-controlled loop always has these essential elements:
 * 
 *      1) a control variable (loop counter)
 *      2) the control variable’s initial value
 *      3) a loop-continuation condition
 *      4) the control variable’s increment (applied in each iteration)
 */

/** 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Example 1 (Robotics): Move a warehouse robot forward N floor tiles (while loop)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * Scenario:
 * 
 * A warehouse robot needs to drive forward exactly 6 tiles to reach a shelf.
 * We will simulate the robot moving one tile per loop iteration.
 */

// 1) control variable (loop counter): tiles_moved
// 2) control variable’s initial value: tiles_moved starts at 0
let tiles_moved = 0;

// 3) target number of tiles to move (loop-continuation condition limit)
const target_tiles = 6;

console.log("Robot starting drive...");

// ━━━━━━━━━━
// main logic
// ━━━━━━━━━━
// 3) loop-continuation condition: keep looping while tiles_moved < target_tiles
while (tiles_moved < target_tiles) {
	console.log("Driving forward 1 tile...");

	// (robot action would happen here in a real robot)

	// 4) increment: increase tiles_moved by 1 each time through the loop
	++tiles_moved;

	console.log("Tiles moved so far: " + tiles_moved);
}

console.log("Arrived at shelf after moving " + tiles_moved + " tiles.\n\n");

/** 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Example 2 (Robotics): Tighten bolts during a maintenance check (for loop)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * Scenario:
 * 
 * A maintenance robot must tighten 5 bolts on a panel.
 * We'll simulate tightening each bolt in order from 1 to 5.
 */

const total_bolts = 5;
console.log("Maintenance robot starting bolt check...");

// ━━━━━━━━━━
// main logic
// ━━━━━━━━━━
// essential counter-controlled iteration elements (for loop):
// 1) control variable (loop counter): bolt_number
// 2) control variable's initial value: bolt_number starts at 1
// 3) loop-continuation condition: bolt_number <= total_bolts
// 4) increment: bolt_number increases by 1 each iteration (bolt_number++)
for (let bolt_number = 1; bolt_number <= total_bolts; bolt_number++) {
	console.log("Tightening bolt #" + bolt_number + "...");

	// (robot action would happen here in a real robot)

	console.log("Bolt #" + bolt_number + " tightened.");
}

console.log("All " + total_bolts + " bolts have been tightened.");