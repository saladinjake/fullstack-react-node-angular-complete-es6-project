// See other solution: https://codility.com/demo/results/trainingFN5RVT-XQ4/
// My solution: https://app.codility.com/demo/results/trainingWZVVDF-TPD/

/* Solution with XOR is more performant than the one using a dict
See: http://www.xcprod.com/titan/XCSB-DOC/binary_xor.html
 */
function solution1(array) {
    if (array.length === 1) {
        return array[0];
    }

    int_dict = {};
    for (i = 0; i < array.length; i++) {
        int = array[i];
        if (!(int in int_dict)) {
            int_dict[int] = 1;
        } else {
            int_dict[int]++;
        }
    }
    for (let key in int_dict) {
        if (int_dict[key] % 2 === 1) {
            return parseInt(key);
        }
    }
}

function solution2(array) {
    // write your code in JavaScript (Node.js 4.0.0)

    var agg = 0;

    for(var i=0; i<array.length; i++) {
        agg ^= array[i]; // ==> agg = agg^array[i] (^ is the XOR operator)
        console.log(agg)
    }

    return agg;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]))