/**
 * @param {number[]} nums
 * @return {number}
 */
 //We stop at the second to last position before hitting the last array index
 //At each position in the array, we see what is the next possible maximum index we can hop to,
 //and compare that to the previous recorded newMax. If it is greater (further hop) than our last recorded new Max, then update newMax
 //If we reach the point where our current index i is equal to the oldMax, that means we can move oldMax up to jump to the newMax value,
 //thus recording a valid jump with the jump variable, which is then returned after the forloop.

 //Time complexity: O(n)
 //Space complexity: O(1)
var jump = function(nums) {
    var oldMax = 0;
    var newMax = 0;
    var jump = 0
    for(var i = 0; i < nums.length - 1; i++) {
        newMax = Math.max(newMax, i + nums[i])
        if(i === oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
};