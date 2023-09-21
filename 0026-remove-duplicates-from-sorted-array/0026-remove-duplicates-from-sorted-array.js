/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //The array we are given nums, is sorted in non-decreasing order.
    //We want to remove duplicates in-place, meaning no using extra space.
    //The relative order of the elements should be kept the same, and so still in ascending order.
    //We are returning k, which is the NUMBER of unique elements
    //We do not have to care about what we leavev beyond the returned k, so they are represented by underscores.


    //E.g. given nums = [0,0,1,1,1,2,2,3,3,4], we want [0, 1, 2, 3, 4, _, _, _, _, _]
    
    //let ans = 1. and i = 1, we can compare element at index i to its prior element. If the element at index i and the prior element do not equal, then we replace the element at index ans with the element at index i and increment ans.
    let ans = 1;
    let i = 1;
    for(i; i < nums.length; i++) {
        if(nums[i] != nums[i-1]) {
            nums[ans] = nums[i];
            ans++;
        }
    }

    return ans;
};