// See: https://www.codingame.com/ide/puzzle/dwarfs-standing-on-the-shoulders-of-giants

/* Goal: We choose to represent each person by a distinct integer. If person #1
has influenced persons #2 and #3 and person #3 has influenced #4 then there is
a succession of thoughts between #1, #3 and #4. In this case, it’s the longest
succession and the expected result will be 3, since it involves 3 people.
*/
var n = parseInt(readline()); // the number of relationships of influence

/* 1. Store the graph as key-value mapping, with the key the number of the node 
and the value an array of all adjacent nodes. In the first step we duplicate
the graph in a path and a root mapping. */
// Note: dict only accepts strings as keys (implicit conversion)
var path = {};
for (var i = 0; i < n; i++) {
    var inputs = readline().split(" ");
    var x = inputs[0]; // a relationship of influence between two people (x influences y)
    var y = inputs[1];

    if (!(x in path)) {
        path[x] = [y];
    } else {
        path[x].push(y);
    }
}

/* 2. Diameter calculation: Let's define this recursively. 
If a node does not have a certain element, the recursion needs to end. 
Otherwise we loop in a depth-first-search manner over all adjacent elements. 
The maximum depth we can find this way is the depth of the current node.
But when we calculate the depth this way, a lot of nodes will be computed over and over again,
when they're visited via another node. Introducing a memory which stores nodes we've already 
seen can help here. The diameter implementation then looks like this: */
// var hash = {}; // for memoization
function diameter(path, node) {

    if (!path[node]) {
        return 1;
    }

    // for memoization
    // if (hash[node]) {
    //     return hash[node];
    // }

    let max_d = 0;
    for (let i = 0; i < path[node].length; i++) {
        max_d = Math.max(max_d, diameter(path, path[node][i]));
    }
    //return hash[node] = 1 + max_d;  // for memoization
    return 1 + max_d
}

/* 3. The only remaining thing left is looping over all root nodes and find 
the maximum diameter of the graph: */
var s = 0;
for (var i in path) {
    s = Math.max(s, diameter(path, i));
}

// The number of people involved in the longest succession of influences
print(s);
