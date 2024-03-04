/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    /* RATIONALE */
    //We know that a rotated sorted array has 2 halves,
    //a left half and a right half.
    
    //If we have a mid point anywhere along the array
    //We can determine whether we are in the left sorted half
    //or the right sorted half. We can do so by comparing
    //the mid point value to the left-pointer value of the array
    //1. If L <= Mid, we know mid value is within the left portion 
    //2. If L > Mid, we know mid value is within the right portion
    //This can all be understood because the array is sorted + rotated this way.
    
    //If we are in the Left Sorted Half of the array:
    //Should go to the left of mid or right of mid?
    //Given [4, 5, 6, 7, 0, 1, 2]. If our mid is at 7 and our target is LESS
    //than mid, we can go either to the left (4, 5, 6) or right (0, 1, 2)
    //To determine left or right, compare target to the left pointer value
    //which is the smallest value in the Left Sorted Half.
    //If the target is >= that value, we know to go to the left because every
    //value to the right of mid would be < the target.
    //Thus we also know:
    //If the target is < that value, we know to go to the right.
    
    //If we are in the Right Sorted Half of the array:
    //Should go to the left of mid or right of mid?
    //Given [4, 5, 6, 7, 0, 1, 2]. If our mid is at 1 and our target is GREATER
    //than mid, we can go either to the left (4, 5, 6, 7, 0) or right (2)
    //To determine left or right, compare target to the right pointer value
    //which is the largest value in the Right Sorted Half.
    //If the target is <= that value, we know to go to the right because every
    //value to the left of mid would be > the target.
    //Thus we also know:
    //If the target is > that value, we know to go to the left.
    
    var l = 0;
    var r = nums.length-1;
    
    while(l <= r) {
        var mid = l + Math.floor((r-l)/2);
        if(target === nums[mid]) {
            return mid;
        }
        
        //Determine if we are in the Left Sorted Half or 
        //Right Sorted Half of the array
        if(nums[l] <= nums[mid]) { //In the left sorted half
            //Determine whether to move to the left half or right half
            
            //If target is > mid, look to the right half
            if(target > nums[mid]) {
                l = mid + 1;
            } else {
                //target is <= mid, so target can be in the left or right half
                //If target is < left most value, go to the right
                if(target < nums[l]) {
                    l = mid + 1;
                } else { //otherwise go to the left
                    r = mid - 1;
                }
            }
            
        } else { //In the right sorted half
            //Determine whether to move to the left half or right half

            //If target is < mid, look to the left half
            if(target < nums[mid]) {
                r = mid - 1;
            } else {
                //target is >= mid, so target can be in the left or right half
                //If target is > right most value, go to the left
                if(target > nums[r]) {
                    r = mid - 1;
                } else { //otherwise go to the right
                    l = mid + 1;
                }
            }
        }
    }
    
    return -1;
};