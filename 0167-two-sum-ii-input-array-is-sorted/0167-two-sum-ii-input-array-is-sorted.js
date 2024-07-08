/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

 /*
Time Complexity: O(N). The array is traversed at most once using the two-pointer approach, making the time complexity linear.
Place two pointers at the beginning and end of the input array. If the sum of the numbers at the ptrs are less than target, increment left pointer. If sum is greater than target, decrement right pointer. Otherwise, we found target = to the sum and can grab the pointer index (plus 1). The while loop can end when the solution has the answer, therefore when solution.length !== 0.
 */
var twoSum = function(numbers, target) {
    var leftPtr = 0;
    var rightPtr = numbers.length-1;
    var solution = [];
    while(solution.length === 0) {
        var sum = numbers[leftPtr] + numbers[rightPtr];
        if(sum < target) {
            leftPtr++;
        } else if(sum > target) {
             rightPtr--;
        } else {
            solution[0] = leftPtr+1;
            solution[1] = rightPtr+1;
        }
    }
    return solution;
};