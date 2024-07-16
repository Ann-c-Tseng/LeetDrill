/**
 * @param {number} n
 * @return {string[]}
 */
/*
Time complexity: O(4^n/root(n) - Catalan number)
Space complexity: O(n), recursive call depending on max depth of recursive call stack, which is 2n

Use backtracking, recursively generating valid strings of length 2n.
If the current string is invalid, we will not ocntinue the recursive process with it.
Instead, we will backtrack to the previous valid string in the recursive path.
This allows us to focus on generating valid strings, saving time and resources.
Continue the recursion only on the valid strings until we reach the ones of length 2n.
*/
var generateParenthesis = function(n) {
    const answer = [];
    backtracking(answer, "", 0, 0, n);
    return answer;
};

var backtracking = function(answer, curString, leftCount, rightCount, n) {
    //Base case: when our string is at the full length
    if(curString.length === 2 * n) {
        answer.push(curString);
        return;
    }

    //Second case: if our leftCount < n, we can add a left parenthesis
    if(leftCount < n) {
        curString += "(";
        backtracking(answer, curString, leftCount + 1, rightCount, n);
        curString = curString.slice(0, -1);
    }

    //Last case: if our leftCount > rightCount, we can add a right parenthesis
    if(leftCount > rightCount) {
        curString += ")";
        backtracking(answer, curString, leftCount, rightCount + 1, n);
        curString = curString.slice(0, -1);
    }

}