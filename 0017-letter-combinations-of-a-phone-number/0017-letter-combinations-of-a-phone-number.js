/**
 * @param {string} digits
 * @return {string[]}
 */
 /*
Time-complexity: O(4^N * N) - The worst-case is when the input is only 7s and 8s. We have to explore 4 additional path for every digit and each combo in the worst case can costs up to N to build the combination. 
Space-complexity: O(N) - Space occupied by the recursion call stack. Go as deep as the number of digits in the input. Hashmap is O(1).
Backtracking:
Get the current digit, and the array corresponding to that digit.
For every letter in the array, add to the combo at that position. Call backtrack and continue down the path with upcoming positions and digits. Pop afterwards.
 */
var letterCombinations = function(digits) {
    //Map out the digit to an array of its corresponding letters
    const phoneMap = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }

    const output = [];

    var backtrack = function(combo, idx) {
        //Base cases: if digits is empty, return []
        //Otherwise if digits.length is the combo, we can add to output and return.
        if(digits === "") {
            return [];
        }

        if(digits.length === combo.length) {
            let stringCombo = [...combo].join("");
            output.push(stringCombo);
            return;
        }

        //Get the current digit, and the array corresponding to that digit.
        //For every letter in the array, add to the combo, backtrack with the combo and next letter in the phone number
        let curDigit = digits.charAt(idx);
        let letterArr = phoneMap[curDigit];

        for(let i = 0; i < letterArr.length; i++) {
            let letter = letterArr[i];
            combo.push(letter);
            backtrack(combo, idx+1);
            combo.pop();
        }        
    }

    backtrack([], 0);
    
    return output;
};