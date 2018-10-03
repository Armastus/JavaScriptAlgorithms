/**
 * Created by david on 11/5/2017.
 */
//Constant runtime
//Big O Notation: "0 (1)"
/**Runtime remains constant since we only log
 * first two blocks in an array no matter how
 * big the array gets.
 * On a graph: X axis stays the same while Y axis
 * never increases.**/
function log(array) {
    console.log(array[0]);
    console.log(array[1]);
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/** ****************************************** **/
//Linear runtime
//Big O Notation: "0 (n)"
/**Runtime is proportional to the input. As the array
 * grows so does the amount of operations that need to be
 * executed.
 * On a graph the y axis and x axis continue to grow.**/

function logAll(array) {
    for(var ii = 0; ii < array.length; ii++) {
        console.log(array[ii]);
    }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);

/** ****************************************** **/
//Exponential runtime
//Big O Notation: "0 (n^2)"
/**Runtime is exponential since runtime is always doubled
 * itself since the nested for loop first hits the first
 * array element, then it loops through the array and prints
 * the results and does the same through each consecutive
 * element.
 * On a graph you would see the line growing exponentially
 * on the X and Y axes cause an upward curve.**/

function addAndLog(array) {
    for (var ii = 0; ii < array.length; ii++) {
        for (var jj = 0; jj < array.length; jj++) {
            console.log(array[ii] + array[jj]);
        }
    }
}

addAndLog(['A', 'B', 'C']); //9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']); //16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']); //25 pairs logged out

/** ****************************************** **/
//Logarithmic runtime
//Big O Notation: 0 (log n)
/**Logarithmic basically searches through a sorted
 * list(array) for a specific element(key) in half the
 * time by breaking the array in half.
 * For example; it is like opening a dictionary and searching
 * for the word "House". You open the dictionary at
 * the middle of the dictionary and you start on "m".
 * Since "h" for "House" starts in the first half of the
 * dictionary, you can then ignore the second half. This
 * cuts your search time in half. Now do this over
 * and over and it is just like Logarithmic
 * runtime.**/
function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while(low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            high = mid - 1;
        }else if (element > key){
            high = mid - 1;
        }else{
            return mid;
        }
    }
    return - 1;
}

binarySearch([20], 5);

