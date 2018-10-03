function returnMatchingPairs(socks, sockSize, colorSock) {
    var pair = 0;
    var totalPair = 0;
    for(var ii = 1; ii <= socks; ii++) {
        console.log(ii);
        if(socks === 0) return false;
        if (ii % 2 === 0){
            if(sockSize <= 7 && colorSock === 'blue') {
                pair++;
                return console.log("Total Child Socks and color are : " + pair + " " + colorSock);
            }else if(sockSize <= 7 && colorSock === 'red'){
                pair++;
                return console.log("Total Child Socks and color are : " + pair + " " + colorSock);
            }
            if(sockSize > 7 && colorSock === 'red') {
                pair++;
                return console.log("Total Adult Socks and color are : " + pair + " " + colorSock);
            }else if(sockSize > 7 && colorSock === 'red'){
                pair++;
                return console.log("Total Adult Socks and color are : " + pair + " " + colorSock);
            }
        }
     }
    //console.log(pair);
}

returnMatchingPairs(10, 2, 'blue');
// returnMatchingPairs(14, 8, 'blue');
// returnMatchingPairs(2, 4, 'red');
// returnMatchingPairs(10, 9, 'red');