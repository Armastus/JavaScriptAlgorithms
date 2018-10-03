function meanMedianMode(array) {
    //call other 3 functions
    //Return obj which has mean, median, mode on it.
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    };
}

function getMean(array) {
    var sum = 0;
    array.forEach(num => {
        sum += num;
    });

    var mean = sum / array.length;
    return mean;
}

function getMedian(array) {

    //build in javascript function that auto sorts
    //numbers in an array in ascending order.
    array.sort(function(a, b) {
        return a - b;
    });

    var median;

    //This will find the median element of an odd number array.
    if(array.length % 2 !== 0) {
        //Math.floor just used to round down.
        median = array[Math.floor(array.length / 2)];
    } else {
        //This will find the median of an even number array.
        /*[1, 2, 3, 4]
        * mid1 = array['3' / 2 - 1] = .5, so array[.5]
        * mid2 = array['3' / 2] = 1.5, so array [1.5]
        * median = (.5 + 1.5) / 2 = 1
        * */
        var mid1 = array[(array.length / 2) - 1];
        //To see what is happening.
        console.log(mid1);

        var mid2 = array[array.length / 2];
        //To see what is happening.
        console.log(mid2);
        median = (mid1 + mid2) / 2;
        console.log(median);
    }

    return median;
}

function getMode(array) {
    //put into a hash table
    var modeObj = {};

    /*In a loop, if the modeObj at [num] does not exist,
    * set it to 0. Then increment modeObj[num] each time it does
    * exist.
    */
    array.forEach(num => {
        if(!modeObj[num]) {
            modeObj[num] = 0;
        }
        modeObj[num]++;
    });

    var maxFrequency = 0;
    var modes = [];

    for (var num in modeObj) {
        if(modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        }else if(modeObj[num] === maxFrequency) {
            modes.push(num);
        }

        if(modes.length === Object.keys(modeObj).length) {
            modes = [];
        }
    }
    return modes;
}

// var arr = [1, 2, 3, 4];
//
// arr.forEach(num => {
//     num = num / 2;
//     console.log([num]);
// });

console.log("[1, 2, 3, 4, 5, 4, 6, 1]");
console.log(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]));

console.log("[9, 10, 23, 10, 23, 9]");
console.log(meanMedianMode([9, 10, 23, 10, 23, 9]));