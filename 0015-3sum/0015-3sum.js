/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
// var solution = new Map();
//     for(let i = 0; i <= nums.length-3; i++) {
//         var j = i + 1;
//         var k = j + 1;
//         while(k <= nums.length-1) {
//             var sum = nums[i] + nums[j] + nums[k];
//             //Note: keys to maps cannot be arrays, therefore sort numbers in triplet and
//             //change keys to strings to store in map.
//             var keyVal = [nums[i], nums[j], nums[k]].sort().toString();
//             if(sum === 0 && !solution.has(keyVal)) {
//                 solution.set(keyVal, [nums[i], nums[j], nums[k]]);
//             }
//             j = j + 1;
//             k = k + 1;
//         }
//     }
    
//     return Array.from(solution.values());
    
    var solution = [];
    
    //JS sort numerically
    nums.sort((a,b) => a-b);
    var a;
    
    //console.log(nums);
    
    for(let i = 0; i < nums.length; i++) {
        a = nums[i];
        //We don't want to reuse the value in the same position twice
        //So if i isn't the first value in the input array, and 
        //this value a = nums[i-1], that means it is the same value
        //as the prior nums[i] value, therefore we go straight to the next iteration of the forloop
        if(i > 0 && a === nums[i-1]) {
            continue;
        }
        
        //If the value a is not a repeat of the prior number in the given array, we can 
        //solve the rest of this problem with the 2Sum method and L & R pointers
        var l = i+1;
        var r = nums.length-1;
        
        //While l and r pointer positions are not equal.
        //compute the sum
        while(l < r) {
            //console.log(a + " " + nums[l] + " " + nums[r]);
            var threeSum = a + nums[l] + nums[r];
            //If the sum is too great, decrement r
            if(threeSum > 0) {
                r--;
            }else if(threeSum < 0) {
                //If the sum is too little, increment l
                l++;
            } else {
                //If the sum equals 0, add to result
                solution.push([a, nums[l], nums[r]]);

                //Now HOW do we update the pointers?
                //We know that if our left pointer hits
                //a previously added solution, we gotta shift it
                //shifting the left pointer shifts the other pointers, so we only have to shift this one. On the condition that the left pointer has not past the right
                l++;
                while(nums[l] === nums[l-1] && l < r) {
                    l++;
                }
                
            }
        }
    }
    
    return solution;
    
};