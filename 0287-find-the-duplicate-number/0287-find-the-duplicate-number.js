/**
 * @param {number[]} nums
 * @return {number}
 */

 /* Time complexity: O(N) 
    Space complexity: O(1)
Finding duplicate elements - consider Floyd's tTortoise and Hare algorithm again
1. Initialize slow and fast pointers to the first element of the input list nums
2. Enter a loop to detect cycle:
a. Update the slow to the next element with nums[slow]
b. Update the fast to the next element after nums[fast], effectively moving two steps
c. Check if slow is equal to fast. If so, a cycle has been found
3. After finding the cycle, reset one of the pointers (slow2) to the beginning of the list
4. Enter the loop to find the duplicate element
a. Update slow using nums[slow]
b. Update slow2 using nums[slow2]
c. Continue this process until slow is equal to slow2, which represents the duplicate element
5. Return the duplicate element found (slow)

Why 2 phases:
Phase 1 - cycle detection
- move the tortoise and hare, advance the hare twice as fast as the tortoise until it catches up with the tortoise or a cycle is detected. If the cycle is detected, reset the tortoise and move the hare back to its position before the reset.
Phase 2 - cycle START detection
- Move the tortoise and hare one step at a time until they match again. The position where they match again is the starting point of the cycle, corresponding to the duplicate element.

The duplicate corresponds to the starting point of the cycle.
 */
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    while(true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if(slow === fast) {
            break;
        }
    }

    let slow2 = nums[0];

    while(slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;
};