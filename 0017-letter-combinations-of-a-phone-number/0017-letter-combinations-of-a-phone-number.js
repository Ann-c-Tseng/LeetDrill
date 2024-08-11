/**
 * @param {string} digits
 * @return {string[]}
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

    //"235"
    //[] [a] [adj] [adk] [adl] [aej] [aek] [ael] [afj] [afk] [afl]
    //We are popping letters based on position
    var backtrack = function(combo, idx) {
        //Base case
        if(digits === "") {
            return [];
        }

        if(digits.length === combo.length) {
            let stringCombo = [...combo].join("");
            output.push(stringCombo);
            return;
        }

        //At this button in the combo, we need to try every character in that position
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