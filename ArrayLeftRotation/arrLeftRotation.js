function arrLeftRotation(arr, num) {
    var temp;
    var tally = num + 1;
    var blah = [];

    for(var ii = arr.length - 1; ii > 0; ii--){
        for(var yy = 0; yy < ii; yy++){
            //console.log(arr[ii]);
            //temp is 1
            temp = arr[yy];
            //1 is now 3
            arr[yy] = arr[yy + tally];
            //3 is now 1
            arr[yy + tally] = temp;
            blah.push(arr[yy]);
        }
        // console.log(arr);
    }
    return blah;
}

console.log(arrLeftRotation([1, 2, 3, 4, 5], 2));