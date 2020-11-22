// Complexity of entire merge-sort algorithm: O(n*log(n))
// Complexity of one call of mergeSort(): O(log(n))
// Complexity of merge: O(n)

// Merge two sorted arrays into another sorted array
function merge(left, right) {

    var merged = [];
    var n_left = left.length;
    var n_right = right.length;
    var i = 0 // initial index of left array
    var j = 0 // initial index of right array

    // Compare the arrays' items one by one and add
    // the smaller item into our merged array.
    while (i < n_left && j < n_right) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    // Copy the remaining elements of left, if any
    while (i < n_left) {
        merged.push(left[i]);
        i++;
    }

    // Copy the remaining elements of right, if any
    while (j < n_right) {
        merged.push(right[j]);
        j++;
    }

    return merged;
}

/* Divide and Conquer algorithm. It divides input array in two halves,
 calls itself on the two halves and then merges the two sorted halves.
 The merge() function is used for merging two halves.
  */
function mergeSort(items) {
    // Base case
    if (items.length <= 1) {
        return items;
    }

    var midpoint = Math.floor(items.length / 2); // idx of middle element
    var left = items.slice(0, midpoint);
    var right = items.slice(midpoint, items.length);

    var merged_items = merge(mergeSort(left), mergeSort(right));

    return merged_items;
}

items = [1, 4, 9, 2, 6, 3, 8];
sorted_items = mergeSort(items);
console.log(sorted_items);