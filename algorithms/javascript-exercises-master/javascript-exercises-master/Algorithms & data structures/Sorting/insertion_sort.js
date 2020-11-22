var array_utils = require("./../utils/array_utils.js");
var swap = array_utils.swap;

/*
Worst-case complexity: O(n*n)
Best-case complexity: O(n) ==> better than any other sorting algorithm
if input is mostly already sorted.

Insertion sort iterates, consuming one input element each repetition,
and growing a sorted output list.
At each iteration, insertion sort removes one element from the input
data, finds the location it belongs within the  sorted list, and inserts
it there. It repeats until no input elements remain.
 */
function insertionSort(items) {
    for (i = 1; i < items.length; i++) {
        let j = i;
        while (items[j-1] > items[j]) {
            swap(items, j, j-1);
            j--;
        }
    }
    return items;
}

items = [1, 4, 9, 2, 6, 3, 8];
sorted_items = insertionSort(items);
console.log(sorted_items);