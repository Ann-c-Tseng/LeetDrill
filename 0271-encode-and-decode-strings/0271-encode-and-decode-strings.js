/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
/* Using the chunking encoding/decoding method - 
Consider delimeter to be #, with the length value at the front of that pound.
Go through the strs in encode, add the length of the string aand # to the front of each string
Then return the strings as a single encodedString

In decode, use a while loop to better control the i index movement throughout the string
Get the delimiter index (indexOf - from i to the first occurence of the # sign)
Find the length value prior to the pound index, using slice + parseInt
Use that length value and slice again to find the actual string
Add string to the array
Increment the i index to the start of the next length
After the entire string is gone through, return array result

Time complexity:
O(N), N denote the total number of characters across all strings in the input list.
We iterate through each character of the string once for both decoding and encoding.

Space complexity:
O(K), K denote the number of strings. We don't count the output as part of the space
complexity, but for each word, we use some space for the length and delimiter chosen
*/

var encode = function(strs) {
    var encodedString = "";
    strs.forEach((s) => {
        encodedString = encodedString + s.length + "#" + s;
    })
    
    return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    var decodedStrings = [];
    var i = 0
    while(i < s.length) {
        //Find the delimiter
        //indexOf - Grab the index of the first
        //occurence of the specified character or substring.
        //First argument is the delimiter we are looking for,
        //while i specifies the index we START looking from (fromIndex).
        var delim = s.indexOf('#', i);
        
        //Find the length value before the delimiter
        //slice - Grab integer value length, from i to delim index (non inclusive).
        //ParseInt - make that string value into an integer value
        const length = parseInt(s.slice(i, delim));
        
        //Get the string, which is of 'length' length after the delimiter
        var str = s.slice(delim + 1, delim + 1 + length);
        
        //Add the string to the list
        decodedStrings.push(str);
        
        //Move the index to the start of the next length
        i = delim + 1 + length;
    }
    
    return decodedStrings;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */