/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {    
    if(s.length <= 1) {
        return true;
    }
    
    var lp = 0;
    var rp = s.length-1;
    
    while(lp < rp) {
        while(!alphaNumeric(s[lp]) && lp < rp) {
            lp++;
        }
        while(!alphaNumeric(s[rp]) && lp < rp) {
            rp--;
        }
        
        //console.log("l: " + s[lp] + "  -  " + "r: " + s[rp]);
        
        if(s[lp].toLowerCase() !== s[rp].toLowerCase()) {
            return false;
        }
        
        lp++;
        rp--;
    }
    
    return true;
    
};

var alphaNumeric = function(c) {
    //97-122 = a-z
    //65-90 = A-Z
    //48-57 = 0-9
    var n = c.charCodeAt(0);
    //console.log(n + " " + c)
    if((n >= 97 && n <= 122) || (n >= 65 && n <= 90) || (n >= 48 && n <= 57)) {
        return true;
    }
    return false;
}