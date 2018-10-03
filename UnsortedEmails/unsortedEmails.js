function removeDuplicates(array) {
    var found = {};
    var newArr = [];

    for(var ii = 0; ii < array.length; ii++) {
        var temp = array[ii];
        found[temp] = "Original";
    }
    newArr.push((found));
    return newArr;
}

console.log(removeDuplicates(["bleep@gmail.com", "bleep@gmail.com", "bloop@gmail.com", "blah@gmail.com", "bleep@gmail.com", "bleep@gmail.com", "bleep@gmail.com"]));
