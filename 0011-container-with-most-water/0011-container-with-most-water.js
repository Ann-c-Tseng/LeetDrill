/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var l = 0;
    var r = height.length-1;
    var maxVolume = 0;
    while(l < r) {
        var volume = 0;
        var width = r - l;
        if(height[l] > height[r]) {
            volume = height[r] * width;
            r--;
        } else {
            volume = height[l] * width;
            l++;
        }
        
        if(maxVolume < volume) {
            maxVolume = volume;
        }        
    }
    return maxVolume;
};