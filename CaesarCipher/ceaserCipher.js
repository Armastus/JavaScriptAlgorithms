//Shifting two spaces over in an array.
function caeserCipher(str, num) {
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for(var ii = 0; ii < lowerCaseString.length; ii++) {
        var currentLetter = lowerCaseString[ii];
        if (currentLetter === ' ') {
            newString += currentLetter;
            //move on from this code block and continue with normal loop
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if (newIndex > 25)
            newIndex = newIndex - 26;
        if (newIndex < 0)
            newIndex = 26 + newIndex;
        if (str[ii] === str[ii].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        } else
            newString += alphabet[newIndex];
    }
        return newString;
}


console.log(caeserCipher('zoo keeper', 2));

console.log(caeserCipher('Big Car', -16));

console.log(caeserCipher('Javascript', -900));