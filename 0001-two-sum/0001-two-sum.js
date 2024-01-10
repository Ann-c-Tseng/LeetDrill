/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndex = new Map(); //Use map to store numbers and their indices

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        //If complement exists in the map, then return the two indices
        if(numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }

        //Otherwise, store the current number (key) and its index (value) in the map 
        numToIndex.set(nums[i], i);
    }

    throw new Error("No solution found");
};