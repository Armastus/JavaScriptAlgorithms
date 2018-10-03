function reverseArrayInPlace(arr) {
    for(var ii = 0; ii < arr.length / 2; ii++) {
        var tempVar = arr[ii];
        arr[ii] = arr[arr.length-1 -ii];
        //Below is an example of what is going on in the line above.
        /*Notice that arr.length-1 points to the last element of the
        array. While ii starts with the first number of the loop and
        decrements. So it looks like this in the loop:
        6 - 0 = element 6
        6 - 2 = element 5
        6 - 3 = element 4
        6 - 4 = element 3
        etc..
         */
        console.log(arr.length-1 -ii + " element of the array");
        //*****************************
        arr[arr.length - 1 -ii] = tempVar;
    }
    return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));

