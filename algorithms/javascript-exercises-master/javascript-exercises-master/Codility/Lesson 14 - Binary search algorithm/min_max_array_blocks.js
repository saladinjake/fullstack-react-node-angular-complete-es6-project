// Solution: https://app.codility.com/demo/results/trainingWFBHB2-VXX/

function solution(K, M, A) {

    // Scan the array to determine overall sum and smallest element
    let min = 0; // smallest element of the array
    let overall_sum = 0; // sum of all elements of the array
    for(let i = 0; i < A.length; i++) {
        overall_sum += A[i];
        min = Math.max(min, A[i]);
    }

    // Corner cases:
    // 1. If only one block return the overall sum
    if(K === 1) {
        return overall_sum;
    }
    // 2. If more blocks than elements, return the smallest element
    else if(K >= A.length) {
        return min;
    }

    let sum = 0;
    let mid = 0;
    while (min <= overall_sum) {
        let temp = mid;
        mid = Math.floor((overall_sum + min) / 2); // average of smallest element and overall sum

        // if average was not updated
        if (mid === temp) {
            break;
        }

        var blocks = neededBlocks(A, mid);

        console.log('max, min, mid, blocks, K:', overall_sum, min, mid, blocks, '<', K);

        if(blocks > K) {
            min = mid+1;
        } else {
            overall_sum = mid;
        }
    }
    return overall_sum;
}

function neededBlocks(arr, maxValue) {
    let count = 1;
    let sum = arr[0];

    for (let j = 1; j < arr.length; j++) {
        if (sum + arr[j] > maxValue) {
            sum = arr[j];
            count++;
        } else {
            sum += arr[j];
        }
    }
    return count;
}