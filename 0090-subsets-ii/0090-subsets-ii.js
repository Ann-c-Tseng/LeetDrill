/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /*
Time-complexity: O(N*2^N) - If given the input without duplicates, we will have 2^N subsets. The backtracking function runs in worst case N times.
 */
var subsetsWithDup = function(nums) {
    const res = [];
    nums.sort((a, b) => a-b); //Sort the array in ascending order, so we can shift the pointer correctly later on
    
    var backtrack = function(i, subset) {
        if(i === nums.length) {
            res.push([...subset]);
            return;
        }

        //All subsets that include nums[i]
        subset.push(nums[i]);
        backtrack(i+1, subset);
        subset.pop();

        //All subsets that do NOT include nums[i]
        while(i+1 < nums.length && nums[i] === nums[i+1]) {
            i += 1;
        }
        backtrack(i+1, subset);
    }

    backtrack(0, []);
    return res;
};