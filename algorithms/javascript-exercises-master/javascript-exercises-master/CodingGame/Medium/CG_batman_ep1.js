/* Goal: Your mission is to program the device so that it indicates the location
 of the next window Batman should jump to in order to reach the bombs' room as 
soon as possible. Buildings are represented as a rectangular array of windows, 
the window in the top left corner of the building is at index (0,0). 
*/ 
var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // width of the building.
var H = parseInt(inputs[1]); // height of the building.
var N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var x = parseInt(inputs[0]);
var y = parseInt(inputs[1]);

// Coordinate of bounded box
var x1 = 0;
var y1 = 0;
var x2 = W - 1;
var y2 = H - 1;

// game loop
// Use binary search on two arrays
while (true) {
    var direction = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    if (direction.includes("U")) {
        y2 = y - 1;
    } else if (direction.includes("D")) {
        y1 = y + 1;
    }
    
    if (direction.includes("L")) {
        x2 = x - 1;
    } else if (direction.includes("R")) {
        x1 = x + 1;
    }
    
    x = Math.floor((x1 + x2) / 2);
    y = Math.floor((y1 + y2) / 2);
    
    print(x + " " + y);
}
