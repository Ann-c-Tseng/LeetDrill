
var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    const bucket = this.map[key] || [];
    this.map[key] = bucket;
    bucket.push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp, value = '', bucket = this.map[key] || []) {
    let [left, right] = [0, bucket.length - 1];

    while(left <= right) {
        const mid = (left + right) >> 1;
        const [guessValue, guessTimestamp] = bucket[mid];
        
        const isTargetGreater = guessTimestamp <= timestamp;
        if(isTargetGreater) {
            value = guessValue;
            left = mid + 1;
        }

        //Don't have to assign value here because the closes previous timestamp is still value = '' at this point.
        //Think of the timeline concept, only if we have a guessTimestamp <= timestamp, do we want to update value to the guess value.
        const isTargetLess = timestamp < guessTimestamp;
        if(isTargetLess) right = mid - 1;
    }
    return value;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */