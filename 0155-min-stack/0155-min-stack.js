/*
Time complexity: O(1), as explained below.
Space complexity: O(N) worst case, if we have N push operations then the minStack will be O(N)
We wanna try to create a MinStack where:
- push, pop, top, and getMin are all O(1)

How can getMin be O(1)? We can consider using a stack where at each stack position keep a pair [value, minimum value]
This way, looking for the minimum only requires finding the last value and accessing the minimum. 
To set the minimum value at every pair, we can compare the current value with the minimum value from the pair directly below it
*/
var MinStack = function() {
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.minStack.length === 0) {
        this.minStack[0] = [val, val]
    } else {
        var lastIndex = this.minStack.length-1;
        var getMin = Math.min(this.minStack[lastIndex][1], val);
        this.minStack[lastIndex+1] = [val, getMin];
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.minStack[this.minStack.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */