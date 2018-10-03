function compareTheTriplets (a0, a1, a2, b0, b1, b2) {
    var A = 0;
    var B = 0;

    if(a0 > b0){
        A += 1;
    }else if(a0 < b0){
        B += 1;
    }

    if(a1 > b1){
        A += 1;
    }else if(a1 < b1){
        B += 1;
    }

    if(a2 > b2){
        A += 1;
    }else if(a2 < b2){
        B += 1;
    }

    return [A, B];
}

console.log(compareTheTriplets(5, 6, 7, 3, 6, 10));