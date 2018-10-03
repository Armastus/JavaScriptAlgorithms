function isUnique(string) {
    if(string.length > 128) return false;

    var n = 128
    var char_set = [n];

    for(var ii = 0; ii < string.length; ii++){
        var val = string.charAt(ii);
        if (char_set[val]) { //Already found this char in string
            return false;
        }
        char_set[val] = true;
    }
    return true;
}

console.log(isUnique("bkajsielqz"));