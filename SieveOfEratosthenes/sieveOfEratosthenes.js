function sieveOfEratosthenes(n) {
    // return all prime numbers up
    // to 'num' in an array
    var primes = [];
    for(var ii = 0; ii <= n; ii++) {
        primes[ii] = true;
    }

    primes[0] = false;
    primes[1] = false;

    for(var ii = 2; ii <= Math.sqrt(n); ii++) {
        for(var jj = 2; jj * ii <= n; jj++) {
            primes[ii * jj] = false;
        }
    }

    var result = [];
    for(var ii = 0; ii < primes.length; ii++) {
        if(primes[ii]) {
            result.push(ii);
        }
    }
    return result;
}

console.log(sieveOfEratosthenes(10));