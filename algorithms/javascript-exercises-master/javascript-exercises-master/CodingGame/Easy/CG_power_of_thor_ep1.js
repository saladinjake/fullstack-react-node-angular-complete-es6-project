// Goal: your program must allow Thor to reach the light of power. 
// Thor moves on a map which is 40 wide by 18 high. Note that the coordinates 
// (X and Y) start at the top left! This means the most top left cell has the 
// coordinates "X=0,Y=0" and the most bottom right one has the coordinates "X=39,Y=17".
var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    distX = initialTX - lightX;
    distY = initialTY - lightY;

    direction = "";
    
    if (distY < 0) {
        direction += "S"
        initialTY++
    } else if (distY > 0) {
        direction += "N"
        initialTY--
    }
    
    if (distX < 0) {
        direction += "E"
        initialTX++
    } else if (distX > 0) {
        direction += "W"
        initialTX--
    }
    
    print(direction);
}
