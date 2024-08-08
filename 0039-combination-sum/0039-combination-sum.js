/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 /*
Time-complexity: O(2^t) - At each recursion step we can make 2 decisions, either continue to include the current element value, or not. This forms a decision tree with height of at most the target value. Therefore 2 to the power of t, going down paths of include the element or not.
Space-complexity: O(t) - In the worst case, the recursive call stack can go as deep as the target value divided by the smallest candidate value, because you could keep adding the smallest candidate until you reach or exceed the target. Therefore, the maximum depth of the recursion tree (and thus the call stack space) is more accurately represented by O(t/min(candidate)). If the minimum candidate = 1, then it would simplify to O(t) for the worst case stack height.
Solution:
We return when we have a sum equalling to our target. Using recursion we explore possible combinations with the current candidate index as much as possible. We then pop after we exaust that search. Then continue recursively searching the next candidates (incrementing candidate index and curr accordingly... remember sum will be the same within that particular recursive function after return). Critical: if the end of the list is reached or if the total exceeds the target, the search path is terminated.
 */
var combinationSum = function(candidates, target) {
    let output = [];

    var backtrack = function(sum, curr, candIdx) {
            //Add completed curr array to output
            if(sum === target) {
                output.push([...curr]);
                return;
            }

            //Search path is terminated: If we have a larger sum or we are over the index limit, return
            if(sum > target || candIdx >= candidates.length) {
                return;
            }

            curr.push(candidates[candIdx]); //Note that push returns the length of the array, so push before passing array in as a function.
            
            //call backtrack, first stick with current candidate, then move on to the next one.
            backtrack(sum+candidates[candIdx], curr, candIdx);
            curr.pop();
            backtrack(sum, curr, candIdx+1);
    }

    backtrack(0, [], 0);

    return output;
};