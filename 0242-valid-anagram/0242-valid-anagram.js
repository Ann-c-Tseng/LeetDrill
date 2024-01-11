/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
// Solution 1, using a map and counting the characters to see if the two strings match:
    //Time complexity: O(s+t) = O(n). Space complexity: O(s) = O(n)
    if(s.length !== t.length) {
        return false;
    }
    
    const map = new Map();
    for(var i = 0; i < s.length; i++) {
        if(map.has(s.charAt(i))) {
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        } else {
            map.set(s.charAt(i), 1);
        }
    }
    
    for(var j = 0; j < t.length; j++) {
        if(map.has(t.charAt(j)) && map.get(t.charAt(j)) > 0) {
            map.set(t.charAt(j), map.get(t.charAt(j)) - 1);
        } else if(map.has(t.charAt(j)) && map.get(t.charAt(j)) <= 0) {
            return false;
        } else {
            return false;
        }
    }
    
    return true;
    

    //Solution 2:
    //Sort the strings and compare if they are the same.
    //Some sorting algorithms like bubblesort can take up to O(n^2) which is really bad
    //Others may take O(nlogn)...
    //JS sort() is based on Timsort, which is O(nlogn)
    //We can split the string into an array, then sort it, then join the characters back into a string
    //The complexity of split without a string split delimiter is the string itself, so s and t lengths. Therefore O(s) and O(t). Same goes for join with no delimiter.
    
//     if(s.length !== t.length) {
//         return false;
//     }
    
//     return s.split('').sort().join('') === t.split('').sort().join('');
};