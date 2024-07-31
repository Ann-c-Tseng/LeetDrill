/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 /*
Time-Complexity: O(log(MIN(m, n))), since we are doing the binary search on the smaller array. 
Space-Complexity: O(1)

The main idea here is to visualize the merged sorted array, and consider what makes up the left partition of that array including the media value (if odd) or values to form the median value (if even). Notice that the left partition of that final array can be formed by finding the correct left partitions within nums1 and nums2. Notice that the maximum value from these left partitions is the median value from the combined sorted array. Notice the left part of our combined sorted array can't have more than roughly half of the elements (i.e. if total length is 12, the left partition can't be > 6), this is important as it gives us a limit on what can be selected from our input arrays. We will also only use binary search on the smaller array because it results in faster time complexity, and it makes sure we won't over select elements more than the half value of the combined sorted array.
 */


var findMedianSortedArrays = function(nums1, nums2) {
    //We cannot combine the arrays and then sort them because this takes O(m + n).
    //How do we simulate finding the median of the combined sorted array without combining them.

    //Ensure the smaller array is always 'nums1'
    if(nums2.length < nums1.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let n1 = nums1.length;
    let n2 = nums2.length;

    let total = n1 + n2;
    let target = Math.floor((total + 1) / 2); //Stores the index for median value of the combined sorted array if odd, or the first index of the two values required to calculate the median of the combined sorted array if even.

    //Binary Search:
    let l = 0;
    let r = n1;

    while(true) {
        let take1 = Math.floor((l + r)/2); //middle index for the smaller array
        let take2 = Math.floor(target - take1); //the corresponding index in the second array depending on take1

        let max1 = take1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[take1 - 1]; //max value from the left partition of the smaller array
        let min1 = take1 == n1 ? Number.MAX_SAFE_INTEGER : nums1[take1]; //min value from the right partition of the smaller array

        let max2 = take2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[take2 - 1]; //max value from the left partition of the larger array
        let min2 = take2 == n2 ? Number.MAX_SAFE_INTEGER : nums2[take2]; //min value from the right partition of the larger array

        //Core idea here, adjust the search range. Find the valid splits by adjusting left and right pointers.
        if(max1 > min2) {
            //it means that the median lies in the left half of the combined array
            r = take1 - 1;
            continue;
        }
        if(max2 > min1) {
            //it means that the median lies in the right half of the combined array
            l = take1 + 1;
            continue;
        }

        //Now we calculate the final median value depending on if it is odd or even
        let medianValOdd = Math.max(max1, max2);
        if(total % 2 === 1) {
            return medianValOdd;
        } else {
            return(medianValOdd + Math.min(min1, min2)) / 2.0;
        }
    }
};

