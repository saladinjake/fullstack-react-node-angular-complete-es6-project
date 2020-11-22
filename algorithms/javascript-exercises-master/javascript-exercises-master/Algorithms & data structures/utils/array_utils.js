
exports.swap = function(array, index1, index2) {
    var item1 = array[index1];
    var item2 = array[index2];
    array[index1] = item2;
    array[index2] = item1;
}