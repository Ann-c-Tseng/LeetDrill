/**
 * @param {string[]} tokens
 * @return {number}
 */

 /*
 Time complexity: O(N)
 Space complexity: O(N)
 */

 const OPERATORS = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => Math.trunc(a/b),
    "*": (a, b) => a * b,
 };

var evalRPN = function(tokens) {
    const stack = [];

    for(const token of tokens) {
        if(token in OPERATORS) {
            const secondValue = stack.pop();
            const firstValue = stack.pop();
            const operation = OPERATORS[token];
            stack.push(operation(firstValue, secondValue));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};