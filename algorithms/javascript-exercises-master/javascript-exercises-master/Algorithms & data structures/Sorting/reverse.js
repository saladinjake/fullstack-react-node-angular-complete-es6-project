function reverse(items) {
    var reversed_items = [];

    for (let i = items.length-1; i >= 0; i--) {
        reversed_items.push(items[i]);
    }

    return reversed_items;
}

var items = [1, 2, 3, 4, 5]
console.log(reverse(items));