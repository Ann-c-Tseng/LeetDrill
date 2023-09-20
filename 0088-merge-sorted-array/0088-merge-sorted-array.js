/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //Key logic:
    //Because nums1 and nums2 both come already sorted in non-decreasing order
    //We can compare the largest number starting from the end non-0th element in nums1 &
    //the last number in nums2 to complete the sort.

    //Move . pointer forward for the array that we just chose from with greater element.
    //E.g. [1, 2, 3, 0, 0, 0] & [2, 5, 6] with m = 3 and n = 3
    //                |
    //       .                    .
    //[1, 2, 3, 0, 0, 0] & [2, 5, 6] | 3 <= 6

    //             |
    //       .                 .
    //[1, 2, 3, 0, 0, 6] & [2, 5, 6] | 3 <= 5

    //          |
    //       .              .   
    //[1, 2, 3, 0, 5, 6] & [2, 5, 6] | 3 >= 2 

    //       |
    //    .                 .
    //[1, 2, 3, 3, 5, 6] & [2, 5, 6] | 2 >= 2

    //    |
    // .                    .
    //[1, 2, 2, 3, 5, 6] & [2, 5, 6] | 1 <= 2 

    // |
    // .                  .
    //[1, 2, 2, 3, 5, 6] & [2, 5, 6] | now array 2 is at -1 index.

    
    //now, while an array is still not past 0th index (in this case array1 is still at 0 index and not past it), loop through and fill.

    // |       
    // .
    //[1, 2, 2, 3, 5, 6] 

    //Done!


    //Take another example: [1, 2, 0, 0, 0] [1, 1, 1]
    //              |
    //     .                    .
    // [1, 2, 0, 0, 2] & [1, 1, 1] | 2 >= 1

    //           |
    //  .                       .
    // [1, 2, 0, 1, 2] & [1, 1, 1] | 1 >= 1

    //        |   
    //.                         .
    // [1, 2, 0, 1, 2] & [1, 1, 1] | now array 1 is at -1 index, so we fill the rest as array 2 has not passed 0 index yet.

    //       |
    //                         .
    //[1, 2, 1, 1, 2] & [1, 1, 1]
    
    //    |
    //                      .
    //[1, 1, 1, 1, 2] & [1, 1, 1]

    // |
    //                   .
    //[1, 1, 1, 1, 2] & [1, 1, 1]

    //Done!


    var midx = m-1;
    var nidx = n-1;
    var k = m+n-1;

    while(midx >= 0 && nidx >= 0) {
        if(nums1[midx] >= nums2[nidx]) {
            nums1[k--] = nums1[midx--]
        } else {
            nums1[k--] = nums2[nidx--]
        }
    } 

    while(midx >= 0) {
        nums1[k--] = nums1[midx--]
    }

    while(nidx >= 0) {
        nums1[k--] = nums2[nidx--]
    }

    return nums1;
};