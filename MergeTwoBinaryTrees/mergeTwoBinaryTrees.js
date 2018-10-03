function sortArray(arr) {
    for(var ii = arr.length; ii > 0 - 1; ii--){
        //console.log(arr[ii]);
        var tmp;
        for(var jj = 0; jj < ii; jj++){
            if(arr[jj] > arr[jj + 1]){
                tmp = arr[jj];
                arr[jj] = arr[jj + 1];
                arr[jj + 1] = tmp;
            }
        }
    }
    return arr;
}
console.log(sortArray([3, 5, 1, 6, 9, 10, 7]))