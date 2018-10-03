function factorsOfNum(num) {
    /** negative num **/
    if(num < 0){
        for(var yy = 0; yy >= num; yy--){
            if(num % yy === 0){
                console.log(yy);
            }
        }
        /** positive num **/
    }else if(num > 0) {
        for (var ii = 1; ii <= num; ii++) {
            if (num % ii === 0) {
                console.log(ii);
            }
        }
    }
}

factorsOfNum(12);
factorsOfNum(-12);