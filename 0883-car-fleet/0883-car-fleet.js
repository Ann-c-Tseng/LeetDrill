/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
 /*

 */
var carFleet = function(target, position, speed) {
    let pairs = [];

    //Create [position, speed] pairs
    for(let i = 0; i < position.length; i++) {
        pairs.push([position[i], speed[i]]);
    }

    //Sort the pairs in descending order by position (closest position pair to the target at the front of array)
    pairs.sort((a, b) => b[0] - a[0]); //O(n log n), Timsort

    let stack = [];
    for(let [pos, spd] of pairs) {
        let time = (target - pos) / spd; //key equation to determine how many time units (hours) you need to move to get to the target

        //Check that the stack is not empty or that the current car's time to target takes longer than the top of stack
        //Taking longer than the top of stack means that this car is in its own fleet for now. Push time to stack.
        if(stack.length === 0 || time > stack[stack.length-1]) {
            stack.push(time);
        }
    }
    return stack.length;
};