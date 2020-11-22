// My solution: https://app.codility.com/demo/results/trainingGGVUAY-8NM/

/* Goal: count the number of intersections of disks whose centres are placed
along an axis.
The discs are numbered from 0 to N − 1. An array A of N non-negative integers,
specifying the radiuses of the discs, is given. The J-th disc is drawn with
its center at (J, 0) and radius A[J].
 */

function solution(A) {
    var intersections = 0;
    var limit = 10000000;
    var discs = [];

    // Retrieve start and end of each disc's diameter
    for (let i = 0; i < A.length; i++) {
        let diameter = A[i];
        discs.push({
            "centre": i,
            "start": i - diameter,
            "end": i + diameter
        });
    }

    // Sort disc according to their diameter's start position
    discs.sort(function(a, b) {
        return a.start - b.start;
    });

    // Iterate over each disc
    for (let i = 0; i < discs.length; i++) {
        let disc = discs[i];
        let j = i + 1;

        // Key for optimization: discs with intersection are only those
        // whose diameter's start is before the current disc's diameter's end.
        while (discs[j] && disc.end >= discs[j].start) {
            intersections++;
            j++;
            if (intersections > limit) {
                return -1
            }

        }
    }
    return intersections;
}