function balancedBrackets(brackets) {
    let charBracket = brackets.split('');
    let tmpStack = [];
    let balanced = "YES";

    for(const ii of charBracket) {
        switch (ii) {
            case '[':
            case '{':
            case '(':
                tmpStack.push(ii);
                break;
            case ']':
                if (tmpStack === null || tmpStack.pop() !== '[')
                balanced = "NO";
                break;
            case '}':
                if (tmpStack === null || tmpStack.pop() !== '{')
                balanced = "NO";
                break;
            case ')':
                if (tmpStack === null || tmpStack.pop() !== '(')
                balanced = "NO";
                break;
        }
    }

    if (tmpStack === null) {
        balanced = "NO";
    }

    console.log(balanced);
    return balanced;

}

balancedBrackets('{[()]}');
balancedBrackets('{[(])}');
balancedBrackets('{{[[(())]]}}');