/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const countMap = new Map();
    var l = 0;
    var res = 0;
    
    for(var r = 0; r < s.length; r++) {
        var windowLen = r - l + 1;
        
        if(countMap.get(s[r]) === undefined) {
            countMap.set(s[r], 1);
        } else {
            countMap.set(s[r], countMap.get(s[r])+1);
        }

        var max = getMax(countMap);
        var diff = windowLen - max;

        if(diff <= k) {
            res = Math.max(windowLen, res);
        } else {
            //Decrease the character count for the letter we are removing
            //from the sliding window
            countMap.set(s[l], countMap.get(s[l]) - 1);
            l++;
        }
    }
    
    return res;
};
    
var getMax = function(m) {
    var max = 0;
    for(let [key, value] of m) {
        if(value > max) {
            max = value;
        }
    }
    return max;
}