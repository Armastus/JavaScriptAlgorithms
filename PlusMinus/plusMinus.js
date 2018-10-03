function plusMinus(n, array) {
    /** Loop through the array **/
    /** Will need a temp var to hold fraction totals.
     * if array(index) greater than 0
     * temp var = array(index) / n
     * return temp var
     * else if array(index) less than 0
     * temp var = array(index) / n
     * return temp var
     * else return array(index)**/

    var tempNum = 0;
    var tempPos = [];
    var tempNeg = [];
    var tempZero = [];

    for(var ii = 0; ii < n; ii++) {
        if(array[ii] > 0) {
            tempPos.push(array[ii]);
        }else if(array[ii] < 0) {
            tempNeg.push(array[ii]);
        }else{
            tempZero.push(array[ii]);
        }
    }

    tempNum = tempPos.length / n;
    console.log(tempNum);

    tempNum = tempNeg.length / n;
    console.log(tempNum);

    tempNum = tempZero.length / n;
    console.log(tempNum);
}

plusMinus(6, [-4, 3, -9, 0, 4, 1]);

/** Solution 2 **/
// function main() {
//     var pos = 0;
//     var neg = 0;
//     var zero = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             pos++;
//         } else if (arr[i] < 0) {
//             neg++;
//         } else {
//             zero++;
//         }
//     }
//     pos = pos / n;
//     neg = neg / n;
//     zero = zero / n;
//     console.log(pos);
//     console.log(neg);
//     console.log(zero);
// }