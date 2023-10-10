/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();

    var appearMoreThan = Math.floor(nums.length/2);
    console.log("appearMoreThan: " + appearMoreThan);
    var count = 1;
    var result = nums[0];

    for(var i = 1; i < nums.length; i++) {
        var prev = i-1;
        if(nums[prev] !== nums[i]) {
            console.log("---doesn't equal---");
            console.log(nums[prev] + " " + nums[i]);
            console.log(count);
            if(count > appearMoreThan) {
                result = nums[i];
                return result;
            } else {
                count = 1;
            }
        }

        if(nums[prev] === nums[i]) {
            count++;
            console.log("---does equal---");
            console.log(nums[prev] + " " + nums[i]);
            console.log(count);
            if(count > appearMoreThan) {
                result = nums[i]
                return result;
            }
        }
    }

    return result;
};