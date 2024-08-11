/**
 * @param {string} s
 * @return {string[][]}
 */
 /*
Time complexity: O(2^N * N) - For each character in the string, it can either be a part of a new partition or continue the current path. Branching factor is therefore 2 at each step O(2^N). For each substring, isPalindrome is called and worst case takes O(N) due to the length of the substring.
Space complexity: O(N) - space used to store the recursive stack. E.g. for s= "aaa", max recursive stack depth is 3 which equals to n (2^3 = 8 tree nodes/calls - editorial diagram with 8 nodes and depth of 3).
Return a valid path if that path's number of characters now equals s.length.
For the backtracking: 
Use a forloop to keep track of where the left over start index begins. Grab the current substring to check if it is a palindrome. 
We need to partition at every index until we reach the end of the string.
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
        //Our end index is used to see where the left over substring begins.
        //We need to partition at every index until we reach the end of the string.
        for(let leftoverStartIdx = partitionIdx + 1; leftoverStartIdx <= s.length; leftoverStartIdx++) {
            let substring = s.slice(partitionIdx, leftoverStartIdx);
            if(isPalindrome(substring)) {
                path.push(substring);
                backtrack(leftoverStartIdx, path);
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