/*
Complexity: O(log(n)).
Input structure: input has to be sorted in ascending order.
The search discards half the search space in each step,
while doing a constant number of operations.
 */
// Recursive implemntation.
function binarySearchRec(items, key) {
    // No item or key not present
    if (items.length === 0) {
        return false
    }

    // Compute index of element at the middle of the array
    var middle_idx = Math.floor(items.length/2)

    // If base case (one-item array) or good fortune
    if (key === items[middle_idx]) {
        return true
    }

    // Discard half of the search space where the searched element cannot be in
    if (key > items[middle_idx]) {
        let slice_items = items.slice(middle_idx+1, items.length);
    } else {
        let slice_items = items.slice(0, middle_idx);
    }

    return binarySearchRec(slice_items, key);
}

// Iterative implemntation.
function binarySearchIter(items, key) {
    // No item or key not present
    if (items.length === 0) {
        return false
    }

    var start = 0
    var end = items.length - 1
    var middle_idx = Math.floor((start+end)/2)

    while (key != items[middle_idx] && start <= end) {
        if (key > items[middle_idx]) {
            start = middle_idx + 1;
        } else {
            end = middle_idx - 1;
        }

        middle_idx = Math.floor((start+end)/2);
    }

    if (key === items[middle_idx]) {
        return true
    } else {
        return false
    }
}

var key = 12;
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
items.sort(function(a, b) {return a - b})
console.log(`${key} is in the following items: ${items}`)
console.log("Recursive binary search: " + binarySearchRec(items, key));
console.log("Iterative binary search: " + binarySearchIter(items, key));