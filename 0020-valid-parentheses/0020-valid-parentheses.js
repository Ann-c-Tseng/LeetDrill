/**
 * @param {string} s
 * @return {boolean}
 */
 /*
 Time complexity: O(N) - worst case loop through all elements in s
 Space complexity:  O(N) - the stack can end up storing the entirety of s characters (all opening brackets) 
 
 A valid parenthesis expression should have sub-expressions that are also valid. Knowing this, what if whenever we encounter a matching pair of parenthesis in the expression, we remove it from the expression? This way if our entire expression is valid, our final result would be an empty expression (almost a recursive approach here).

 The Stack data structure can come in handy here in representing the recursive structure of the problem. 

 1. Initialize stack 
 2. Process each bracket of the expression one at a time
 3. If we encounter an opening bracket, we push it into the stack. We will process it later, but lets move onto the sub-expression ahead.
 4. If we encounter a closing bracket, we check the element at the top of the stack. If the element at the top of the stack is an opening bracket of the same type, then we pop it off the stack and continue processing. Else, this implies an invalid expression
 5. In the end, we are left with a stack still having elements, then this implies an invalid expression.

 JS does not have a built in Stack structure. But we can use an array with the following methods to help create a stack functionality:
 1. push() - add element to THE END OF THE ARRAY & pop() - pop element from THE END OF THE ARRAY
 2. unshift() & shift() (these methods need to reindex the elements in the array which increase time complexity, so choose push and pop as first options)
 */
var isValid = function(s) {
    //Use object to map closing bracket key to their corresponding opening bracket value
    const mappings = {
        ")":"(",
        "]":"[",
        "}":"{"
    }

    const openBracketStack = [];

    for(const c of s) {
        if(c === "(" || c === "[" || c === "{") {
            openBracketStack.push(c);
        }

        if(c === ")" || c === "]" || c === "}") {
            if(openBracketStack[openBracketStack.length-1] === mappings[c]){
                openBracketStack.pop();
            } else {
                return false;
            }
        }
    }

    if(openBracketStack.length === 0) return true;

    return false;
};