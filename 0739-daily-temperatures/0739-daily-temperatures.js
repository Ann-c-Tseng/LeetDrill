/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 /*
Time complexity: O(N) - go through all elements of the temperatures array once
Space complexity: O(N) - tempStack
//answer[i] equal number of days you have to wait after the ith day to get a warmer temperature
//If there is no future day for which this is possible, keep answer[i] === 0
//Store in the stack pairs of [temp, index]. Using the index we can get the difference of days
//The process of storing elements and then walking back through them matches the behavior of a stack. We can use this to find the days that go after a specific temperature until we hit the warmer day (if it exists)
 */
var dailyTemperatures = function(temperatures) {
    const tStack = [];
    const answer = new Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++) {
        //Is our stack not empty, and this temp greater than the temp at the top of our stack 
        //If we do find our current temperature greater than the top of our stack,
        //we can calculate the corresponding day differences for the days prior with lower temps.
        //Remember to pop the top value from the stack afterwards
        while(tStack.length !== 0 && (temperatures[i] > tStack[tStack.length-1][0])) {
            const stackIndex = tStack[tStack.length-1][1];
            answer[stackIndex] = i - stackIndex;
            tStack.pop();
        }

        //If our stack is empty, or if this temp is not greater than the top of our stack,
        //add the current temperature and index value to our monotonic decreasing stack
        tStack.push([temperatures[i], i]);
    }

    //We don't have to fill empty zeroes into the answer, since it is already initialized with 0s uptop.
    return answer;
};