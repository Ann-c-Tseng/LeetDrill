/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var l = 0;
    var r = l+1;
    var max = 0;
    while(l < r && r < prices.length) {
        var possibleMax = prices[r] - prices[l];
        
        if(possibleMax < 0) { 
            //if possibleMax is negative, this
            //means that right value is less than left, so we can
            //move left and right up since we want the smallest
            //possible left value.
            l = l + 1;
            r = l + 1;
        } else {
            if(possibleMax > max) {
                max = possibleMax;
            }
            r = r + 1;
        }
    }
    
    return max;
};