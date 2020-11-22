// Find the path from the top left corner to the bottom right corner
// maximizing the sum of items found in each cell.

// Recursive solution:
function maxSumPathRec(matrix, x, y) {
    // Get number of rows and columns
    const N = matrix.length;
    const M = matrix[0].length;

    // Base case: bottom right corner
    if (x === M-1 && y === N-1) {
        return matrix[x][y];
    }

    // Assuming a positive number of items in each plot, otherwise this needs
    // to be negative infinity
    let maxDown = 0;
    let maxRight = 0;

    // If we are not yet at the most right column, try going right
    if (x < M-1) {
        maxRight = maxSumPathRec(matrix, x+1, y);
    }

    // If we are not yet at the bottom row, try going down
    if (y < N-1) {
        maxDown = maxSumPathRec(matrix, x, y+1);
    }

    // Take whichever gives you more and return
    return Math.max(maxDown, maxRight) + matrix[x][y];
}

// Dynamic programming version:
function maxSumPathDP(matrix) {
    // Get number of rows and columns
    const N = matrix.length;
    const M = matrix[0].length;

    // Create an empty matrix of the same size as the original
    const maxPath = [];
    for (let i = 0; i < N; i++) {
        maxPath.push(new Array(M));
    }

    // Iterate over each row
    for (let i = 0; i < N; i++) {
        // Iterate over each column
        for (let j = 0; j < M; j++) {
            // Once and at the beginning: possible max is top-left corner value
            if (i === 0 && j === 0) {
                maxPath[i][j] = matrix[i][j];
            }
            // Else if first row (first run of inner loop):
            // possible max is current cell + value max value from above
            else if (i === 0) {
                maxPath[i][j] = maxPath[i][j-1] + matrix[i][j];
            }
            // Else if first column (first step of each run of inner loop):
            // possible max is current cell + value max value from the left
            else if (j === 0) {
                maxPath[i][j] = maxPath[i-1][j] + matrix[i][j];
            }
            // Else possible max is current value + either top or left value.
            else {
                maxPath[i][j] = Math.max(maxPath[i][j-1], maxPath[i-1][j]) + matrix[i][j];
            }
        }
    }
    return maxPath[N-1][M-1];
}

const input = [[2, 2, 3], [0, 3, 1], [0, 3, 1]];
let start_x = 0;
let start_y = 0;
console.log(`Recursive version: max items along the path: ${maxSumPathRec(input, start_x, start_y)}`);
console.log(`Dynamic programming version: max items along the path: ${maxSumPathDP(input)}`);