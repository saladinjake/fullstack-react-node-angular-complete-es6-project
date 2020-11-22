// See solution: https://app.codility.com/demo/results/trainingN6H6B7-PEU/
// See explanation: https://codility.com/media/train/solution-stone-wall.pdf
// See original code in python: https://codesays.com/2014/solution-to-sigma-2012-stone-wall-by-codility/

function solution(H) {
    let block_count = 0; // number of blocks
    let stack = [];  // stack of horizontal edges

    // Scan the skyline from left to right
    H.forEach(function(height) {

        /* If the height of current block is less than
        the previous blocks, the previous blocks have
        to end before current point. They have no
        chance to exist in the remaining part.
        So the previous blocks are completely finished. */
        while (stack.length && height < stack[stack.length-1]) {
            stack.pop();
            block_count++;
        }

        /* If the height of current block is greater than
        the previous one, a new block is needed for current position. */
        if (stack.length === 0 || height > stack[stack.length-1]) {
            stack.push(height);
        }

        /* Else (the height of current block is same as that
        of previous one), they should be combined to one block. */
    });

    // Some blocks with different heights are still in the stack.
    block_count += stack.length;

    return block_count;
}