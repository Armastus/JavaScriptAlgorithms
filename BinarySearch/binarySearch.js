function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];

    if(middleElem === key) {
        return true;
        //middleElem is less than the key
        //and numArray.length has to be check to make sure
        // it is greater than 1.
    }else if(middleElem < key && numArray.length > 1) {
        //Splice method give the second half of the array.
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }else if(middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }else{
        //When key is not present in numArray or key is null;
        return false;
    }
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 7));