function powerSet(elements) {
	powerset = [[]];  // add the empty set to powerset
    
    elements.forEach(function(element) {
		// Duplicate existing subsets (with JS deep copy)
        var duplicate_subsets = JSON.parse(JSON.stringify(powerset));

        duplicate_subsets.forEach(function(duplicate_subset) {
            duplicate_subset.push(element);  // add new element to each duplicate
            powerset.push(duplicate_subset);  // push new subset to powerset
        });
    });
    return powerset;
}

elements = ["A", "B", "C"];
powerset = powerSet(elements);
powerset.sort(function(a, b) {
    return a.length - b.length
});
powerset.forEach(function(subset) {
    console.log(subset);
})
