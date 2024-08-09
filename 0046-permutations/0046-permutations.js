/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 /*
    Time-complexity: O(N!*N^2), but the dominating factor is N!. We have N factorial (N!) permutations, since the pattern is like 3*2*1. We are inserting n elements into each permutation that is n^2.
    Space-complexity: O(N! * N), Each recursive call generates permutations of the remaining elements. For an array of length N, there are N! permutations. Each permutation is an array of length N, so storing all permutations requires O(N * N!) space. The recursive call stack is O(N) per permutation.
    Solution:
    Break down the given nums array into smaller subarrays, and at each sub array, place the current element at nums[0] at every array index location for that permutation. Add that permutation to the result.
 */
var permute = function(nums) {
    if(nums.length === 0) {
        return [[]];
    }

    //Subproblem: keep calling the function with the input nums array, without the first element. 
    //Then add the current element to every position in this subproblem array.
    let perms = permute(nums.slice(1));
    const res = [];

    //Go through every permutation that we have.
    //For each permutation, go through every possible index that we can insert the current value (nums[0]) into the permutation
    //(include at p.length, since we can add to the end of the array as well)
    perms.forEach((p) => {
        for(let i = 0; i <= p.length; i++) {
            //Create a copy so we can alter it multiple times
            let pCopy = [...p];
            pCopy.splice(i, 0, nums[0]); //splice(index to insert, elements to remove starting at index to insert - 0 means remove none, element)
            res.push(pCopy);
        };
    });
    return res;
};