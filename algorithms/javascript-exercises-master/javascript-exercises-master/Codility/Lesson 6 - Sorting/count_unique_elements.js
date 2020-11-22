// My solution: https://app.codility.com/demo/results/trainingZNTV5K-RS5/
// Goal: count unique elements in array.

function solution(A) {
    seen_elements = {}
    counter = 0;
    A.forEach(function(element) {
        if (!(element in seen_elements)) {
            seen_elements[element] = true
            counter++;
        }
    })
    return counter;
}

console.log(solution([1, 2, 3, 4, 4, 2, 99]))