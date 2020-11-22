var array_utils = require("./../utils/array_utils.js");
var swap = array_utils.swap;


/*
Complexity: O(n*n)
Outer loop: iterate over all items.
Inner loop:
1) iterate over all items following current item.
2) swap current item and checked item if current item is larger.
 */
function selectionSort(items) {
    var indexToCompare = 0;
    while (indexToCompare < items.length) {
        for (let i = indexToCompare + 1; i < items.length; i++) {
            if (items[i] < items[indexToCompare]) {
                swap(items, indexToCompare, i);
            }
        }
        indexToCompare++;
    }
    return items;
}

items = [1, 4, 9, 2, 6, 3, 8];
sorted_items = selectionSort(items);
console.log(sorted_items);