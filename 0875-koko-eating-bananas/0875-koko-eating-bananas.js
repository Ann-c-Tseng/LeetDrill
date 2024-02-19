/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    var left = 1;
    var right = Math.max(...piles);
    var mid = 0;
    
    while(left < right) {
        var mid = Math.floor((right + left) / 2);
        //console.log("left: " + left + " " + " + right: " + right);
        //console.log("mid: " + mid)
        
        var hours = 0;
        for(var i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i]/mid);
        }
        //console.log("piles: " + piles[0] + " + hours: " + hours)
        
        if(hours <= h) { 
            //If Koko CAN eat all the bananas UNDER or AT the time h
            //Then we know that at whatever k value mid is
            //(OR less than that mid value) is where our solution lies.
            //Therefore binary search from left to right = mid now.
            right = mid;
        } else {
            //Otherwise search the other half
            left = mid + 1;
        }
    }
    
    //If left is greater than or equal to the right, return the left value 
    //which is the maller k than right k value
    return left;
}