/**
 * @param {number[]} heights
 * @return {number}
 */
 /*
 Time complexity: O(N) - iterate through entirety of heights array in worst case.
 Space complexity: O(N) - stack in the worst case can store N number of pairs corresponding to heights array input.

Monotonic Increasing Height Stack - contains index that the rectangle can extend backwards to, and height being the rectangle in question
Key: can we keep extending the prior rectangles to the current rectangle? If not (current is shorter than the prior rectangles in stack),
that means we need to compute the area of the prior rectangles and pop those from the stack since we are done considering them.
If there are rectangles left over from the stack, those mean they can be extended from the start index to the very end of the histogram.
Those areas should then be computed to see if they beat the max height we have been keeping track of.
 */
var largestRectangleArea = function(heights) {
    const stack = []; //Will be storing [index, height] pairs
    let maxArea = 0;

    for(let i = 0; i < heights.length; i++) {
        let start = i;

        //pop => if the stack is not empty and current rectangle height is less than top of stack
        while(stack.length && heights[i] < stack[stack.length-1][1]) {
            const [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i-index));
            start = index;
        }
        stack.push([start, heights[i]]);
    }

    //If any is left in the stack, see if maxArea can be replaced
    for(const [i,h] of stack) {
        maxArea = Math.max(maxArea, h * (heights.length - i));
    }
    
    return maxArea;
};

