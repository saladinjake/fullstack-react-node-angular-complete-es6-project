// Distribution of daily hours among activities
var activities = [
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Play Game', 2],
    ['Sleep', 7]
];

// Return second column of the first line:
console.log(activities[0][1]); // 9

// Add a line:
activities.push(['Study', 2]);

// Compute the percentage of the hours spent for each activity
// and append the percentage as a column:
for (var i = 0; i < activities.length; i++) {
    var percentage = ((activities[i][1] / 24) * 100).toFixed();
    activities[i][2] = percentage + '%';
}
console.log(activities.join('\n'));

// Remove last line:
activities.pop();
console.log(activities.join('\n'));

// Remove last column:
for (var i = 0; i < activities.length; i++) {
    activities.pop(2);
}
console.log(activities.join('\n'));

// Iterate over each cell:
// loop the outer array
for (var i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
    // loop the inner array
    for (var j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}