function mergeSort(arr) {
    // take in a single, unsorted array as a parameter
    // split the array into two halves
    /**
     * BASE CASE: if the arr.length is only 0 or 1 element, it's already sorted. No need to break down.
     * var1 holds Math.floor(arr.length / 2).
     * var2 holds first half of the array with arr.slice(0, var1).
     * var3 holds second half of the array with arr.slice(var1) //This will continue from middle of array to end.
     * **/
    if(arr.length < 2) {
        return arr;
    } // base case

    // recursive case below
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
    // takes in two sorted arrays as parameters
    // merges those sorted arrays into one sorted array
    // returns one sorted array
    /** var result will hold our sorted elements of the two arrays into one new array **/
    var result = [];
    /**
     * While array1.length and array2.length are still not empty
     * if array1[0] (at first position) is less than array2[0] (at first position)
     * store array1[0] in new variable (minElem) and move onto the next position, so minElem = array1.shift();
     * NOTE: a .shift needs to occur to move onto the next element in the array.
     * else
     * minElem = array2.shift();
     * NOTE: a .shift needs to occur to move onto the next element in the array.
     * Then push minElem in new array result[], so result.push(minElem)
     */
    while(array1.length && array2.length) {
        //minElem simply is used as a place holder to shift to next elements in both arrays.
        var minElem;
        if(array1[0] < array2[0]){
            minElem = array1.shift();
        }else{
            minElem = array2.shift();
        }
        result.push(minElem);
    }

    /** if array1.length is still not empty after the while loop, then concat the left over array element to results array **/
    if(array1.length) {
        result = result.concat(array1);
    }else{
        result = result.concat(array2);
    }
    return result;
}

console.log(mergeSort([5, 7, 19, 20, 3, 8, 1, 11, -30, -1, 12]));