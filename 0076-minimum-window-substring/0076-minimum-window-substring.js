/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

 /*
    Time complexity: O(N) (where we have the window shrinking and expanding algorithm, going through s in linear time).
    Space complexity: O(1) (constant space), as the additional memory used doesn’t depend on the input size. The algorithm efficiently maintains the sliding window without requiring any dynamically allocated data structures.
    We initializes two maps: countT to store character frequencies of t, and window to track the current window substring in s.
    By using a sliding window approach with two pointers, the algorithm efficiently traverses s and maintains a linear time complexity of O(n).
    Iterate through each character in s. Expand the window by adding characters to window. If the character count in window is less than or equal to the count in countT, increment 'have' variable. While 'have' equals 'need' (i.e., all characters from t are in the window): Update the result if the current window size is smaller. Shrink the window by moving the left pointer. Adjust character counts in window. Move the right pointer to expand the window further. 
 */
var minWindow = function(s, t) {
    const countT = new Map();
    const window = new Map();

    //Generate a character map for the string T, which we will use to compare with the window substrings in s later on.
    //The initial loop that creates a character map for string t takes O(t.length) time. Since t is a fixed-size string (not dependent on the input size), we can consider this step as constant time, i.e., O(1)
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
    //Iterate through every character in s O(s) for outer loop.
    
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


        //Inner while loop shrinks the window, The outer while loop runs from rightPtr = 0 to rightPtr = s.length - 1.
        //In each iteration, we process one character from the input string s. Since we process each character exactly once, the time complexity for this part is O(s). The inner loop runs when the condition have === need is met. It doesn’t necessarily iterate over all elements from leftPtr to rightPtr. Instead, it adjusts the window by moving the left pointer (leftPtr) and updating the character counts.The total number of iterations of the inner loop across all outer loop iterations is proportional to the length of the input string s.Therefore, the time complexity for this part is also O(n). In summary, the sliding window algorithm in your case maintains a linear time complexity of O(n) due to its efficient traversal of the input string. Nested loops can indeed lead to O(n^2), but here, the inner loop’s behavior ensures that we avoid that quadratic complexity.
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