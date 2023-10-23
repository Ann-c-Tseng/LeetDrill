/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    console.log(nums.length)
    if(nums.length == 1) {
        return true;
    }

    var destIdx = nums.length-1;
    var result = false;

    for(var sourceIdx = nums.length-2; sourceIdx >= 0; sourceIdx--) {
        //success case
        console.log("at idx:" + sourceIdx + " with value:" + nums[sourceIdx]);
        if(nums[sourceIdx] + sourceIdx >= destIdx && nums[sourceIdx] !== 0) {
            destIdx = sourceIdx;
            result = true;
        } else { //otherwise, keep destIdx stationary
            result = false;
        }

        console.log("result: " + result)
    }

    return result;
};