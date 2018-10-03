function bubbleSort(array) {
    // return array, sorted with bubble sort
    for(var ii = array.length; ii > 0; ii--) {
        for(var jj = 0; jj < ii; jj++) {
            if(array[jj] > array[jj + 1]) {
                var temp = array[jj];
                array[jj] = array[jj + 1];
                array[jj + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([5, 3, 8, 2, -12, 9, 1, 8, 4, 9]));