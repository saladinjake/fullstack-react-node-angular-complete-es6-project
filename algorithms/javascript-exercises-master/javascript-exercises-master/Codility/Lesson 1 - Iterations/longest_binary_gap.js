// See: https://app.codility.com/demo/results/trainingU2FQPQ-7Y4/

/* Write a function that, given a positive integer N, returns the
length of its longest binary gap. The function should return 0 if
N doesn't contain a binary gap.
For example, given N = 1041 the function should return 5, because N
has binary representation 10000010001 and so its longest binary gap
is of length 5.
 */

/* Idea: convert a decimal number into a binary number by writing down
the decimal number and to continually divide it by 2 to give a result
and a remainder of either “1” or “0” (which are the binary digits
from right to left) until the final result equals zero.
See: https://www.electronics-tutorials.ws/binary/bin_2.html
 */
function solution(decimal_number) {

    var div_result = decimal_number;
    var binary = '';
    var counter = -1; // only start counting 0s after the first 1 appeared, otherwise it is not a gap
    var max = 0;

    while (div_result > 0) {
        // Get binary digit by checking the remainder of the division by 2
        var digit = div_result % 2;

        // When there is a 1, reset counter and update max if better
        if (digit === 1) {
            if (counter > max) {
                max = counter;
            }
            counter = 0;  // once this assignment has been reached for the first time, counting 0s is possible

        // Increment counter each time there is a zero
        } else if (counter >= 0) {
            counter++;
        }

        binary = digit + binary; // build the binary digit by digit
        div_result = Math.floor(div_result / 2);  // Go to next digit by dividing by 2
    }

    console.log('number: ' + decimal_number, ' binary: ' + binary);

    return max;
}


bin = (8).toString(2);
console.log(bin)

max = solution(43);
console.log("maximum binary gap: " + max);