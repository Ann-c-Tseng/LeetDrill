/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 /* 
 Time complexity: O(2^N * N) - sorting is O(N log N) + in worse case each element can be included or excluded which makes O(2^N) + O(N) in worse case where for each valid combination we push a copy of length N to the result array.
 Space complexity: O(N) - recursive stack takes O(N) space. The current combination's storage can at worse be N length.
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a - b);
    res = []
    var backtracking = function(cur, start, target) {
        if(target === 0) {
            res.push([...cur]); //push copy to result if we reached the target
        }
        if(target < 0) { //don't wanna go down a path that is greater than the target (therefore target goes into the negatives)
            return;
        }
        let prev = -1;
        //Consider every candidate in the input
        for(let i = start; i < candidates.length; i++) {
            //For a new path, we will want to skip duplicate numbers, so skip loop iteration
            if(candidates[i] === prev) {
                continue;
            }
            //Append candidate to current array as possible partial solution
            cur.push(candidates[i]);
            backtracking(cur, i+1, target - candidates[i]); //i+1, choose  any of the remaining candidate)
            cur.pop();

            prev = candidates[i];
        }
    }
    backtracking([], 0, target);
    return res;
};