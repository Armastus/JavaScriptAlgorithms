function matchingParenthesis(string) {
    /** Declare our stack **/
    var stack = [];
    /** Initialize our two maps with keys and values**/
    var openPar = {'(' : ')'};
    var closedPar = {')' : true};

    /** Loop through our input string **/
    for(var ii = 0; ii < string.length; ii++) {
        var tmpChr = string[ii];
       // console.log(openPar[tmpChr]);
        /** If the tmpChar is a openPar **/
        if(openPar[tmpChr]) {
            stack.push(tmpChr);
            /** Else if tmpChar is a closedPar **/
        }else if(closedPar[tmpChr]){
            //console.log(stack);
            if (openPar[stack.pop()] !== tmpChr) return false;
            //console.log(stack);
            //console.log(tmpChr);
        }
    }
    return stack.length === 0;
}

console.log(matchingParenthesis('()'));
//console.log(matchingParenthesis(')('));