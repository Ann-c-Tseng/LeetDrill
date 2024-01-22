/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //Using a map, we can have key value pairs that record our solution as we go along
    //So for example, if we have strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    //Then our map can have key that record the count of letters per anagram pattern
    //While the values can be the anagram words that fit that pattern (thus the solution).
    //Namely, the three patterns key and their corresponding values are as follows -
    // 1b 1a 1t : ["bat"]
    // 1t 1a 1n : ["nat", "tan"]
    // 1t 1e 1a : ["ate", "eat", "tea"]
    
    //Since all we are doing is using a map and counting the characters of each word, we know
    //we have a limit of 26 lowercase letters. The overall time complexity will be:
    //O(m * n * 26) => Reducing to O(m * n)
    //where m is the total number of input strings that we are given in the array,
    //times n which is the average length of a string (because we are counting how many 
    //characters we have in each string)... multiply by 26 for 26 lowercase letters possible.
    
    //Basic map functions: get(key), set(key, value), delete(key), and size property
    const result = new Map();
    
    strs.forEach((str) => {
        //For each string, create an arr (length 26) that can store its character count. 
        //Where a = index 0, z = index 25. In ascii a = 97 and z = 122.
        //Meaning a - a = 0, z - a = 25, which goes well with the arr indexing.
        const arr = new Array(26).fill(0);
        Array.from(str).forEach(char => {
            const idx = char.charCodeAt(0) - "a".charCodeAt(0);
            arr[idx] = arr[idx]+1;
        })
        
        //Once we have that character count array, store the string value at that key's map position
        //NOTE: For maps and sets in JS -> 
        //There is one important thing to note about using an Object or Array as a key: 
        //the Map is using the reference to the Object to compare equality, 
        //not the literal value of the Object. In JavaScript {} === {} returns FALSE, 
        //because the two Objects are not the same two Objects, despite having the 
        //same (empty) value
        //My solution: Make the key into a string 
        const arrayStr = arr.toString();
        if(result.get(arrayStr) == undefined) {
            result.set(arrayStr, [str]);
        } else {
            result.get(arrayStr).push(str);
        }
    })
    
    //Now each character key is mapped to values of arrays of anagrams. Return the values. 
    return Array.from(result.values());
};