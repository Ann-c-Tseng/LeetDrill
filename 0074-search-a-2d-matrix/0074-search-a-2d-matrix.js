/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //We can consider this similar to binary search, using pointers
    //to go through the entire matrix as if it is one big sorted array.
    var cols = matrix[0].length;
    var rows = matrix.length;
    var left = 0;
    var right = (cols * rows) - 1;
    
    while(left <= right) {
        var mid = Math.floor(left + (right - left) / 2); //prevent overflow
        var midVal = matrix[Math.floor(mid/cols)][mid%cols];
        if(midVal === target) {
            return true;
        } else if (target < midVal) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};