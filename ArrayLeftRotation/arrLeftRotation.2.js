function rotLeft(arrSize, rotNum) {
    let arr = [];
    let finalRot = [];

    for(let ii = 1; ii <= arrSize; ii++) {
        arr.push(ii);
    }

    for(let yy = 0; yy < arr.length; yy++) {
        finalRot[yy] = arr[(yy + rotNum) % 5];
    }

    return finalRot;
}

console.log(rotLeft(5, 7));