/* Assumes the items_list is already sorted with respect
to each item's value/weight ratio in descending order.
LOWER BOUND */
function knapsackGreedy(item_list, max_weight) {
    let bag_weight = 0;
    let bag_value = 0;
    let bag_items = [];

    // Scan the item list [which is ordered
    item_list.forEach(function(item) {
        // if adding the item does not go over the bag limit,
        // put the item in the bag.
        if (bag_weight + item.weight <= max_weight) {
            bag_items.push(item.name);
            bag_weight += item.weight;  // update bag weight
            bag_value += item.value;  // updat bag value
        }
    });
    return [bag_items, bag_value]
}

/* Version where bag can contains fraction of items.
Last item is always fractional (to complete any space left
in the bag).
UPPER BOUND */
function knapsackGreedyPowdered(item_list, max_weight) {
    let bag_weight = 0;
    let bag_value = 0;
    let bag_items = [];

    item_list.forEach(function(item) {
        let fraction_weight = Math.min(max_weight - bag_weight, item.weight); // between 0 and item_weight
        bag_weight += fraction_weight;
        let fraction_value = (fraction_weight / item.weight) * item.value;  // between 0 and item_value
        bag_value += fraction_value;
        bag_items.push(item.name);

        if (bag_weight >= max_weight) {
            return
        }
    });
    return [bag_items, bag_value]
}

var item_list = [
    {"name": "A", "weight": 5, "value": 20},
    {"name": "B", "weight": 4, "value": 19},
    {"name": "C", "weight": 2, "value": 16},
    {"name": "D", "weight": 5, "value": 14},
    {"name": "E", "weight": 3, "value": 13},
    {"name": "F", "weight": 2, "value": 9},
];

// Compute value/weight ratio and sort items in descending order with respect to it:
item_list.forEach(function(item) {
    item["value/weight"] = item.value / item.weight;
});
item_list.sort(function(a, b) {
    return b["value/weight"] - a["value/weight"];
});

console.log("Item list sorted w.r.t. value/weight ratio: \n", item_list);
var greedy = knapsackGreedy(item_list, 10);
console.log("LOWER BOUND VALUE ==> " + greedy[1], "ITEMS ==> " + greedy[0]);
var greedy_powdered = knapsackGreedyPowdered(item_list, 10);
console.log("UPPER BOUND VALUE ==> " + greedy_powdered[1], "ITEMS ==> " + greedy_powdered[0]);