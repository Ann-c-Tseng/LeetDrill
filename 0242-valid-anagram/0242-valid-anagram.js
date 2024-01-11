/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    
    const map = new Map();
    for(var i = 0; i < s.length; i++) {
        if(map.has(s.charAt(i))) {
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        } else {
            map.set(s.charAt(i), 1);
        }
    }
    
    for(var j = 0; j < t.length; j++) {
        if(map.has(t.charAt(j)) && map.get(t.charAt(j)) > 0) {
            map.set(t.charAt(j), map.get(t.charAt(j)) - 1);
        } else if(map.has(t.charAt(j)) && map.get(t.charAt(j)) <= 0) {
            return false;
        } else {
            return false;
        }
    }
    
    return true;
};