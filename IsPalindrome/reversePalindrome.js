function reversePalindrome (word){
    var reverse = "";

    for (var ii = word.length-1; ii >= 0; ii--) {
        reverse += word[ii];
    }

    if (reverse === word) {
        console.log(reverse);
        return true;
    } else {
        console.log(reverse);
        return false;
    }
}

console.log(reversePalindrome("racecar"));
console.log(reversePalindrome("bleep bloop"));
