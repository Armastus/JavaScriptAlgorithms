function mixedCharsIsPalindrome(str) {

    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    for (var ii = 0; ii < str.length; ii++) {
        letter = str[ii];
        //letterCounts[letter] are number of letters found or 0
        letterCounts[letter] = letterCounts[letter] || 0;
        //This will add 1 to each unique number found.
        letterCounts[letter]++;
    }
    for (var yy in letterCounts) {
        //Take the letterCounts, so 2(r) 2(a) 2(c) 1(e)
        //letterCounts % 2 are each added to palindromeSum.
        //So after the division occurs, add those total to palindromeSum
        palindromeSum += letterCounts[yy] % 2;
    }
    //Return true if palindromeSum is less than 2.
    return palindromeSum < 2;
}

console.log(mixedCharsIsPalindrome("rraccea"));
console.log(mixedCharsIsPalindrome("rraccbea"));