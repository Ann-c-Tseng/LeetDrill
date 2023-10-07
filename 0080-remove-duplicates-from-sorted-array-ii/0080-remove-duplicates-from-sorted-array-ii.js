/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var toReplace = 2;
    
    //If nums is length 0, 1, or 2, just return the output equals length + array unchanged
    if(nums.length <= 2) {
        return nums.length;
    }

    for(var counter = 2; counter < nums.length; counter++) {
        //When we hit an element that needs to be overwritten we will overwrite it,
        //which is both when counter = toReplace, as 
        //well as when counter does not equal toReplace.
        if(nums[counter] !== nums[toReplace-2]) {
            nums[toReplace] = nums[counter];
            toReplace++;
        }
    }

    return toReplace;
};