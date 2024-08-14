/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
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