/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //We can consider this problem similar to a sliding window algorithm,
    //where we keep track of the sellPrice and the minPrice, 
    //getting the max profit value comparing maximum profit previously recorded and the profit for this round
    var maxProfit = 0;
    var minPrice = prices[0];
    var sellPrice;
    var profit = 0;

    for(var i = 1; i < prices.length; i++){
        sellPrice = prices[i];
        profit = sellPrice - minPrice;

        //Compare past maxPrice value with profit of current round comparison
        maxProfit = Math.max(maxProfit, profit)

        //If our current sellPrice is a smaller value than the minPrice,
        //increment minPrice. sellPrice pointer is always in front of the minPrice.
        if(sellPrice < minPrice) minPrice = sellPrice
    }

    return maxProfit;
};