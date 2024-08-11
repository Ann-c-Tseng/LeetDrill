/**
 * @param {string} s
 * @return {string[][]}
 */
 /*


 */
var partition = function(s) {
    var backtrack = function(partitionIdx, path) {
        //Base case: when we do not have any leftover substring anymore.
        //Meaning our partition index equals input string length
        if(partitionIdx === s.length) {
            output.push([...path]);
            return;
        }

        //Grab the current substring which we want to check if it's a palindrome.
        //Grab the left over substring
        for(let end = partitionIdx + 1; end <= s.length; end++) {
            let substring = s.slice(partitionIdx, end);
            if(isPalindrome(substring)) {
                path.push(substring);
                backtrack(end, path); //remaining string starting index is now at end.
                path.pop();
            }
        }
    }

    function isPalindrome(s) {
        let lo = 0, hi = s.length-1;

        while(lo < hi) {
            if(s[lo++] !== s[hi--]) return false;
        }
        return true;
    }

    const output = [];
    backtrack(0, []);

    return output;
};