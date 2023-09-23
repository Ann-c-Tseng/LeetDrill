/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // We can itterate through the nums array, everytime we hit a number that does not
    // equal to val, then we put that number at the front of the array, incrementing a counter
    // that keeps track of the next available space at the front of the array as we iterate.
    //Time complexity is O(n) because we iterate through each element of the array once
    //Space complexity is O(1) as we are modifying in place and not using additional space.

        var fillIndex = 0;
        for(var i = 0; i < nums.length; i++) {
            //If the number we are looking at currently
            //does not equal val, then place it at the next
            //available space according to fillIndex
            if(nums[i] !== val) {
                nums[fillIndex] = nums[i];
                fillIndex++;
            }   
        }

        //The fillIndex would end up at the element after the last non val fill spot, which would
        //equal the total number of unique non val numbers.
        return fillIndex;
};