/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const product = new Array(nums.length);
    product[0] = 1;
    
    for(var i = 1; i < nums.length; i++) {
        //prefix product: where prior indexed prefix product multiplies by prior index number
        product[i] = product[i-1] * nums[i-1]; 
    }
    
    //console.log("prefix: " + product);
    
    var postfix = 1;
    for(var j = nums.length-2; j >= 0; j--) {
        product[j] = product[j] * nums[j+1] * postfix;
        //console.log(nums[j+1] + " " + postfix);
        postfix = nums[j+1] * postfix;
    }
    
    //console.log("solution: " + product);
    
    return product;
};