/*
Complexity: O(n).
The input does not have to be structured (e.g. ordered).
Look at all the items until you find the one you want.
 */
function linearSearch(items, key) {

    for (i = 0; i < items.length; i++) {
        if (items[i] === key) {
            return true
        }
    }
    return false
}


var key = 7;
var items = [4, 3, 5, 2, 6, 8, 7];
console.log(linear_search(items, key));