/** string = s.lowerCase **/
function superReducedString(str) {
    var array = str.split('');
    for(var ii = 0; ii < array.length; ii++) {
        if(array[ii] === array[ii + 1]) {
            /** Remove 2 elements from index ii **/
            array.splice(ii, 2);
            //return ii back to 0!
            ii = - 1;
        }
    }
    if(array.length === 0) {
        return "Empty String";
    }else{
        return array.join('');
    }
}

superReducedString("bbcccaaaabb");