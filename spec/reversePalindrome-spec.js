const reversePalindrome = require('../IsPalindrome/reversePalindrome');

// describe("Palindrome", function (){
//     var obj = new reversePalindrome('racecar');
//     it("Should return if a string is a palindrome", function(){
//         expect(obj).toBe('racecar');
//     });
// });
let str = "racecar";
try {
    if (reversePalindrome(str) === true) {
        console.log("This is a palindrome");
    }
    if(str === "" || str === null) {
        throw new SyntaxError("Please type a string");
    }
}catch(err) {
    console.log(str + " is not a palindrome " + err.stack);
}