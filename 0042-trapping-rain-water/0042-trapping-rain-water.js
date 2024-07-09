/**
 * @param {number[]} height
 * @return {number}
 */

 /*
Time complexity: O(N) - go through each element of the array at most once.
 */
var trap = function(height) {
    if(height.length === 0) return 0;

    var l = 0;
    var r = height.length - 1;

    var leftMax = height[l];
    var rightMax = height[r];

    var result = 0;

    while(l < r) {
        //We decide which pointer to shift depending on the comparison between leftMax and rightMax.
        //If leftMax < rightMax, we can increment left. If leftMax >= rightMax, we can decrement right.
        //We also will update leftMax and rightMax depending on the above.
        //Then we find how much water can be trapped at that position and add it to the result
        if(leftMax < rightMax) {
            l++;
            leftMax = Math.max(leftMax, height[l]); //update leftMax
            result += leftMax - height[l];
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r]) //update rightMax
            result += rightMax - height[r];
        }
    }
    return result
};