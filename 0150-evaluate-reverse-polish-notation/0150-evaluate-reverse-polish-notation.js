/**
 * @param {string[]} tokens
 * @return {number}
 */

 /*
 Time complexity: O(N)
 Space complexity: O(N) (technically O(N+4) because of the OPERATORS map, but simplifies to O(N))

 Use a js object (hashmap) to store key value pairs of operator to arrow functions of the operation given a and b values.
 Go through the tokens linearly. If we hit a token that is an operator, pop secondValue and firstValue (pop twice) to do the operation.
 Note how we create a const operation function below to apply the operaton function in the OPERATORS map.
 The after we got the operation result, push that back to the top of the stack.
 If we just encounter a number, simply convert the string number to an actual Number type and push it onto the stack.
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