/**
 * @param {number} n
 * @return {string[][]}
 */
 /*
Time-complexity: O(N!) - this is because each queen we place will take up a column + a diagonal. Meaning the next queen placed will have N-2 column options. The third queen N-4 options as the first two queens each have a column and a diagonal taken. This is roughly an N factorial pattern.
Space-complexity: O(N^2) - The three sets at most have O(N). The board space costs O(N^2).
 */
var solveNQueens = function(n) {
    const col = new Set();
    const posDiag = new Set(); //(r+c) = constant
    const negDiag = new Set(); //(r-c) = constant

    const res = [];

    //Initializing the board with periods
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));

    var backtrack = function(r) {
        //Base case: found a valid n queen solution when we have placed the final queen on the final row.
        //We can join each row's elements into single strings, and return the copy as a result
        if(r === n) {
            let copy = board.map(row => row.join(''));
            res.push(copy);
            return;
        }

        for(let c = 0; c < n; c++) {
            if(col.has(c) || posDiag.has(r+c) || negDiag.has(r-c)) {
                //Sets tells us that another previously placed queen can attach
                //so we don't place in this column
                continue;
            }

            //Update sets and add the Queen
            col.add(c);
            posDiag.add(r+c);
            negDiag.add(r-c);
            board[r][c] = "Q"

            backtrack(r+1);

            //Pop
            col.delete(c);
            posDiag.delete(r+c);
            negDiag.delete(r-c);
            board[r][c] = ".";
        }
    }

    backtrack(0);
    return res;
};