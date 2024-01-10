/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map();
    for(var i = 0; i < nums.length; i++) {
        if(map[nums[i]] !== nums[i]) {
            map[nums[i]] = nums[i];
        } else {
            return true;
        }
    }
    return false;
};