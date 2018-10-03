function wordsInString(str) {
    var word_count = 1;
    var space = ' ';

    for(var ii = 0; ii < str.length; ii++) {
        if(str[ii] === space){
            word_count++;
        }
    }
    return word_count;
}

console.log(wordsInString("This is a string here are words"))