// Goal: Write a program that prints the temperature closest to 0 among 
// input data. If two numbers are equally close to zero, positive integer
// has to be considered closest to zero (for instance, if the temperatures
// are -5 and 5, then display 5).
var n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

var closest_t = null;
var abs_closest_t = null;

for (var i = 0; i < n; i++) {
    var t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    
    var abs_t = Math.abs(t)
        
    if (abs_t < abs_closest_t || i === 0) {
        closest_t = t;
        abs_closest_t = abs_t;
        
    } else if (abs_t === abs_closest_t && t > 0) {
        closest_t = t;
    }
}

if (n === 0) {
    print("0");
} else {
    print(closest_t);
}
