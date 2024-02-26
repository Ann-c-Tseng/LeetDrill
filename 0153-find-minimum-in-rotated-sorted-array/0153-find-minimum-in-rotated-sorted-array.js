/**
 * @param {number[]} nums
 * @return {number}
 */

//The key to this question lies in the fact that the minimum
//value in this rotated sorted array will always come after
//the maximum value in the array.
var findMin = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    var res = nums[0];

    while(left <= right) {
        if(nums[left] < nums[right]) {
            //We know we reached the point where we have left
            //at the minimum element, when left pointer has
            //value that is smaller than the right value,
            //returning either res or that value
            res = Math.min(res, nums[left]);
            break;
        }
        var m = left+Math.floor((right-left)/2)
        res = Math.min(res, nums[m]);
        if(nums[m] >= nums[left]) {
            left = m + 1;
        } else {
            right = m - 1;
        }
    }
    return res;
};