// see https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  var number = N;
  var lastbit;

  var gapSize = 0;
  var maxGapSize = 0;
  var rightSurrounded1 = false;

  while (number > 0) {
    lastbit = number & 1;

    if (lastbit === 1) {
      if (rightSurrounded1 && gapSize > 0) {
        maxGapSize = Math.max(maxGapSize, gapSize);
      }
      rightSurrounded1 = true;
      gapSize = 0;
    } else if (lastbit === 0) {
      gapSize++;
    }

    number = number >> 1;
  }

  return maxGapSize;
}

// export solution for unit testing
if (typeof module !== 'undefined') {
  module.exports = solution;
}
