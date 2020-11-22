/* Compute Fibonacci series using recursion
Note: very slow for large numbers. */
function fib_rec(n) {
    if (n <= 2) {
        return 1;
    }
    return fib_rec(n-1) + fib_rec(n-2)
}

/* Compute Fibonacci series using recursion
while avoiding repeated computations with the
help of memoization. */
var fib_memory = [1, 1];
function fib_rec_mem(n) {
    if (fib_memory[n-1] === undefined) {
        fib_memory[n-1] = fib_rec_mem(n-1) + fib_rec_mem(n-2);
    }
    return fib_memory[n-1];
}

/* Compute Fibonacci series using recursion
while minimizing space complexity (at the expense
of more operations to manipulate the array */
function fib_iter(n) {
    if (n <= 2) {
        return 1;
    }
    let fib = [1, 1]
    for (i = 2; i < n; i++) {
        fib.push(fib[0] + fib[1]);
        fib.shift();
    }
    return fib[1]
}

console.log(fib_rec(4));
console.log(fib_rec_mem(4));
console.log(fib_iter(4));