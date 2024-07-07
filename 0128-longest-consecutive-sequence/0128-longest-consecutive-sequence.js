/**
 * @param {number[]} nums
 * @return {number}
 */

 /* 
 Time complexity: O(N), as we go through each value in nums
 Consecutive sequence meaning no digit repeats in the sequence, and digit increment by 1.
 Check through all the values in nums. Give a current number (cur) in the set, see if the set has a cur-1 value. If so, this can be the start of a sequence + to check if following consecutive elements exist (inner whileloop).
 */
var longestConsecutive = function(nums) {
    var set = new Set(nums);
    var length = 0;

    for(var n of set) {
        //How to know if a value is the START of a sequence?
        //See if there ISNT value in the nums set that is num-1
        if(!set.has(n-1)) {
            var cur = n;
            var possibleMax = 1;
            while(set.has(cur+1)) {
                possibleMax++;
                cur++;
            }
        }

        if(length < possibleMax) {
            length = possibleMax;
        }
    }

    return length;
};