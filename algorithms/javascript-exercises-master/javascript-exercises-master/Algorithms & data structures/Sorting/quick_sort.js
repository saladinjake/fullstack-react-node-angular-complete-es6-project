/* Key process in quickSort is the pivot placement. Given an array and an
 element x of array as pivot, put x at its correct position in sorted array
 and put all smaller elements (smaller than x) before x, and put all greater
 elements (greater than x) after x. All this should be done in linear time.
  */
function quickSort(items) {
    // Base case
    if (items.length <= 1) {
        return items;
    }

    // Initialize two subarrays
    var left = [];
    var right = [];

    // Pick a pivot value. Can be random. Here we pick the item in the middle.
    // splice(idx, # of elements to remove) removes the elements at the given index and returns an array.
    var middle_idx = Math.floor(items.length/2);
    var pivot = items.splice(middle_idx, 1)[0];

    // Put items smaller than pivot value to the left
    // and larger than pivot value to the right.
    for (var i = 0; i < items.length; i++) {
        if (items[i] <= pivot) {
            left.push(items[i]);
        } else {
            right.push(items[i]);
        }
    }

    // Concat left, pivot and right to get a sorted array
    return [...quickSort(left), pivot, ...quickSort(right)];
}

items = [1, 4, 9, 2, 6, 3, 8];
sorted_items = quickSort(items);
console.log(sorted_items);