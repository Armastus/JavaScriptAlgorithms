function factorial(num) {
    if(num === 1) { // this is the base case.
        return num;
    }else{ //recursive case, calls the function until it meets
        //the base case "num === 1".
        return num * factorial(num - 1);
    }
}

console.log(factorial(4));