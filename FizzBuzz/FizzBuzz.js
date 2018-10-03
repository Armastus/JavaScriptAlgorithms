/**
 * Created by david on 11/5/2017.
 */
function fizzBuzz(num) {
    for(var ii =1; ii <= num; ii++) {
        if (ii % 15 === 0) {
            console.log('FizzBuzz');
        } else if (ii % 3 === 0) {
            console.log('Fizz');
        } else if (ii % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(ii);
        }
    }
}

fizzBuzz(30);