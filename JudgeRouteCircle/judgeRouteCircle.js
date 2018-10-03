var judgeCircle = function (moves) {
    var x = 0,
        y = 0;
    for (var ii = 0; ii <= moves.length; ii++) {
        switch (moves[ii]) {
            case 'L':
                x -= 1;
                break;
            case 'R':
                x += 1;
                break
            case 'U':
                y -= 1;
                break;
            case 'D':
                y += 1;
                break
        }
    }
    if(x === 0 && y === 0){
        return true;
    }else{
        return false;
    }
};

console.log(judgeCircle('RL'));