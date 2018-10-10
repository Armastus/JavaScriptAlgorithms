let counter = 0;

function halfArray(arr) {
    let leftSideArr;
    let rightSideArr;

    if(arr.length < 2) {
        return arr;
    }

    leftSideArr = arr.slice(0, Math.ceil(arr.length / 2));
    rightSideArr = arr.slice(Math.ceil(arr.length / 2));

    return minSwap(halfArray(leftSideArr), halfArray(rightSideArr));
}

function minSwap(leftArr, rightArr) {
    let temp = [];
    // console.log(temp = leftArr);
    // console.log(leftArr = rightArr);
    // console.log(rightArr = temp);
    // console.log(temp);

    while(leftArr.length && rightArr.length) {
        let minElem;
        if (leftArr[0] < rightArr[0]) {
            minElem = leftArr.shift();
            counter++;
        } else {
            minElem = rightArr.shift();
            counter++
        }
        temp.push(minElem);
    }

    return counter;
}


console.log(halfArray([1, 3, 5, 2, 4, 6, 8]));