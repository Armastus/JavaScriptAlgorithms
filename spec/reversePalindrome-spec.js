require('../isPalindrome/reversePalindrome');

describe("Palindrome", function (){
    var obj = new reversePalindrome('racecar');
    it("Should return if a string is a palindrome", function(){
        expect(obj).toBe('racecar');
    });
});