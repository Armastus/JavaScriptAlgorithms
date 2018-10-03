function aVeryBigSum(N, arrN) {
    var tmpArray = [];
    var tmpNum = 0;
    for (var ii = 0; ii < N; ii++) {
        var randArr = Math.floor(Math.random() * Math.pow(2, 31) - 1);
        tmpArray.push(randArr);
    }

    for (var yy = 0; yy < tmpArray.length; yy++) {
        tmpNum += tmpArray[yy];
    }

    arrN = tmpNum;
    return arrN;
}

console.log(aVeryBigSum(5));

/**
 * array of N integers [1, 2, 3, 4, 5]  NOTE: some
 * integers may be really large
 * print sum of elements in array = 15
 * Math.pow(2, 31) - 1
 * **/