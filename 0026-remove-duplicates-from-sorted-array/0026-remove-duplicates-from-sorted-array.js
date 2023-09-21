/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //The array we are given nums, is sorted in non-decreasing order.
    //We want to remove duplicates in-place, meaning no using extra space.
    //The relative order of the elements should be kept the same, and so still in ascending order.
    //We are returning k, which is the NUMBER of unique elements
    //We do not have to care about what we leavev beyond the returned k, so they are represented by underscores.


    //E.g. given nums = [0,0,1,1,1,2,2,3,3,4], we want [0, 1, 2, 3, 4, _, _, _, _, _]

    //ans * = 1, i . = 1
    //   .
    //   *
    //[0,0,1,1,1,2,2,3,3,4], nums[i] = 0 & nums[i-1] = 0, increment i (.)

    //ans * = 1, i . = 2
    //     .
    //   *
    //[0,0,1,1,1,2,2,3,3,4], nums[i] = 1 & nums[i-1] = 0, replace * with . and increment * & .

    //ans * = 2, i . = 3
    //       .
    //     *
    //[0,1,1,1,1,2,2,3,3,4], nums[i] = 1 & nums[i-1] = 1, increment i (.)

    //ans * = 2, i . = 4
    //         .
    //     *
    //[0,1,1,1,1,2,2,3,3,4], nums[i] = 1 & nums[i-1] = 1, increment i (.)

    //ans * = 2, i . = 5
    //           .
    //     *
    //[0,1,1,1,1,2,2,3,3,4], nums[i] = 2 & nums[i-1] = 1, replace * with . and increment * & .

    //ans * = 3, i . = 6
    //             .
    //       *
    //[0,1,2,1,1,2,2,3,3,4], nums[i] = 2 & nums[i-1] = 2, increment i (.)


    //ans * = 3, i . = 7
    //               .
    //       *
    //[0,1,2,1,1,2,2,3,3,4], nums[i] = 3 & nums[i-1] = 2, replace * with . and increment * & .

    //ans * = 4, i . = 8
    //                 .
    //         *
    //[0,1,2,3,1,2,2,3,3,4], nums[i] = 3 & nums[i-1] = 3, increment i (.)

    //ans * = 4, i . = 9
    //                   .
    //         *
    //[0,1,2,3,1,2,2,3,3,4], nums[i] = 4 & nums[i-1] = 3, replace * with . and increment * & .

    //ans * = 5, i . = 9
    //                     .
    //           *
    //[0,1,2,3,4,2,2,3,3,4], i reach the end of array. Return index at *, which is ans = 5 (5 unique elements)

    //let ans = 1. and i = 1, we can compare element at index i to the element right behind it (i-1). If the element at index i and the element right behind it (i-1) are equal, just increment i. 
    
    //If they are not equal, then we replace the element at index ans with the element at index i and increment ans and i.

    let ans = 1;
    let i = 1;
    for(i; i < nums.length; i++) {
        if(nums[i] != nums[i-1]) {
            nums[ans] = nums[i];
            ans++;
        }
    }

    return ans;
};