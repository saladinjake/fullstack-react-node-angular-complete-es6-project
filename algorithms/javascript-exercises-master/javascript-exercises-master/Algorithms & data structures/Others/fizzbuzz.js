/* program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the
number and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and
five print “FizzBuzz”."
*/
function fizzbuzz(n) {
    for (i = 0; i <= n; i++) {
        let msg = i + " ==> ";

        if (i % 3 === 0) {msg += "Fizz";}
        if (i % 5 === 0) {msg += "Buzz";}
        else if (i % 3 != 0) {msg += i;}

        console.log(msg);
    }
}

fizzbuzz(50);