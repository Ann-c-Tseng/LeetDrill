/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length-1);
};

var binarySearch = function(nums, target, start, end) {
    if(start <= end) {
        var mid = Math.floor((start + end)/2);
        if(nums[mid] === target) {
            return mid;
        } else if(target < nums[mid]) {
            return binarySearch(nums, target, start, mid-1);
        } else {
            return binarySearch(nums, target, mid+1, end);
        }
    } else {
        return -1;
    }

}