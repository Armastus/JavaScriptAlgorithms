function maxStockProfit(pricesArr) {
    // Solve with O(n) runtime, to handle large numbers
    // takes in array of prices as parameter
    // returns the max possible profit of the day
    // if no profit is possible, return -1

    /** Want overwrite this variable if we make a profit, otherwise simply return it. **/
    var maxProfit = -1;
    /** To hold the best buying price in our array. **/
    var buyPrice = 0;
    /** To hold the best selling price in our array. **/
    var sellPrice = 0;
    /** variable that will help us determine the condition to by or not buy **/
    var changeBuyPrice = true;

    for(var ii = 0; ii < pricesArr.length; ii++) {
        //STEP THROUGH ON PAPER TO SEE IT WORK.
        if(changeBuyPrice) {
            /** In loop buyPrice will equal the index of pricesArr. **/
            buyPrice = pricesArr[ii];
        }
        /** In loop sellPrice will equal the next index in the pricesArr. **/
        sellPrice = pricesArr[ii + 1];

        if(sellPrice < buyPrice) {
            changeBuyPrice = true;
        }else{
            var tmpProfit = sellPrice - buyPrice;
            if(tmpProfit > maxProfit) {
                maxProfit = tmpProfit;
            }
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}

//Optimal buy price is 10 and optimal sell price is 100. 100 - 10 = profit of 90!
console.log(maxStockProfit([34, 52, 12, 12, 10, 100, 28, 34, 99]));