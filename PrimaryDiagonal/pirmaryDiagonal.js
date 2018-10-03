function primaryDiagonal(num, arrayMatrix) {
    // var arrayMatrix = [
    //     [11, 2, 4],
    //     [4, 5, 6],
    //     [10, 8, -12]
    // ];

    var newArrA = [];
    var newArrB = [];
    var totalA = 0;
    var totalB = 0;
    var diff;

    for(var ii = 0; ii < num; ii++){
            newArrA.push(arrayMatrix[0 + ii][ii]);
            newArrB.push(arrayMatrix[2 - ii][ii]);
    }

    for(var yy in newArrA) {
        totalA += newArrA[yy];
    }

    for(var jj in newArrB) {
        totalB += newArrB[jj];
    }

    diff = totalB - totalA;

    return diff;
}

console.log(primaryDiagonal(3, ([[11, 2, 4], [4, 5, 6], [10, 8, -12]])));