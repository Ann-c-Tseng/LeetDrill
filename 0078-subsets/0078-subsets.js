/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /*
Time-complexity: O(2^N * N) - The number of subsets an array has is 2^n. The backtracking function runs in the worst case n iterations.
Space-complexity: O(N) - the curr array is modified in-place during backtracking, and can go up to n elements.
Explanation:
Consider we go from subsets of length 0 to n. A subset can be of k length.
If our curr array that keeps track of a single subset equals to k our subset length, we add it to the output and return.
We backtrack to use the next integers to complete the other combinations of length k, pop to backtrack.
 */
var subsets = function(nums) {
    let output = [];
    let n = nums.length;

    var backtrack = function(first, curr, k) {
        //Solution is found -  a single combination array is done and pushed to output
        if(curr.length === k) {
            output.push([...curr]);
            return;
        }

        //Iterate over all possible candidate digits
        //within a given subset length k
        for(let i = first; i < n; i++) {
            //place nums[i] into current combination
            curr.push(nums[i]);

            //use next integers to complete the combination
            backtrack(i+1, curr, k);

            //backtrack
            curr.pop();
        }
    }

    //We are building subsets of length 0 ([]) to n
    //E.g. [1, 2, 3] of n=3, will have subsets of [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]
    //Every backtracking call from this forloop will bring back sets of those lengths per iteration.
    for(let k = 0; k < n+1; k++) {
        backtrack(0, [], k);
    }
    return output;
};