/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

 /*
    Time complexity: O(N)
 */
var minWindow = function(s, t) {
    const countT = new Map();
    const window = new Map();

    //Generate a character map for the string T, which we will use to compare with the window substrings in s later on.
    for(let i = 0; i < t.length; i++) {
        if(countT.get(t[i]) !== undefined) {
            countT.set(t[i], countT.get(t[i]) + 1);
        } else {
            countT.set(t[i], 1);
        }
    }

    console.log(countT)

    //Variables to compare as we go through the two-pointer window substrings.
    let have = 0;
    let need = t.length;

    //Our result can be recorded down as index pointers (left and right values) 
    let res = [-1,-1];

    //Our result length can start as negative infinity. So any minimum length will be greater than this comparatively.
    let resLen = Number.POSITIVE_INFINITY;

    //Go through the main two-pointer window algo:
    //Iterate through every character in s
    
    let rightPtr = 0;
    let leftPtr = 0;
    while(rightPtr < s.length) {
        //Grab character and update current window
        let c = s[rightPtr];
        if(window.get(c) !== undefined) {
            window.set(c, window.get(c) + 1)
        } else {
            window.set(c, 1)
        }

        //Does c exist as a character in countT?
        //And is the window count less than the countT map? This means we can add to our "have" count
        //If so, update our have count
        if(countT.get(c) && window.get(c) <= countT.get(c)) {
            have = have + 1;
        }


        while (have === need) {
            let sizeOfWindow = rightPtr - leftPtr + 1;
            if (sizeOfWindow < resLen) {
                res = [leftPtr, rightPtr];
                resLen = sizeOfWindow;
            }

            let lPtrChar = s[leftPtr];
            window.set(lPtrChar, window.get(lPtrChar) - 1);

            if (countT.has(lPtrChar) && window.get(lPtrChar) < countT.get(lPtrChar)) {
                have--;
            }

            leftPtr++; // Move the left pointer to shrink the window
        }
        rightPtr++;
    }
    
    return s.slice(res[0], res[1] + 1);
};