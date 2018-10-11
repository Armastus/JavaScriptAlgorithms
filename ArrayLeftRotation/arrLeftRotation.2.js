function rotLeft(arrSize, rotNum) {
    let arr = [];
    let finalRot = [];

    for(let ii = 1; ii <= arrSize; ii++) {
        arr.push(ii);
    }

    for(let yy = 0; yy < arr.length; yy++) {
        finalRot.push(arr[(yy + rotNum) % arrSize]);
    }

    return finalRot;
}

console.log(rotLeft(5, 7));