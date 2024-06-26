/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    //Frequency map: O(N)
    var frequencyMap = new Map();
    for(var i = 0; i < nums.length; i++) {
        if(frequencyMap.has(nums[i])) {
            frequencyMap.set(nums[i], frequencyMap.get(nums[i])+1);
        } else {
            frequencyMap.set(nums[i], 1);
        }
    }
    
    //We can sort the frequency map, bringing maximum to the top.
    //Sorting requires O(N log N) time complexity
    //Note here the condition in the arrow function should be
    //b[1] - a[1] to sort map by VALUE in descending order.
    var sortedMap = new Map([...frequencyMap].sort((a, b) => b[1] - a[1]));
    
    //Put top k values from the sortedMap into the solution array
    //Note the spread operator used here, then j grabs the top k
    //elements, and [0] for the key from the key-value pair.
    //Spread operator is typically O(N), since it iterates
    //through the map object and makes a copy for every element,
    //but this is typically not going to be a bottleneck for most code.
    var solution = [];
    for(var j = 0; j < k; j++) {
        solution[j] = [...sortedMap][j][0];
    }
    return solution;
};