function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reversedWordsArr = [];

    wordsArr.forEach(word => {
       var reversedWord = '';
       for(var ii = word.length-1; ii >= 0; ii--){
           reversedWord += word[ii];
       }
       reversedWordsArr.push(reversedWord);
    });
    return reversedWordsArr.join(' ');
}

console.log(reverseWords("Bleep Bloop"));