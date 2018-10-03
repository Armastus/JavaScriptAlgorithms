function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charactersArr.forEach(char => {
       if(validCharacters.indexOf(char) > -1) {
           lettersArr.push(char);
       }
    });
    if(lettersArr.join('') === lettersArr.reverse().join('')){
        console.log("This is a Palindrome");
        return true;
    }else{
        console.log("This is not a Palindrome");
        return false;
    }
}

console.log(isPalindrome("Madam I'm Adam"));